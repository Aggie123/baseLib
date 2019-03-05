用nigix代理解决
  1. 前端请求配置：
      a. async function fetchApi(url, params){
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
}
  2. hosts配置：
  3. nginx配置：