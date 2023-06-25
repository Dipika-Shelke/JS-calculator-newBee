var num1 = prompt("Enter Number 1");
console.log(num1);
document.write(num1);
var num2 = prompt("Enter Number2");
console.log(num2);
document.write(num2);
var operation = prompt("Enter Operation");

if(operation == "ADD" || operation == "add" || operation== "+"){
  value = num1 + num2;
  console.log(value);
}
if(operation == "SUBTRACTION" || operation == "sub" || operation == "SUB" || operation== "-"){
  value = num1-num2;
  console.log(value);
}
if(operation == "MULTIPLICATION" || operation == "*"){
  value = num1*num2;
  console.log(value);
}
if(operation == "DIVISION" || operation == "div" || operation== "/"){
  value = num1/num2;
  console.log(value);
}

switch{
  case: 
}