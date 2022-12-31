// import {add,minus,mul,div} from './calculate' //模块集合的结构 export

import calculator from './calculate'   //export default 
const {add,minus,mul,div} = calculator
;(()=>{
    
    const oNum1 = document.querySelector('#num1')
    const oNum2 = document.querySelector('#num2')
    const oBtnGroup = document.querySelector('.button-group')
    const oResult = document.querySelector('#result')
    const init=()=>{
        bindEvent();
    }
    function bindEvent(){
        oBtnGroup.addEventListener('click',handleBtnClick,false)
    };

    function handleBtnClick(e){
        console.log(e)
        const tar = e.target,
              tagName = tar.tagName.toLowerCase();
        
            if(tagName == 'button'){
                const type = tar.innerText;
                console.log(type)
                oResult.innerText = calculate(type)
            }
    }

    function calculate(type){
        const num1 = Number(oNum1.value),
         num2 = Number(oNum2.value);
        switch(type){
            case '+':
                return add(num1,num2)
            case '-':
                return minus(num1,num2)
                
            case '*':
                return mul(num1,num2)
                
            case '/':
                return div(num1,num2)
                
            default:
                break;
        }
    }

    init();
})()