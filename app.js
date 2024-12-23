
let num1 = prompt('Type Your First Number');
num1 = parseInt(num1);

let num2 = prompt('Type Your Second Number')
num2 = parseInt(num2);

let num3 = prompt('Type Your Third Number')
num3 = parseInt(num3);

console.log(num1, num2, num3);

if (num1 > num2 && num1 > num3) {
    console.log('Large Number 1');
} 
else if (num2 > num1 && num2 > num3){
    console.log('Large Number 2');
}
else if (num3 > num1 && num3 > num1){
    console.log('Large Number 3');
} else {
    console.log('Invalid Number');
}