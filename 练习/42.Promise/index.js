// const MyPromise = require('./promise4')

// let promise1 = new MyPromise((resolve,reject)=>{
//     resolve('promise1')
// })

// let promise2 = promise1.then((value)=>{
//     // throw new Error('')
//     // return Promise.resolve(value + '-> then -> promise2')
//     return value + '-> then -> promise2';
//     // return new Promise((resolve,reject)=>{
//     //     resolve(value+ '-> then -> promise2')
//     // })
// })
// .then((value)=>{
//     console.log(value)
// })


const MyPromise = require('./promise5')

let promise1 = new MyPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise2 = promise1.then((value)=>{
    // return new Error('Error')
    return new MyPromise((resolve,reject)=>{
       setTimeout(()=>{
        //    resolve('new Promise resolve11')
         resolve(new MyPromise((resolve,reject)=>{
             resolve('new Promise resolve3332')
         }))
       },2000)
    })
    // return MyPromise.resolve('Promise resolve')

},(reason)=>{
    return reason
})

promise2.then().then().then((value)=>{
    // console.log('promise2:',value)
    throw Error('Error')
},(reason)=>{
    console.log(reason)
})
.catch((e)=>{
    console.log(e)
})