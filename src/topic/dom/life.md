###HTML DOM的事件
1. DOMContentLoaded
    触发时机：HTML文档完全加载和解析完成之后，DOM已生成，此时可以为这些DOM元素绑定事件，初始化接口等
    当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。另一个不同的事件 load 应该仅用于检测一个完全加载的页面。 在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。注意：DOMContentLoaded 事件必须等待其所属script之前的样式表加载解析完成才会触发。

2. load
    触发时机：当一个资源及其依赖资源已完成加载时，将触发load事件。
```
<script>
  window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });
</script>
```

3. onload
4. 
###阻塞：
1. 样式阻塞：
    对于外部样式文件而言，并不会影响到DOMCotentLoaded事件，它并不会等待外部样式文件加载完成。
    但是！！！，如果一个脚本是紧跟着link样式出现，那么这个脚本就会等样式加载完成了。
5. d



2. 