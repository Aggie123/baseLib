/**
 * 正则表达式
 * \w 等价于[0-9a-zA-Z_]
 * \W 等价于 [^0-9a-zA-Z_]
 */

//1.删除空格
function removeEmpty(str){
	return str.replace(/\s*/g,'')
}

//2. 删除首尾空格
function removeFirstLastEmpty(str){
	return str.replace(/^\s*|\s*$/g,'')
}

//3.去处左空格
function removeFirstEmpty(str){
	return str.replace(/^\s*/,'')
}

//4.去除有空格
function removeLastEmpty(str){
	return str.replace(/\s*$/,'')
}

let str = ' hello there sunglasses a b c !  '
console.log(removeEmpty(str))
console.log(removeFirstLastEmpty(str))
console.log(removeFirstEmpty(str))
console.log(removeLastEmpty(str))

//5. 将字符串非控制符放在数组中 - 用空格或多个空格分隔
console.log(str.split(/\s*/))

//常见匹配
//匹配电话号码
let regPhone = new RegExp('')
let reg3=/a/
//匹配邮箱:数字或字母开头，中间可是多个数字字母下划线或-；@；数字字母；.;2-4个字母结尾
let regEmail = /^([0-9a-zA-Z])(\w|-)+@([0-9a-zA-Z])+\.([a-zA-Z]{2,4})$/
console.log(regEmail.test('aaaaaa@234.com')) //true
console.log(regEmail.test('233333@123.345')) //false