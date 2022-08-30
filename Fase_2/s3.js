//Reto 1
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
let prom = 0;

for (const number of numbers) {
    prom+=number;
}

prom/=numbers.length;

console.log(prom);

//Reto 2
const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
const carObject = {};
for (const pair of car) {
    carObject[pair[0]] = pair[1];
}
console.log(carObject);

// Reto 3
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  };
  
const {facebook: fb,instagram: ig} = person.links.social;

console.log(fb)
console.log(ig)