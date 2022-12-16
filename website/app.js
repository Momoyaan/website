 const menu = document.querySelector('#mobile-menu');
 const menuLinks = document.querySelector('.navbar__menu');

 menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
 });

 const modal = document.getElementById('email-modal');
 const openBtn = document.querySelector('.main__btn');
 const closeBtn = document.querySelector('.close-btn');
 const openBtn1 = document.querySelector('.navbar__btn');
 const openBtn2 = document.querySelector('.btn1');
 const openBtn3 = document.querySelector('.btn2');

 openBtn.addEventListener('click', () => {
   modal.style.display = 'block';
 });

 openBtn1.addEventListener('click', () => {
   modal.style.display = 'block';
 });

 openBtn2.addEventListener('click', () => {
   modal.style.display = 'block';
 });

 openBtn3.addEventListener('click', () => {
   modal.style.display = 'block';
 });


 window.addEventListener('click', (e) => {
   if(e.target === modal) {
      modal.style.display = 'none';
   }
 });

 closeBtn.addEventListener('click', (e) => {
      modal.style.display = 'none';
 });  


 const form = document.getElementById('form');
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const passwordConfirm = document.getElementById('password-confirm');


 function showError(input, message) {
   const formValidation = input.parentElement;
   formValidation.className = 'form-validation error';

   const errorMessage = formValidation.querySelector('p');
   errorMessage.innerText = message;
 }

 function showValid(input) {
   const formValidation = input.parentElement;
   formValidation.className = 'form-validation valid';
 }
 
function checkRequired(inputArr) {
   inputArr.forEach (function(input) {
      if(input.value.trim() === '') {
         showError(input, `${getFieldName(input)} is required`);
      } else {
         showValid(input);
      }
   })
}

function checkLength(input, min, max) {
   if(input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
   } else if(input.value.length > max){
      showError(input, `${getFieldName(input)} must be less than ${max} characters`);
   } else {
      showValid(input);
   }
}

function passwordMatch(input1, input2) {
   if(input1.value != input2.value) {
      showError(input2, 'Passwords do not match');
   }
}

function getFieldName(input) {
   return input.name.charAt(0) + input.name.slice(1);
}

 form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkRequired([name, email, password, passwordConfirm]);
   checkLength(name, 3, 30);
   checkLength(password, 8 ,25);
   checkLength(passwordConfirm, 8 ,25);
   passwordMatch(password, passwordConfirm)
 })