let a={
	x:1
}
let b=a;
//a={x:1} b={x:1}
b.x1=2;
//b={x: 1, x1: 2} a={x: 1, x1: 2}
b.y=a={x:3}
//b={x:1,x1:2,y:{x:3}} a={x:3}