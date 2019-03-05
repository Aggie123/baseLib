跨域问题：
何为跨域：
同域：  协议Scheme+主机Domain+端口Port

对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为https），端口号（443为https的默认值），以及主机 (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信

1. 用nigix代理解决
试用场景:本地测试preview或临时域名跨域问题，可通过前端本地搭建nginx服务代理服务域名解决
如：
前端本地域名test.preview.a.com/stat, 
前端测试环境域名preview.a.com/stat,
前端线上域名a.com/stat,
后端测试环境请求域名preview.a.com/api,
后端线上环境请求域名a.com/api,
  1. 前端请求配置：
  ```
  let apiUrl='/api'
  async function fetchApi(apiUrl, params){
    try {
        let response = await fetch(url,{
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            method:'POST',
            mode:'no-cors', //不允许跨域（本地preview环境测试跨域问题配置nginx解决）
            // credentials:'include', //带cookie
            body:JSON.stringfy(params)
        })
    }catch(err){
        throw err;
    }
  }```
  2. hosts配置：
    127.0.0.1 test.a.com
  3. nginx配置：
    ```
    #proxy服务器
    server {
        listen       81;
        server_name  www.domain1.com;

        location / {
            proxy_pass   http://www.domain2.com:8080;  #反向代理
            proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
            index  index.html index.htm;

            # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
            add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
            add_header Access-Control-Allow-Credentials true;
        }
    }```

    如
    ```
    server {
    listen       80;
    server_name  localhost;
    #proxy_set_header Host       $host;
    #proxy_set_header Connection close;
    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
    }

    location /stat {
      proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   Host             $http_host;
        proxy_set_header   X-NginX-Proxy    true;
        proxy_set_header   Connection "";
        proxy_http_version 1.1;
        proxy_pass http://127.0.0.1:4008;
    }

    location /api {
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        #proxy_set_header   Host             $http_host;
        proxy_set_header   X-NginX-Proxy    true;
        proxy_set_header   Connection "";
        proxy_set_header   Host             mijia.mi.srv;
        proxy_http_version 1.1;
        proxy_pass http://preview.a.com/api;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}```

2. CORS（缺点：需要后端配置）
  服务端配置： Access-Control-Allow-Orign: www.domain.com (配置所需要的域名，注意当需要带cookie时不能设置为**)

3. JSONP （缺点：只支持GET）
  ```
  <script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
  <script>
      function jsonp(data) {
        console.log(data)
    }
  </script>```