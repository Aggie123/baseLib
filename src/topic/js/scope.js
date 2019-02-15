/**关键字
 *scope 作用域
 *scope chain 作用域链
 *closure 闭包
*/
function add(a){
	console.log(`a:${a}`);
	return function(b){
		console.log(`b:${b}`);
		console.log(`a+b=${a+b}`);
	}
}

add(7)(10)
