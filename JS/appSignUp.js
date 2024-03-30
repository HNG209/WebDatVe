const main = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


registerLink.addEventListener('click',() => {
    main.classList.add('active');
})

loginLink.addEventListener('click',() => {
    main.classList.remove('active');
})