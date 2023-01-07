const MyPromise = require('./promise4')

let promise1 = new MyPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise2 = promise1.then((value)=>{
    // throw new Error('')
    // return Promise.resolve(value + '-> then -> promise2')
    return value + '-> then -> promise2';
    // return new Promise((resolve,reject)=>{
    //     resolve(value+ '-> then -> promise2')
    // })
})
.then((value)=>{
    console.log(value)
})
