const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

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

    then(onFulfilled,onRejected) {
        if(this.status === FULFILLED){
            onFulfilled(this.value)
        }

        if(this.status === REJECTED) {
            onRejected(this.reason)
        }

        if(this.status === PENDING){
            this.onFulfilledCallbacks.push(()=>{
                onFulfilled(this.value)
            })

            this.onRejectedCallback.push(()=>{
                onRejected(this.reason)
            })
        }
    }
}


module.exports = MyPromise