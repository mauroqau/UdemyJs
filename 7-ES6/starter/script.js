// // Es5

// var name5 = "Jane";
// var age5 = 23;
// name5 = "jane miller";

// // Es6
// const name6 = "jane smith";
// let age6 = 23;
// name6 = "jane miller";

// ES5
// function driversLicense(passedTest) {

//     if(passedTest) {
//         var firstname = "john";
//         var yob = 1990;
//     }

//     console.log(firstname + " born in " + yob);
// }

// driversLicense(true);

// // ES6
// function driversLicense6(passedTest) {
//     let firstname;
//     const yob = 1990;

//     if(passedTest) {
//         firstname = "john";  
//     }

//     console.log(firstname + " born in " + yob);
// }

// driversLicense6(true);



// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

////////////////////////////////////////////////////////////
// Lecture Blocks and IIFE

// // ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// //console.log(a + b);
// console.log(c);


// // ES5
// (function() {
//      var c = 3;
// })();

// //console.log(c);


////////////////////////////////////////
// Lecture strings

// let firstName = "john";
// let lastName = "smith";
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2019 - year;
// }

// //ES5
// console.log("this is " + firstName + " " + lastName + ". He was born in " + yearOfBirth + ". Today he is " + calcAge(yearOfBirth) + " years old");

// //ES6
// console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}. Years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith("j"));
// console.log(n.endsWith("h"));
// console.log(n.includes(" "));
// console.log(firstName.repeat(5));

/////////////////////////////////////////
// Lecture arrow functions

// const years = [1990, 1921, 1899, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);

// //--------------------------------

// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// //--------------------------------

// ages6 = years.map((el, index) => `Age element${index + 1} ${2016 - el}`);
// console.log(ages6);

// //--------------------------------

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element${index + 1} ${age}`;
// });
// console.log(ages6);

/////////////////////////////////////////
// Lecture arrow functions 2

// // ES5
// var box5 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {
//         var self = this;

//         document.querySelector(".green").addEventListener("click", function() {
//             var str = "this is box number " + self.position + " and it is " + self.color;
//             alert(str);
//         });
//     }
// }
// //box5.clickMe();

// //ES6
// const box6 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {

//         document.querySelector(".green").addEventListener("click", () => {
//             var str = "this is box number " + this.position + " and it is " + this.color;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myfriends5 = function(friends) {
   
//     var arr = friends.map(function(el) {
//         return this.name + " is friends with " + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ["bob", "jane", "mark"];
// new Person("john").myfriends5(friends);

// // ES6
// Person.prototype.myfriends6 = function(friends) {
   
//     var arr = friends.map(el => `${this.name} is friends with  ${el}`);
//     console.log(arr);
// }
// var friends = ["bob", "jur", "mauro"];
// new Person("john").myfriends6(friends);

/////////////////////////////////////////
// Lecture: Desctructoring

// // ES5
// var john = ["john", 26];
// var name = john[0];
// var age = john[1];

// // ES6
// const [name6, year6] = ["john", 26];
// console.log(name6, year6);

// const obj = {
//     firstname: "john",
//     lastname: "smith"
// };

// const {firstname, lastname} = obj;
// console.log(firstname, lastname);

// const {firstname: a, lastname: b} = obj;
// console.log(a,b)

// function calcAgeRetirement(year) {
//     const age2 = new Date().getFullYear() - year;
//     return [age2, 65 - age2];
// }
// const [age2, retire] = calcAgeRetirement(1990);
// console.log(age2, retire);



/////////////////////////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll(".box");

// // ES5
// var boxesarr5 = Array.prototype.slice.call(boxes);
// boxesarr5.forEach(function(cur) {
//     cur.style.backgroundColor = "dodgerblue";
// });

// // ES6
// boxesar6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue");


// // ES5

// for (var i = 0; i < boxesarr5.length; i++) {

//     if (boxesarr5[i].className === "box blue") {
//         continue;
//     }
//     boxesarr5[i].textContent = "i change to blue";
// }

// // ES6
// for (const cur of boxesar6) {

//     if (cur.className.includes("blue")) {
//         continue
//     }
//     cur.textContent = "i change to blue";
// }


// // ES5
// var ages = [12,17,8,21,14,11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

/////////////////////////////////////////
// Lecture: Spread operator

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(10,20,30,40);
// console.log(sum1);

// // ES5
// var ages = [10,20,30,40];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ["john", "jane", "mark"];
// const familyMiller = ["mary", "bob", "ann"];
// const bigFamily = [...familySmith,...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");

// const all = [h, ...boxes];

// Array.from(all).forEach(el => el.style.color = "purple");

/////////////////////////////////////////
// Lecture: Rest parameters
/*
// ES5
function isFullAge5() {
    //console.log(arguments);
    var argsARR = Array.prototype.slice.call(arguments);

    argsARR.forEach(function(cur) {
        console.log(2016 - cur >= 18);
    });
      
}
//isFullAge5(1190,2001,2015, 2019, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1190,2001,2015, 2019, 1987);
*/

// function isFullAge5(limit) {
//     console.log(limit);
//     var argsARR = Array.prototype.slice.call(arguments, 1);

//     argsARR.forEach(function(cur) {
//         console.log(2016 - cur >= limit);
//     });
      
// }
// isFullAge5(21, 1190,2001,2015, 2019, 1987);

// // ES6
// function isFullAge6(limit, ...years) {
//     years.forEach(cur => console.log((2016 - cur) >= limit));
// }
// isFullAge6(21, 1190,2001,2015, 2019, 1987);


/////////////////////////////////////////
// Lecture: Default parameters

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = "smith" : lastName = lastName;
//     nationality === undefined ? nationality = "american" : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson("john", 1990);
// var emily = new SmithPerson("emily", 1967, "diaz", "spanish");

// // ES6
// function SmithPerson(firstName, yearOfBirth, lastName = "smith", nationality = "american") {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson("john", 1990);

/////////////////////////////////////////
// Lecture: Map

// const question = new Map();
// question.set("question", "What is the official name of the latest major javscript version?");
// question.set(1, "ES5");
// question.set(2, "ES6");
// question.set(3, "ES2015");
// question.set(4, "ES7");
// question.set("correct", 3);
// question.set(true, "correct answer :D");
// question.set(false, "wrong please try again");

// console.log(question.get("question"));
// //console.log(question.size);

// if (question.has(4)) {
//     //question.delete(4);
//     //console.log("answer 4 is here");
// }

// // Deletes everything from the map
// //question.clear();

// //question.forEach((value, key) => console.log(value, key));

// for (let [key, value] of question.entries()) {
    
//     if (typeof(key) === "number") {
//         console.log(`The answer is ${key} : ${value}`);
//     }
// }

// const ans =  parseInt(prompt("whrite the correct answer"));

// //ans === question.get("correct") ? console.log(question.get(true)) : console.log(question.get(false));
// console.log(question.get(ans === question.get("correct")));


/////////////////////////////////////////
// Lecture: classes

// ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5("john", 1990, "teacher");

// // ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     // wordt niet inherit door childs zoals john6.
//     static greeting() {
//         console.log("hey there");
//     }
// }

// const john6 = new Person6("john", 1990, "teacher");

/////////////////////////////////////////
// Lecture: classes en subclasses

// ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olygames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olygames = olygames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5("john", 1990, "swimmer", 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();


// // ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6 {
//     constructor (name, yearOfBirth, job, olygames, medals) {
//         super(name, yearOfBirth, job);
//         this.olygames = olygames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6("john", 1990, "swimmer", 3, 10);

// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();


// Coding challenge
/*
    park names / parksize in km2 / treecount / 
    Bijlmerpark / 20            / 20000
    Rijperpark /  2            / 5000
    Purmerbos / 100           / 150000
*/

class Town {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Parks extends Town {
    constructor (name, age, parkName ,parkSize, treeCount) {
        super (name, age);
        this.parkName = parkName;
        this.parkSize = parkSize;
        this.treeCount = treeCount;
    }

    calcTreeDensity() {
        let treedensity = this.treeCount / this.parkSize;
        console.log(`${this.parkName} has a tree density of ${treedensity} trees per square km.`);

        if (treedensity >= 1000) {
            console.log(`${this.parkName} has more then 1000 trees`);
        }
    }
}

class Street extends Town {
    constructor (name, age, streetName, streetLength, buildYear) {
        super (name, age);
        this.streetName = streetName;
        this.streetLength = streetLength;
        this.buildYear = buildYear;
    }

    calcStreetSize() {
        if (this.streetLength > 0 && this.streetLength < 0.5) {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a tiny street`);
        } else if (this.streetLength > 0.5 && this.streetLength < 2) {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a small street`);
        } else if (this.streetLength > 2 & this.streetLength < 5) {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a normal street`);
        } else if (this.streetLength > 5 & this.streetLength < 10) {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a big street`);
        } else if (this.streetLength > 10) {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a huge street`);
        } else {
            console.log(`${this.streetName}, build in ${this.buildYear}, is a normal street`);
        }
    }
}

