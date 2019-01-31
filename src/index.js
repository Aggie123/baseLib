console.log('index js');

//1. 

function test(){
	var a =1;
	let b =2;
	a++;
	b++;
	console.log('1',a,b);
	return a;
}

console.log('2',test());