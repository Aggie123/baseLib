###
####1. CSS js 阻塞 DOM问题
    CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
    JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
    浏览器遇到 <script>且没有defer或async属性的 标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。
Good practice:
    <script>最好放底部
    <link>最好放头部
    如果头部同时有<script>与<link>的情况下，最好将<script>放在<link>上面

####2. 