const bijlmerPark = new Parks("Amsterdam", 100, "Bijlmerpark", 20, 18000);
const rijperPark = new Parks ("De rijp", 600, "Rijperpark", 2, 1000);
const purmerBos = new Parks("Purmerend", 300, "Purmerbos", 100, 150000);

const bijlmerWeg = new Street("Amsterdam", 100, "boyoStraat", 0.49, 1920);
const zuidEinde = new Street("De rijp", 500, "Zuideinde", 2, 1743);
const kerkstraat = new Street("Purmerend", 200, "kerkstraat", 10.5, 2001);

calcParkAge(bijlmerPark, rijperPark, purmerBos);

bijlmerPark.calcTreeDensity();
rijperPark.calcTreeDensity();
purmerBos.calcTreeDensity();

calcTotalStreetLength(bijlmerWeg, zuidEinde, kerkstraat);

bijlmerWeg.calcStreetSize();
zuidEinde.calcStreetSize();
kerkstraat.calcStreetSize();

//--------------------------------------
// Calculate the average age of the parks
function calcParkAge(...parks) {
    console.log("---- Parks Report ----");
    let parkCount = parks.length;
    let totalAge = 0;

    parks.forEach(el => {
        totalAge += el.age;
    });

    console.log(`Our ${parkCount} parks have an average age of ${totalAge / parkCount} years.`);
}

//--------------------------------------
// Calculate average length of the town'streets
function calcTotalStreetLength(...streets) {
    console.log("---- Street Report ----")
    let totalLength = 0;
    let streetCount = streets.length;

    streets.forEach(el => {
        totalLength += el.streetLength;
    });

    console.log(`Our ${streetCount} streets have a total length of ${totalLength} km, with an average of ${totalLength / streetCount} km.`)
}


