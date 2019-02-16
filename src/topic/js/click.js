function repeat(str,count) {
	let value=str.repeat(count);
	return value;
}

function repeatThis (){
	console.log(window.event,this)
	//MouseEvent{}
	//Window{}
	console.log(window.event.target)
	//<li ...</li>
	let targetDom=window.event.target;
	let value = repeat(targetDom.innerHTML,targetDom.getAttribute('repeat-count'));
	targetDom.innerHTML=value

	// return value;
}

//2. 获取list的index
let liDom = document.getElementById('list2')
let liItems = document.getElementsByClassName('item2')

//1. wrong: will get 3 3 3
/*for(let i=0;i<liItems.length;i++){
	liItems[i].onclick=function(){
		console.log(i); // 3 3 3
	}
}*/

//方法一：立即执行函数
for(let i=0;i<liItems.length;i++){
	liItems[i].onclick=(function(){
		return function(){
			console.log(i) //0 1 2 
		}()
	})

}

//方法二：for循环里面给对应DOM节点添加index属性记住当前值
for(let i=0;i<liItems.length;i++){
	console.log(liItems[i])
	liItems[i].setAttribute('index',i);
	liItems[i].onclick=function(){
		console.log(window.event,window.event.target.getAttribute('index'));
		console.log(liItems,typeof liItems,Array.isArray(liItems))
		console.log(liItems[i].getAttribute('index'))
	}
}

//方法三：嵌套函数引用外层变量，闭包实现
for(let i=0;i<liItems.length;i++){
	liItems[i].onclick=(function(){
		return function(j){
			console.log(j,i) //MouseEvent, 0 1 2
		}
	})(i)
}

/*立即执行函数*/
function test(){
    console.log('a');
}();
//VM8748:3 Uncaught SyntaxError: Unexpected token )
function test(a){
    console.log('a');
}(1);
//1


(function test(){
    console.log("a");
} 
//VM8624:3 Uncaught SyntaxError: Unexpected end of input
(function (){
    console.log("a");
})()
//VM8627:2 a
//undefined
(function (){
    console.log("a");
}())
//VM8633:2 a
//undefined