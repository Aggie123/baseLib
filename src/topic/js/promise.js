let p1=new Promise((resolve,reject)=>{
	console.log('res:',resolve);
	console.log('rej:',reject);
	reject('err')
	// setTimeout(reject(), 0, 'reject');
}).then((e)=>{
	console.log('then:',e);
}).catch(e=>{
	console.log('catch:',e);
})

let p2=new Promise((resolve,reject)=>{
	console.log('res:',resolve);
	console.log('rej:',reject);
	setTimeout(resolve('yes'), 0, 'resolve');
}).then((e)=>{
	console.log('then:',e);
}).catch(e=>{
	console.log('catch:',e);
})

Promise.all([p1,p1]).then(e=>{
	console.log('all-e:',e);
})

const p3 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result);

const p4 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));