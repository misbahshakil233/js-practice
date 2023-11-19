// var date =new Date()
// var day=["mon","tues","wed"]
// console.log(day[date.getDay()],date.getFullYear(),date.getDate())

//is date ko kia din tha....
// var date=new Date("18-jan-2004")
// var day=["mon","tues","wed","thus","fri","sat","sun"]
// console.log(day[date.getDay()])


//ramzan strt hony may kitnay days hiurs min rehgaye hain...
// var date=new Date("March 11th 2024")
// const currentDate = new Date();
// const difference = date.getTime() - currentDate.getTime();
// 

// Calculate days, hours, minutes, and seconds
// const days = Math.floor(difference / (1000 * 60 * 60 * 24));
// const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
// const hours = Math.floor(difference / (1000 * 60 * 60 ));
// const minutes = Math.floor(difference / (1000 * 60 ));
// const seconds = Math.floor(difference / (1000 ));
//******extra**********
// const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
// const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// Display the result
// console.log(` Days: ${days}, Months: ${months},Hours:${hours},Minutes:${minutes},seconds ${seconds }`);


//find age
// Get the user's date of birth
//var dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");

// Parse the user input into a Date object
//var dob = new Date(dobInput);

// Get the current date
//var currentDate = new Date();

// Calculate the difference in milliseconds
//var difference = currentDate - dob;

// Calculate the age in years
//var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

// Display the age
//alert("Your age is: " + age + " years");
// var date=moment().formate();
// console.log(date);


//function:
//Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)
function increments(a){
    a++;
    console.log(a)
    return a;
}
increments(1);
//Create a function that takes a number and return square of a number
function number(b){
console.log(b*b);
return b;
}
number(4);
//Create a function that tells current time in Y-m-d format.

function date(){
var date = new Date();
var month=["jan","feb","march","april","may","june","july","aug","sep","oct","nov"]
console.log( date.getFullYear(), month[date.getMonth()],date.getDate());
}
date();

//Create a function that tells current time from Date object in H:i:s format
// 
function getCurrentTimeanddate() {
    var date = new Date();
    
    var currentTime = date.toLocaleTimeString();
    console.log(date.getDate(),date.getMonth(),date.getFullYear());
    console.log(currentTime);
   
  }
  getCurrentTimeanddate();

  //Write a function that takes first &amp; last name and then it greets
//the user using his full name.

// function name(a,b){
// console.log("hello " +a,b);
// return a,b;
// }
//   name("Misbah","shakil")
  
//   Write a nested function that computes hypotenuse of a right
// angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

//find the vowels
// var str="misbah Shakil"
// function countvowel(name){
//   var count=0;
// for(let i=0;i<str.length;i++){
//   if(name[i]=='a'|| name[i]=='e'||name[i]=='i'||name[i]=='o'||name[i]=='u'){
//     count++;
//   }
// }
// return"Vowels name yours is " +count;
// }
// var result=countvowel(str)
// console.log(result);



// function student(){
//   let s1={
//     name:"misbah",
//     fname:"shakil",
//     rollno:123,
//     fees: 2500
//   }

//  console.log(s1.name , s1.fname, s1.rollno, s1.fees)
//  console.log(s1)
//  s1.name= "wania";
//  delete s1.fees;
//  console.log(s1)
// }

// student()

function getPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data => data.json())
  .then(res => console.log(res))
}
