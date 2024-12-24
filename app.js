
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

// Array

const countries = ['Bangladesh', 'India', 'Pakistan', 'Srilanka', 'Maldives', 'United States'];
console.log(countries);
for (let k = 0; k <= countries.length - 1; k++){
    console.log(k)
    console.log(countries[k])
}
countries [3] = 'China';
countries [1] = 'Srilanka';
countries.push('Russia')
countries.push('Saudi Arabia')
countries.push('Japan')
countries.push('Mongolia')
countries.push('Australia')
countries.push('India')
countries.pop()
console.log(countries);

const fifaRankings = ['1. Argentina', '2.France', '3.Spain', 'England', '5.Brazil'];
console.log(fifaRankings);

const ages = [15, 24, 35, 40, 45, 50, 52, 77, 12, 44, 23,];
const newAgesEven = [];
const newAgesOdd = [];
for ( let y = 0; y < ages.length; y++){
    let singleAges = ages [y];

    if (singleAges % 2 === 0) {
        console.log(singleAges);
    } else {
        newAgesEven.push(singleAges);
    }
}
for ( let y = 0; y < ages.length; y++){
    let singleAges = ages [y];

    if (singleAges % 2 !== 0) {
        console.log(singleAges);
    } else {
        newAgesOdd.push(singleAges);
    }
}
console.log(newAgesEven);
console.log(newAgesOdd);

let total =0;
for (let m = 0; m < newAgesEven.length; m++) 
{
    let singlevalue = newAgesEven[m];
    total = total + singlevalue
}
console.log(total)

let total2 =0;
for (let n = 0; n < newAgesOdd.length; n++) 
{
    let singlevalue2 = newAgesOdd[n];
    total2 = total2 + singlevalue2
}
console.log(total2)
// Most Important
console.log(ages[ages.length - 1]);
console.log(ages.indexOf(77));
console.log(ages.length);
console.log(ages [6]);

const birthYear = 2003 ;
const mejbahMorsalin = ['Mejbah Morsalin', 2024 - birthYear];
console.log(2024 - birthYear);

const number = [ 200, 650, 400, 300, 45, 56, 12,];
console.log(number);

number.unshift(100);
console.log(number);

number.shift();
console.log(number);

// Loop Started
// for loop & while loop
// for (initialization; condition ; update){}

// for loop
let sum = 0;
for (let i = 1; i <= 15; i++) {
    console.log(i);
    sum = sum + i;
}
console.log(sum)

let add = 0;
for (let i = 1; i <= 20; i = i + 2){
    console.log(i);
    add = add + i;
}
console.log(add);

added = 0;
for (let i = 2; i <= 20; i = i + 2){
    console.log(i);
    added = added + i;
}
console.log(added);

// while loop
let h = 0;
while (h <= 10){
    console.log(h);
    h++;
}

// Js Function
// function add(){}
function calcAge (birthYear2) {
    let age5 = 2023 - birthYear2;
    return age5;
}
const age2 = calcAge(1992);
const age3 = calcAge(1996);
const age4 = calcAge(1999);
console.log(age2 , age3 , age4);

const rolls = [15, 24, 35, 40, 45, 50, 52, 77, 12, 44, 23,];

function arrSum(rolls){
    let sum1 =0;
    for (let roll of rolls){
        console.log(roll);
        sum1 = sum1 + roll;
    }
    return sum1
}
let all = arrSum(rolls)
console.log(all)