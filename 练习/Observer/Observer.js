/**
 * 观察者
 * 
 * 目标
 * 
 * 要完成任务 -> 又要完成另一类任务
 * 
 * 观察者 -> 观察一个目标是否要做它自己的任务
 *          做这个目标任务相关联的任务
 */

 /**
  *  用户名、密码、年龄、性别  data
  * 
  * 任何一个数据都有可能改变或者被访问
  * 
  * 我都要进行日志保存和打印
  */

//   自己理解:Object.defineProperty() 劫持属性，当数据改变或者被访问，就调用观察者方法，进行相关的任务

class Target{
    constructor(data){
        this.data = data;
        this.observer = new Observer('#list');
        this.init();
    }

    init(){
        this.validateData(this.data);
        this.proxyData()
    }

    validateData(data){
        const {username,password,age,gender} =data;

        username.length < 6 && (data.username = '');
        password.length < 6 && (data.password = '');
        typeof age !== 'number' && (data.age = 0);
        !['male','female'].includes(gender) && (data.gender = 'male')
    }

    proxyData(){
        const _this = this

        for(let key in this.data){
            Object.defineProperty(this,key,{
                get(){
                    this.observer.updateLog('get',key,_this.data[key])
                    return _this.data[key];
                },
                set(newValue){
                    this.observer.updateLog('set',key,_this.data[key],newValue)
                    _this.data[key] = newValue;
                }
            })
        }
    }
}

class Observer{
    constructor(el){
        this.el = document.querySelector(el)
        this.logPool = []
    }
    updateLog(type,key,oldValue,newValue){
        switch(type){
            case 'get':
                this.getProp(key,oldValue);
                break;
            case 'set':
                this.setProp(key,oldValue,newValue);
                break;
            default:
                break;
        }
    }

    getProp(key,value){
        const o = {
            type:'get',
            dateTime:new Date(),
            key,
            value
        }
        this.logPool.push(o)
        this.log(o)
    }

    setProp(key,oldValue,newValue){
        const o = {
            type:'set',
            dateTime:new Date(),
            key,
            oldValue,
            newValue
        }
        this.logPool.push(o)
        this.log(o)     
    }

    log(o){
        const {type,dateTime,key} = o;
        const oLi = document.createElement('li')
        let htmlStr = '';

        switch (type){
            case 'get':
                htmlStr = `${dateTime}:I got the key '${key}'.
                The value of the key is ${o.value}`
                break;
            case 'set':
                htmlStr = `${dateTime}:I set the key '${key}'s value '${o.newValue}'
                from the old value ' ${o.oldValue}'`
                break;
            default:
                break;
        }
        oLi.innerHTML = htmlStr;
        this.el.appendChild(oLi)
        console.log(this.logPool)
    }
}