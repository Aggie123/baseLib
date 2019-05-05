/*
类数组

定义：
拥有length属性，length-0可隐式转换为number类型，并且不大于Math.pow(2,32)（比如：22.33和'022'都满足条件）
不具有数组所具有的方法

例子：
javascript中常见的类数组有arguments对象和DOM方法的返回结果。
比如 document.getElementsByTagName()

判别：
function isArrayLike(o) {
    if (o &&                                // o is not null, undefined, etc.
        typeof o === 'object' &&            // o is an object
        isFinite(o.length) &&               // o.length is a finite number
        o.length >= 0 &&                    // o.length is non-negative
        o.length===Math.floor(o.length) &&  // o.length is an integer
        o.length < 4294967296)              // o.length < 2^32
        return true;                        // Then o is array-like
    else
        return false;                       // Otherwise it is not
}

类数组转换为数组:两种方法
Array.from(arraylike)
Array.prototype.slice.call(arraylike)
*/

//arguments和实参是一一对应的，互相改变影响
function test(a,b){
	console.log('arguments0:',a,b,arguments); //1 2 Arguments(4) [1, 2, 3, "a", callee: ƒ, Symbol(Symbol.iterator): ƒ]
	arguments[1]=8; 
	console.log('arguments:',a,b,arguments); //1 8 Arguments(4) [1, 8, 3, "a", callee: ƒ, Symbol(Symbol.iterator): ƒ]
	return arguments;
}

let a= test(1,2,3,'a')
//