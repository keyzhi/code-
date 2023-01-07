let promise = new Promise((resolve,reject)=>{
    resolve('First resolve');
})

//通过return传递结果
// promise.then((res)=>{
//     return res;//普通值
// })
// .then((res)=>{
//     console.log(res) //First resolve
// })
// .then((res)=>{
//     console.log(res) //undefined
// })

//通过新的promise resolve结果
// promise.then((res)=>{
//     return res
// })
// .then((res)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(res);
//         },2000)
//     }) 
// })
// .then((res)=>{
//     console.log('answer:',res) //answer: First resolve
// })


//通过新的promise reject原因
// promise.then((value)=>{
//     return value
// })
// .then((value)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('ERROR');
//         },2000)
//     }) 
// })
// .then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log('Rejected:'+reason); //Rejected:ERROR
// })


//then走了失败的回调，再走then
// promise.then((value)=>{
//     return value
// })
// .then((value)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('ERROR');
//         },2000)
//     }) 
// })
// .then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log('Rejected:'+reason); //Rejected:ERROR
//     //默认 return undefined
// })
// .then((value)=>{
//     console.log(value) //undefined
//     console.log('Fulfilled:'+value) //Fulfilled:undefined
// },(reason)=>{
//     console.log('Rejected:'+reason)
// })

// then中使用 throw new Error
// promise.then((value)=>{
//     return value
// })
// .then((value)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('ERROR');
//         },2000)
//     }) 
// })
// .then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log('Rejected:'+reason); //Rejected:ERROR
//     //默认 return undefined
// })
// .then((value)=>{
//    throw new Error('Throw Error')
// })
// .then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log('Exeption:'+ reason) // Exeption:Error: Throw Error
// })


//用catch 捕获异常
promise.then((value)=>{
    return value
})
.then((value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('ERROR');
        },2000)
    }) 
})
.then((value)=>{
    console.log(value)
},(reason)=>{
    console.log('Rejected:'+reason); //Rejected:ERROR
    //默认 return undefined
})
.then((value)=>{
   throw new Error('Throw Error')
})
.then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log('Catch:'+ err) //Catch:Error: Throw Error
    return 'Catch Error'
})
.then((value)=>{
    console.log('Then:'+value) //Then:Catch Error
})


//catch在Promise的源码层面上就是一个then，Catch也是遵循then的运行原则的

//成功的条件
// then return  普通的JavaScript的值
// then return  新的Promise成功态的结果  value

//失败的条件
//then return   新的Promise失败态的原因  reason
//then 抛出了异常   throw new Error

//promise 链式调用
//javaScript jQuery return this
//then 不具备this
//return new Promise

// promise.then(()=>{

// })// return new Promise().then()
// .then()

let promise2 = promise.then(()=>{
        // return 第一次返回的新的Promise结果
})
.then(()=>{
        // return 第二次返回的新的Promise结果
})


let promise2 = promise.then(()=>{
    // return 第一次返回的新的Promise结果
})
////  第一次返回的新的Promise结果
promise2.then(()=>{
    
})
