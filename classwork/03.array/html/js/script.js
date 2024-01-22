const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#confirmpassword')
const myForm = document.querySelector('#myForm')
const button = document.querySelector('#button')
const university = document.querySelector('#university')
const city = document.querySelector('#city')
const file = document.querySelector('#file')
const gender=document.querySelector('#gender')


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmpassword: confirmpassword.value ,
        university: university.value,
        city: city.value,
        file: file.value,
        gender: gender.value
    }
    console.log(user)
    if (confirmpassword.value!==password.value) {
        console.log('passwords do not match')
    return 
} else if (button.checked) {
   window.location = 'index2.html'
}
else {
    console.log('user', user);
}
})



function removeDisabled(anyInput) {
    anyInput.addEventListener('change',() => {
    if (username.value && email.value && password.value && confirmpassword.value && university.value && city.value && file.value && gender.value) {
    button.removeAttribute('disabled');
}
else {
    button.setAttribute('disabled', true);
}
    })
}
removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
removeDisabled(confirmpassword)
removeDisabled(university)
removeDisabled(city)
removeDisabled(file)
removeDisabled(gender)
