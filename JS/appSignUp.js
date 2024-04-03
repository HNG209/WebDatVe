const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


const formBoxRegister = document.querySelector('.form-box.register')
const formBoxLogin = document.querySelector('.form-box.login')


registerLink.addEventListener('click', () => {
    formBoxRegister.classList.remove('centerToRight')
    formBoxLogin.classList.remove('leftToCenter');

    wrapper.classList.add('active');
    formBoxLogin.classList.add('centerToLeft');
    formBoxRegister.classList.add('rightToCenter')


    // wrapper.classList.add('centerToLeft');
    // wrapper.classList.add('rightToCenter')

    wrapper.style.background = "url(../IMAGE/BEAUTY-LANDSCAPE-LAKE-1192023.png) center/cover no-repeat";
    setTimeout(() => {
        formBoxLogin.style.display = "none";
        formBoxRegister.style.display = "flex";
    }, 900);

})



loginLink.addEventListener('click', () => {
    formBoxLogin.classList.remove('centerToLeft');
    formBoxRegister.classList.remove('rightToCenter')

    wrapper.classList.remove('active');
    formBoxRegister.classList.add('centerToRight')
    formBoxLogin.classList.add('leftToCenter');
    

    // wrapper.classList.add('leftToCenter');
    // wrapper.classList.add('centerToRight')
    
    wrapper.style.background = "url(../IMAGE/BackGroud_SignUp.jpg) center/cover no-repeat";
    setTimeout(() => {
        formBoxRegister.style.display = "none";
        formBoxLogin.style.display = "flex";   
    }, 900);


})
