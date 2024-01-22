const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const myForm = document.querySelector("#myForm");
const button = document.querySelector("#button");
const university = document.querySelector("#university");
const city = document.querySelector("#city");
const file = document.querySelector("#file");
const gender = document.querySelector("#gender");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
    university: university.value,
    city: city.value,
    file: file.value,
    gender: male.value || female.value,
  };
  console.log(user);
  //     if (confirmpassword.value!==password.value) {
  //         console.log('passwords do not match')
  //     return
  // } else if (button.checked) {
  setTimeout(() => {
    window.location.href = "second.html";
  }, 2000);
  //    console.log('user', user);
  // }
});

// function submit() {
//     window.location= "second.html"
// }

// document.getElementById('myForm').addEventListener('submit', function(event) {

//     event.preventDefault();

//     if (username.value && email.value && password.value && confirmpassword.value && university.value && city.value && file.value && gender.value) {

//     window.location.href = 'second.html'; // Replace with your URL

//     } else {

//     document.getElementById('error-message').innerText = 'Invalid input';

//     }

//     });
