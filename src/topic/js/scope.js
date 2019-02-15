/**关键字
 *scope 作用域
 *scope chain 作用域链
 *closure 闭包
*/
function add(a){
	++a;
	console.log(`a0:${a}`);
	return function(b){
		console.log(`b:${b}`);
		console.log(`a+b=${a+b}`);
	}
}

function addV1(a){
	++a;
	console.log(`a1:${a}`);
	return function(b,c){
		console.log(`a:${a}`);
		console.log(`b:${b} c:${c}`);
		console.log(`c+b=${c+b}`);
	}
}

function addV2(a){
	++a;
	console.log(`a2:${a}`);
	return function(b,c){
		console.log(`b:${b} c:${c}`);
		console.log(`c+b=${c+b}`);
	}
}

add(7)(10)
addV1(1)(2,3)
addV2(2)(3,4)

//Demo2
function sayHello(name) {
  var text = 'Hello ' + name;
  var say = function() { console.log(text); }
  say();
}
sayHello('Joe'); //Hello Joe


function sayHello2(name) {
  var text = 'Hello ' + name; // Local variable
  var say = function() { console.log(text); }
  return say;
}
var say2 = sayHello2('Bob');
say2(); // logs "Hello Bob"


function sayHello3(name) {
  var text = 'Hello ' + name; // Local variable
  var say = function(a) { console.log(a); }
  return say;
}
var say3 = sayHello3('Cindy');
say3('Amy'); // logs "Amy"


function sayHello4(name) {
  var text = 'Hello ' + name; // Local variable
  this.say = function() { console.log(name); }
}
var say4 = sayHello4('Cindy');
console.log(sayHello4('Cindy'));
console.log(say4);
say4.say(); // logs "Hello Bob"
