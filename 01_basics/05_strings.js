const name = "Vansh"
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc-com')
console.log(gameName[0])
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //dont't take negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const url = "https://vansh.com/vansh%20sharma"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'))

console.log(gameName.split('-'));
