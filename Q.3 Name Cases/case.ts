let personname : string = 'rabnawaz Dogar'
console.log(personname.toLowerCase())
console.log(personname.toUpperCase())
console.log(personname.replace(/\b\w/g, (char) => char.toUpperCase()))