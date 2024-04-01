const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


const formBoxRegister = document.querySelector('.form-box.register')
const formBoxLogin = document.querySelector('.form-box.login')


registerLink.addEventListener('click', () => {
    formBoxLogin.classList.add('centerToLeft');
    formBoxRegister.classList.add('rightToCenter')
    wrapper.classList.add('active');

    // wrapper.classList.add('centerToLeft');
    // wrapper.classList.add('rightToCenter')

    wrapper.style.background = "url(../IMAGE/BackGroundRegister.jpg) center/cover no-repeat";
    setTimeout(() => {
        formBoxLogin.style.display = "none";
        formBoxRegister.style.display = "flex";

    }, 100);
})



loginLink.addEventListener('click', () => {
    formBoxLogin.classList.add('leftToCenter');
    formBoxRegister.classList.add('centerToRight')
    wrapper.classList.remove('active');

    // wrapper.classList.add('leftToCenter');
    // wrapper.classList.add('centerToRight')
    
    wrapper.style.background = "url(../IMAGE/BackGroud_SignUp.jpg) center/cover no-repeat";
    setTimeout(() => {
        formBoxRegister.style.display = "none";
        formBoxLogin.style.display = "flex";
        
    }, 100);

})
