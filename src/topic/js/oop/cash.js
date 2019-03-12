function Cash(cash){
	this.value = typeof cash ==='number'?cash:0;
	this.yuan = Math.floor(this.value/100)
	this.jiao = Math.floor(this.value%100/10)
	this.fen = Math.floor(this.value%10)
}

Cash.add = function (obj1,obj2) {
	let cashObj = new Cash(obj1.value + obj2.value);
	return cashObj
}

Cash.prototype.add = function (obj) {
	let cashObj = new Cash(this.value + obj.value);
	return cashObj;
}

Cash.prototype.toString = function (cashObj) {
	return `${cashObj.yuan}元${cashObj.jiao}角${cashObj.fen}分`
}

const cash1 = new Cash(105)
const cash2 = new Cash(66)

const sum1=cash1.add(cash2)
const sum2=Cash.add(cash1,cash2)
// const sum3=new Cash(cash1 + cash2)

// console.log(sum1)
console.log(sum2)
// console.log(sum3)

/*function Cash(val) {

	this.value = typeof val ==='object'?val.value:val;
	console.log(val, this.value)

	this.add = function (val1,val2){

		let sumV = (typeof val1 ==='object'?val1.val:val1) + (typeof val1 ==='object'?val1.val:val1) 
		let sumVArr = sumV.toString().split()
		return `${sumVArr[0]}元${sumVArr[1]}角${sumVArr[2]}分`
	}

	let cashArr = this.value.toString().split()
	console.log(cashArr)
	return `${cashArr[0]}元${cashArr[1]}角${cashArr[2]}分`
}

Cash.prototype.toString=function(){
	return `${cashArr[0]}元${cashArr[1]}角${cashArr[2]}分`
}

Cash.prototype.add=function(cash){
	let sumV = this.value + (typeof cash ==='object'?cash.value:cash);
	console.log(this.value,sumV)
	let sumVArr = sumV.toString().split('')
	console.log(sumVArr)
	return `${sumVArr[0]}元${sumVArr[1]}角${sumVArr[2]}分`
}

const cash1 = new Cash(105)
const cash2 = new Cash(66)

const sum1=cash1.add(cash2)
const sum2=Cash.add(cash1,cash2)
// const sum3=new Cash(cash1 + cash2)

console.log(sum1)
console.log(sum2)
// console.log(sum3)


*/