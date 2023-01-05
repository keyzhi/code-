// let promise = new Promise((resolve,reject)=>{ //executor 执行器

const MyPromise = require('./MyPromise')

// })


let myPromise = new MyPromise((resolve,reject)=>{
    // resolve('success')
    // reject('reject')
    throw new Error('Exception:Error')
})

myPromise.then((val)=>{
    console.log('success1111:',val)
},(err)=>{
    console.log('reject1111:',err)
})

// console.log('myPromise:',MyPromise.prototype)