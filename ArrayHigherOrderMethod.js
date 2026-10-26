//ForEach

let arr = [1,2,3,4];
arr.forEach((currentElement,indexNum,totalArray)=>{
    console.log(currentElement);
    console.log(currentElement + 1);
    console.log(indexNum);
    console.log(totalArray);
})

//Map
 
let nums = [5,6,7,8];
let newMap = nums.map((currentElement,indexNum,totalArray)=>{
    return currentElement + 1;
})
console.log(newMap);

//filter

let employee = [
    {name : "a", salary : 100000},
    {name : "b", salary : 500000},
    {name : "c", salary : 200000},
    {name : "d", salary : 103000},
    {name : "e", salary : 900000},
    {name : "f", salary : 700000}
];
let newFilter = employee.filter((currentElement,indexNum,totalArray)=>{
    return currentElement.salary > 500000;
})
let newFilterless = employee.filter((currentElement,indexNum,totalArray)=>{
    return currentElement.salary < 500000;
})


console.log(newFilter);
console.log(newFilterless);

//find 

let employee1 = [
    {name : "i", salary : 100000},
    {name : "j", salary : 500000},
    {name : "k", salary : 200000},
    {name : "l", salary : 103000},
    {name : "m", salary : 900000},
    {name : "n", salary : 700000}
];
let newFind = employee1.find((currentElement,indexNum,totalArray)=>{
    return currentElement.salary > 500000;
})
console.log(newFind);
let newFind1 = employee1.find((currentElement,indexNum,totalArray)=>{
    return currentElement.salary < 500000;
})
console.log(newFind1);

//reduced

let employee3 = [
    {name : "i", salary : 100000},
    {name : "j", salary : 500000},
    {name : "k", salary : 200000},
    {name : "l", salary : 103000},
    {name : "m", salary : 900000},
    {name : "n", salary : 700000}
];
let newReduced = employee3.reduce((Accumulator,currentElement,indexNum,totalArray)=>{
    return Accumulator + currentElement.salary 
},0)
console.log(newReduced);

//some
let ar = [1,2,3,4];
let newSum = arr.some((currentElement,indexNum,totalArray)=>{
    return currentElement%2==0;
});
console.log(newSum);

//every
let ar1 = [2,4,6,8];
let res = ar1.every((currentElement,indexNum,totalArray)=>{
    return customElements%2==0;
});
console.log(res);

//sort
let numbers = [40, 10, 30, 20, 50];

numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);

//Date and Timing

let currentDate = new Date();

console.log("Full Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1);
console.log("Date:", currentDate.getDate());
console.log("Day:", currentDate.getDay());

console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());


let currentDate1 = new Date();

currentDate.setFullYear(2027);
currentDate.setMonth(5);
currentDate.setDate(15);

currentDate.setHours(10);
currentDate.setMinutes(30);
currentDate.setSeconds(45);

console.log(currentDate);


