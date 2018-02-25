// scripts.js
var femaleNames = ['Asia', 'Samanta', 'Ola', 'Krysia'];
var maleNames = ['Piotrek', 'Marek', 'Jarek', 'Jacek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}