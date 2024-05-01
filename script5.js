let firstName = document.getElementById("f_name");
let lastName = document.getElementById("l_name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let phone_no = document.getElementById("phone_no");
let country = document.getElementById("country");
let school = document.getElementById("school");
let btn_submit = document.getElementById("btn_submit");
let eighteen = document.getElementById("eighteen");
let twentyfive = document.getElementById("twentyfive");
let thirty = document.getElementById("thirty");
let africa = document.getElementById("africa");
let asia = document.getElementById("asia");
let n_america = document.getElementById("n_america");
let s_america = document.getElementById("s_america");
let other_country = document.getElementById("other_country");
let result = document.getElementById("result");

let err_first_name = document.getElementById("err_first_name");
let err_last_name = document.getElementById("err_last_name");
let err_phone_no = document.getElementById("err_phone_no");
let err_school = document.getElementById("err_school");

let point = 0;
let agePoint = 0;
let country_point = 0;

function validateFields() {
  if (firstName.value == "" && lastName.value == "") {
    err_first_name.innerHTML = "This field is required";
    err_last_name.innerHTML = "This field is required";
  } else {
    err_first_name.innerHTML = "";
    err_last_name.innerHTML = "";
  }

  if (phone_no.value == "") {
    err_phone_no.innerHTML = "This field is required";
  } else {
    err_phone_no.innerHTML = "";
  }

  if (school.value == "") {
    err_school.innerHTML = "This field is required";
  } else {
    err_school.innerHTML = "";
  }
}

btn_submit.onclick = function () {
    event.preventDefault();
    
  if (age.value == eighteen.value) {
    agePoint = 100;
  } else if (age.value == twentyfive.value) {
    agePoint = 80;
  } else if (age.value == thirty.value) {
    agePoint = 50;
  } else {
    agePoint = 10;
  }

  if (country.value == africa.value) {
    country_point = 50;
  } else if (country.value == asia.value) {
    country_point = 40;
  } else if (country.value == s_america.value) {
    country_point = 30;
  } else if (country.value == n_america.value) {
    country_point = 20;
  } else {
    country_point = 10;
  }

  calculateGrade();
  validateFields();

  point = agePoint + country_point;
  if (point >= 180) {
    result.innerHTML = `Your point is ${point}, congratulations you have cleared with a great score`;
  } else {
    result.innerHTML = `Your point is ${point}, and you are not eligible for a scholarship`;
  }

    // Clear the form fields
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    gender.value = "";
    phone_no.value = "";
    country.value = "";
    school.value = "";
  
    return false; // Prevent default action and event propagation
};

function calculateGrade() {
  let grades = document.getElementsByClassName("other");
  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    total += parseFloat(grades[i].value); // Accumulate the value of each grade
  }

  let average = total / grades.length; // Calculate the average grade
}
