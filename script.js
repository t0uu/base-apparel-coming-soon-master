const form = document.getElementById('form');
const btn = document.querySelector('.btn');
const email = document.getElementById('email');
const small = document.querySelector('small');
const icon = document.querySelector('.IconError');
const input = document.querySelector('input');
form.addEventListener('submit',e => {
    e.preventDefault();

    validate();
})

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i


function validate () {
    const mail = email.value.trim();
    if(mail == ""){
        small.style.visibility = "visible"
        icon.style.visibility = "visible"
    }else if(!emailRegex.test(mail) ){
        small.style.visibility = "visible"
        icon.style.visibility = "visible"
    }else if(emailRegex.test(mail)){
        small.style.visibility = 'hidden'
        icon.style.visibility = 'hidden'
}
 }