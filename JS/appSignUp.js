const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


const formBoxRegister = document.querySelector('.form-box.register')
const formBoxLogin = document.querySelector('.form-box.login')


registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
    formBoxLogin.style.display = "none";
    formBoxRegister.style.display = "flex";
    wrapper.style.background ="url(../IMAGE/BackGroundRegister.jpg) no-repeat";
})



loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
    formBoxRegister.style.display = "none";
    formBoxLogin.style.display = "flex";
    wrapper.style.background = "url(../IMAGE/BackGroud_SignUp.jpg) no-repeat";

})
