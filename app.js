
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

const countries = ['Bangladesh', 'India', 'Pakistan', 'Srilanka', 'Maldives'];
console.log(countries);
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

const ages = [15, 25, 35, 40, 45, 50, 52, 77, 12, 44, 23];
// Most Important
console.log(ages[ages.length - 1]);
console.log(ages.indexOf(77))

console.log(ages.length);
console.log(ages [6]);

const birthYear = 2003 ;
const mejbahMorsalin = ['Mejbah Morsalin', 2024 - birthYear];
console.log(2024 - birthYear)

const number = [ 200, 650, 400, 300, 45, 56, 12,]
console.log(number)

number.unshift(100)
console.log(number)

number.shift()
console.log(number)