/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
  return nums.forEach((item,i)=>{ return nums.forEach((value,j)=>{
    let sum=item+value;
    if(sum===target){
    	let result=[i,j]
    	console.log(result)
        return [i,j]
    }     
  })
  })
}

var twoSum1 = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
      if(Math.abs(nums[i]) <= Math.abs(target)) {
        for(let j = i+1; j < nums.length; j ++) {
          if(nums[i] + nums[j] === target) {
              return[i, j]
          }
        }
      }     
    }
};

function twoSum3(nums,target){
	let length=nums.length
	for (var i = 0; i <length; i++) {
		for (var j=i+1; i<length;i++){
			if(nums[i]+nums[j]===target)
				return [i,j]
		}
	}
}

let result = twoSum([2,6,13,18],15)
console.log(result)

let result1 = twoSum1([2,6,13,18],15)
console.log(result1)

let result3 = twoSum3([2,6,13,18],15)
console.log(result3)

//2.
{
	function reduceF(total,cv,ci,arr){
		if (total.has) {}
	}

	function lengthOfLongestSubstring(str){
		let arr=str.split('');
		let result = arr.reduce(reduceF,arr[0])
	}
	
}

//3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var l3=new ListNode(0);//初始化
    var rst=l3;
    var temp=0,flag=0;//当前值，进位值
    if(l1==null&&l2==null) return rst;
    while(l1!=null||l2!=null){
        var num1=l1==null?0:l1.val;//空链表补0
        var num2=l2==null?0:l2.val;//空链表补0
        temp=num1+num2+flag;
        if(temp>9){
            flag=1;
            temp=temp%10;
        }else{
            flag=0;
        }
        l3.next=new ListNode(temp);//.next为节点，初始化一个新节点
        //处理下一位
        l3=l3.next;
        l1=l1==null?null:l1.next;//空链表补null
        l2=l2==null?null:l2.next;
    }
    if(flag==1){
        l3.next=new ListNode(1);
    }

    return rst.next;
};

//4.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //ascii码表示字符，初始赋值-1
    var arr=new Array(256);
    console.log('arr',arr)
    arr.fill(-1);
    if(s.length==0) return 0;
    if(s.length==1) return s.length;
    //len全局最长，cur局部最长
    var len=0,cur=0,start=-1;
    //s[i].charCodeAt()字符转ASCII码
    for(var i=0;i<s.length;i++){
        //若下标大于开始位置表示，该字符在此次局部范围已出现过
        if(arr[s[i].charCodeAt()]>start){
            start=arr[s[i].charCodeAt()];
        }
        arr[s[i].charCodeAt()]=i;//赋值最近下标
        cur=i-start;//局部长度
        len=len>=cur?len:cur;
        // console.log('abc',s[i],s[i].charCodeAt(),arr[s[i].charCodeAt()])
        console.log('abc1',start,len,cur)
    }
    return len;
};

console.log('lengthOfLongestSubstring:',lengthOfLongestSubstring('abcabcbb'))

//??
function maxLengthOfSubstr(str){

	let arr = str.split(''),length=arr.length;
	let start = 0, maxLength=0;
	if(length===0||length===1) return length;

	for(let i=1;i<length;i++){
		if(arr[start]!==arr[i]){
			let thisLength=i-start+1;
			console.log('thisl',thisLength)
			if(thisLength>maxLength) maxLength=thisLength;
		}else{
			start++;
		}
		console.log('aa',i,arr[i],start,maxLength)
	}

	return maxLength;
}

console.log('maxLengthOfSubstr',maxLengthOfSubstr('abcabcbb'))

//5.整数翻转
function reverseInt(val){
	let arr=val.toString().split('').reverse();
	if(arr[0]===0||arr[0]==='0') {
		arr.shift()
	}
	if(arr[arr.length-1]==='-'){
		arr.unshift('-');
		arr.pop()
	}
	let resNum=Number(arr.join())
	if(resNum<-Math.pow(2,31)||resNum>Math.pow(2,31)-1) return 0;
	return arr.join('')
}

console.log(reverseInt(123))
console.log(reverseInt(-345))
console.log(reverseInt(230))

var reverse = function(x) {
    let arr=x.toString().split('').reverse();
    if(arr[0]===0||arr[0]==='0') arr.shift()
    if(arr[arr.length-1]==='-'){
        arr.unshift('-');
        arr.pop();
    }
    let resNum=Number(arr.join(''))
    if (-Math.pow(2, 31) > resNum || Math.pow(2, 31) - 1 < resNum) {
        return 0;
    }
    return resNum;
    
};

var reverse = function(x) {
    var sign = '';
    var str = x.toString();
    if (x >= 0) {
        sign = '';
    } else {
        sign = '-';
        str = str.split('-')[1];
    }
    var revStr = str.split('').reverse().join('');
    var resStr = sign + revStr;
    var resNum = parseInt(resStr);
    if (-Math.pow(2, 31) > resNum || Math.pow(2, 31) - 1 < resNum) {
        return 0;
    }
    return resNum;
};

//6。回文数
function isPalindrome(x){
	if(x<0) return false;
	let revStr=x.toString().split().reverse().join();
	if(revStr===x.toString()) return true;
	return false
}

//7.最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return null;
    
    let arr=[],minLength=-1;
    strs.forEach((item,i)=>{
        if(!item) return null;
        arr[i]=item.split('')
        if(minLength===-1) minLength=arr[i].length;
        minLen=minLength>arr[i].length?arr[i].length:minLength;
    })
    console.log('ar',arr,arr[0][1])
    let prefixLen=0;

    for(let i=0;i<minLength;i++){
        let flag=true;
        for(let j=0;j<arr.length;j++){
            flag = false&&(arr[j][i]===arr[j+1][i]);
            console.log('x',j,i,arr[j][i],arr[j+1][i])
            if(!flag) break;
        }
        if(flag) prefixLen=i;
    }

    return strs[0].substr(0,prefixLen);
};

console.log('long',longestCommonPrefix(["dog","racecar","car"]))//输入
console.log('long',longestCommonPrefix(["flower","flow","flight"]))//输入


