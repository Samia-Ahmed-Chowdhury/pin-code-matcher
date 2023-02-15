const displayPin = document.getElementById('displayPin');
const generateBtn = document.getElementById('generateBtn');
const showCode = document.getElementById('showCode')
const submitBtn=document.getElementById('submitBtn')
const tryCount=document.getElementById('tryCount');
let count=3;

function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString
    }
    else {
        return getPin()
    }
}

generateBtn.onclick = function () {
    const pin = getPin();
    displayPin.value = pin;
}

document.getElementById('calculator').onclick = function (e) {
    submitBtn.removeAttribute('disabled')
    const num = e.target.innerText
    if (isNaN(num)) {
        if(num==='C'){
            showCode.value=''
        }
        else if(num=='<'){
            const digit=showCode.value;
            const arrDigit=digit.split('')
            arrDigit.pop();
            const remainingDigit=arrDigit.join('')
            showCode.value=remainingDigit;
        }
    }
    else {
        const prevNum = showCode.value
        showCode.value = prevNum + num
    }
}
submitBtn.onclick=function(){
   
   if(count>0){
    const pinSuccess=document.getElementById('pinSuccess');
    const pinWrong=document.getElementById('pinWrong');
    if(showCode.value==displayPin.value){
       pinSuccess.style.display='block'
       pinWrong.style.display='none'
    }
    else{
        count--;
       pinWrong.style.display='block'
       pinSuccess.style.display='none'
    }
    showCode.value=''
    tryCount.innerText=`${count} try left`
   }
   else{
    tryCount.innerText='Try later'
   }
}

showCode.onpaste=function(){
    showCode.value=''
    alert('You pasted code!!!');
    submitBtn.setAttribute('disabled','')
    showCode.style.border='2px solid red'

}