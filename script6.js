let acct_balance = document.getElementById('acct_balance')
let loan_amount = document.getElementById('loan_amount')
let btnvalidate = document.getElementById('btnvalidate')


let six_month_no = document.getElementById('six_month_no')
let six_month_yes = document.getElementById('six_month_yes')
let err_acct_balance = document.getElementById('err_acct_balance')
let err_loan_amount = document.getElementById('err_loan_amount')

let last_deposit_date = document.getElementById("last_deposit_date")
let last_loan_date = document.getElementById("last_loan_date")
let loan_repayment_date = document.getElementById("loan_repayment_date")
let acct_type = document.getElementById("acct_type")
let result = document.getElementById('result')

let point = 0;
let acct_point = 0;
let six_month_point = 0;
let last_deposit_point = 0;
let last_loan_point = 0;
let loan_repayment_point = 0;
let acct_type_point = 0

let month_duration = 60*60*24*7*4*1000

function validateFields(){
  // To validate the account balance
  if(acct_balance.value == ""){
   err_acct_balance.innerHTML ="This field is required" 
  }else{
    err_acct_balance.innerHTML ="" 
  }
  
  // To validate the loan amount
   if(loan_amount.value == ""){
   err_loan_amount.innerHTML ="This field is required" 
  }else{
    err_loan_amount.innerHTML ="" 
  }
  
}

function checkEligibility(){
  
  if(parseInt(acct_balance.value) > parseInt(loan_amount.value)){
    acct_point = 10
  }else{
    acct_point = -10
  }
  
  if(acct_type.value == "savings"){
    acct_type_point = 5
  }else{
    acct_type_point = 10
  }
  
  
  
  point = acct_point + six_month_point + last_deposit_point + loan_repayment_point + acct_type_point
  
  if(point > 30){
    result.innerHTML = `Your point is ${point}, and you are eligible for a loan`
  }else{
    result.innerHTML = `Your point is ${point}, and you are not eligible for a loan`
  }
}


six_month_no.onchange = function(){
six_month_point = 0
}

six_month_yes.onchange = function(){
    six_month_point = 10
}


btnvalidate.onclick = function(){
  
  validateFields()
  checkEligibility()
  
}

last_deposit_date.onchange = function(){
  let selected = new Date(last_deposit_date.value)
  let today = new Date()
  let t1 = selected.getTime()
  let t2 = today.getTime()
  let diff = (t2 - t1) / month_duration
  let output = Math.ceil(diff)
  
  if(output == 1){
    last_deposit_point = 5
  }else{
    last_deposit_point = 0
  }
//   console.log(last_deposit_point)
}

last_loan_date.onchange = function(){
  let selected = new Date(last_loan_date.value)
  let today = new Date()
  let t1 = selected.getTime()
  let t2 = today.getTime()
  let diff = (t2 - t1) / month_duration
  let output = Math.ceil(diff)
  
  if(output > 6){
    last_loan_point = 10
  }else{
    last_loan_point = 0
  }
  console.log(last_loan)
}


loan_repayment_date.onchange = function(){
  let selected = new Date(loan_repayment_date.value)
  let today = new Date()
  let t1 = selected.getTime()
  let t2 = today.getTime()
  let diff = (t2 - t1) / month_duration
  let output = Math.ceil(diff)
  
  if(output < 6){
    loan_repayment_point = 5
  }else{
    loan_repayment_point = 0
  }
  console.log(loan_repayment_point)
}
