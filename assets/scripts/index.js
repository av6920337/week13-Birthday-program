const birthdayInput=document.getElementById('birthdayInput');
const calculateButton=document.getElementById('calculateButton');
const resultElement=document.getElementById('result');
const errorMessage = document.querySelector('.error-message');

function daysUntilBirthday(){
    let currentDate=new Date();
    let birthdayDate=new Date(birthdayInput.value);
    let diffDaysUTC=Math.round(Math.abs((currentDate.getTime()-birthdayDate.getTime())/(1000*3600*24)));

if(!birthdayInput.value) {
    // errorMessage.style.display='block';
    errorMessage.style.display='flex';
    resultElement.style.display='none';
} 
else {
    errorMessage.style.display = 'none';
    resultElement.style.display='flex';
    resultElement.style.justifyContent = 'center';
}

    let daysText;
if(diffDaysUTC % 10==1 && diffDaysUTC !==11){
    daysText='день';
}
else if([2,3,4].includes(diffDaysUTC %10) && ![12,13,14].includes(diffDaysUTC)){
    daysText='дня';
}
else{
    daysText='дней';
    }
    resultElement.textContent=(`До вашего дня рождения осталось ${diffDaysUTC} ${daysText}.`);
}
calculateButton.addEventListener('click',daysUntilBirthday);


