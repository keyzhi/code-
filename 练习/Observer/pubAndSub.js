/**
 * 发布订阅
 * 
 * 对事件进行订阅，多个事件(如：click)同时订阅，发布的时候，会接收到信息
 * 
 * 内核其实就是观察者，观察事件是否触发，如果事件触发了（trigger执行），就通知对应的方法执行
 */


//  var oBtn = document.getElementById('btn')

//  oBtn.addEventListener('click',handler1,false);
//  oBtn.addEventListener('click',handler2,false);
//  oBtn.addEventListener('click',handler3,false);

//  function handler1(){
//      console.log('handler1')
//  }
//  function handler2(){
//      console.log('handler2')
//  }
//  function handler3(){
//      console.log('handler3')
//  }


class EventEmitter {
    handlers = {
        // type:[handler1,handler2,handler3] //type:指的是事件例如click,数组里面是[handler1,handler2,handler3]
    }

    //订阅
    on(type,handler,once){
        if(!this.handlers[type]){
            this.handlers[type] = []
        }
        if(!this.handlers[type].includes(handler)){
            this.handlers[type].push(handler);
            handler.once = once
        }
    }

    //订阅
    once(type,handler){
        this.on(type,handler,true);
    }

    //解除事件绑定
    off(type,handler){
        if(this.handlers[type]){
            this.handlers[type] = this.handlers[type].filter(h=>{
                return h !== handler;
            })
        }
    }


    // 触发事件
    trigger(type){
        if(this.handlers[type]){
            console.log(this.handlers[type])
            this.handlers[type].forEach(handler => {
                handler.call(this)

                if(handler.once) {
                    this.off(type,handler);
                }
            });

            
        }
    }
}

const ev = new EventEmitter();


 function handler1(){
     console.log('handler1')
 }
 function handler2(){
     console.log('handler2')
 }
 function handler3(){
     console.log('handler3')
 }
 //订阅
 ev.on('test',handler1);
 ev.on('test',handler2);
 ev.on('test',handler3);

//  ev.on('test',handler4,true);
 ev.once('test',handler4)

 //触发事件
 ev.trigger('test')