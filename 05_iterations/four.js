//for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) { //this loop can be use in objects
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming) {
    // console.log(programming[key]);
}


const map = new Map() //it is not iteratable
map.set('IN', "India")
map.set('USA', "Unites States of America")
map.set('Fr', "France")

for(const key in map) {
    console.log(key);
}


//applicable for objects
//it will give key(index) of array