const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

function resolvePromise(promise2,x,resolve,reject){
    console.log(promise2)
}
class MyPromise{
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallback = []
        
        const resolve = (value)=>{
            if(this.status === PENDING){
                this.status = FULFILLED
                this.value = value

                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }
        const reject = (reason)=>{
            if(this.status === PENDING){
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallback.forEach(fn => fn())
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
        
    
    }

    // x 普通值  promise
    then(onFulfilled,onRejected) {
        let promise2 = new Promise((resolve,reject)=>{
            if(this.status === FULFILLED){
                setTimeout(()=>{
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        console.log(e)
                        reject(e)
                    }
                },0)

                
            }
    
            if(this.status === REJECTED) {
                setTimeout(()=>{
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        reject(e)
                    }
                },0)

                
            }
    
            if(this.status === PENDING){
                //订阅
                this.onFulfilledCallbacks.push(()=>{
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        reject(e)
                    }
                    
                })
    
                this.onRejectedCallback.push(()=>{
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        reject(e)
                    }
                    
                })
            }
        })
        return promise2;
    }
}




module.exports = MyPromise