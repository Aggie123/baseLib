
/**关键字
 *oop - Object Oritened Programming
 *prototype object 原型对象
 *prototype chain 原型链
 *constructor 构造函数
 *Instance 实例
 */

//1. 构造函数
function Person (first, last){
	this.first=first;
	this.last=last;
}

let p1=new Person('Jim','Smith');

//所有实例共享此prototype
Person.prototype.firstCaps=function(){
	console.log(this.first.toUpperCase());
}

p1.firstCaps(); //JIM
p1.constructor === Person.prototype.constructor; //true

function lastCaps(){
	console.log(this.last.toUpperCase());
}

lastCaps.call(p1); //SMITH
lastCaps.apply(p1); //SMITH

/*2. call vs apply
两个方法都是变换指定被调用的方法的this为新的对象o
apply(o, [arg1,arg2,...])
call(o,arg1,arg2,...)*/

function genEmail(from, content){
	console.log(` Hi ${this.first} ${this.last}, \n ${content} \n From ${from}`);
}

genEmail.apply(p1,['Lily','Happy New Year!']); 
/*
 Hi Jim Smith, 
 Happy New Year! 
 From Lily
*/
genEmail.call(p1,'Lily','Happy New year!');
/*
 Hi Jim Smith, 
 Happy New Year! 
 From Lily
*/