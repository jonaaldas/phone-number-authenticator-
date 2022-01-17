//This code is going to validate is a a number is a phone number or not 
// Critirea
// it has to have 10 digits 
//we checked if its a number check
// 732 485 2784
// 732 485-2784
// (732) 485-2784
// 7324852784
// 732-485-2784

// we need to get the value of the input 
let inputVal;
let numValue = document.querySelector('input').addEventListener('input', function(){
    inputVal = this.value;
    console.log(inputVal)
});

const btn = document.querySelector('button').addEventListener('click', function(){
    const regex = /\d{3}[\s-]?\d{3}[\s-]?\d{4}/;
    // console.log(inputVal);
    console.log(regex.test(inputVal));
});


