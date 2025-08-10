let person = {
   name: "Hatim",
   age: 22, 
   city: "Patna", 
   country: "India" 
};

let { name, age, ...other } = person;

console.log(name);   // "Hatim"
console.log(age);    // 22
console.log(other);   // { city: "Patna", country: "India" }
