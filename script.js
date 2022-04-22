let button = document.querySelector('.img-input')
let input = document.querySelector('#input')
let error = document.querySelector('.error')
let errorSign = document.querySelector('.error-sign')

button.addEventListener('click', function() {
    input.value.trim()
    console.log(input.value);

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(input.value === "" || !input.value.match(emailRegex)) {
        error.textContent = "Please provide a valid email"
        error.style.color = "hsl(0, 93%, 68%)"

        errorSign.classList.remove('hidden');
    }else {
        error.textContent = ""
        errorSign.classList.add('hidden');
    }
})