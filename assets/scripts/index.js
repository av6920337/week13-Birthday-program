const birthdayInput=document.getElementById('birthdayInput');
const calculateButton=document.getElementById('calculateButton');
const resultElement=document.getElementById('result');
const errorMessage = document.querySelector('.error-message');

function daycounting(){
    let birthdayDate=new Date(birthdayInput.value);
    let currentDate=new Date();
    let currentYear=currentDate.getFullYear();
    birthdayDate.setFullYear(currentYear);

    if (!birthdayInput.value) {
        errorMessage.style.display = 'block';
        resultElement.textContent = '';} 
        else {
        errorMessage.style.display = 'none';
        }

    let diffDays=Math.round(Math.abs(birthdayDate.getTime()-currentDate.getTime()/(1000*3600*24)));

    let daysText;
    if(diffDays%10==1 && diffDays !==11){
        daysText='день';
    }
    else if([2,3,4].includes(diffDays%10) && ![12,13,14].includes(diffDays)){
        daysText='дня';
    }
    else{
        daysText='дней';
    }
    resultElement.textContent=`До вашего дня рождения осталось ${diffDays} ${daysText}.`;
}

calculateButton.addEventListener('click',daycounting);
birthdayInput.addEventListener('input', function() {
    errorMessage.style.display = 'none';
});