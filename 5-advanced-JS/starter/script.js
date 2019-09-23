// // Function constructor ( class )

// var Person = function(name, yearOfBirth, job, car) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.car = car;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// };

// // New creates empty object
// var john = new Person("john", 1990, "teacher");
// var jane = new Person("jane", 1987, "driver");
// var mark = new Person("mark", 1948, "retired", "tesla");

// jane.calculateAge();
// mark.calculateAge();
// john.calculateAge();

// console.log(jane, mark, john)

// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1990;
// john.job = "teacher";

// var jane = Object.create(personProto, {
//     name: { value: "jane"},
//     yearOfBirth: {value: 1996},
//     job: {value: "designer"}
// });

// primitives vs objects
//primitive
// var a = 23;
// var b = a;
// a = 46;
// console.log(a,b);

// // objects
// var obj1 = {
//     name: "john",
//     age: 26
// }

// obj2 = obj1;
// obj1.age = 29;
// console.log(obj1.age);
// console.log(obj2.age);

// // function
// age = 27;
// var obj = {
//     name: "jonas",
//     city: "lisbon"
// }

// function change(a,b) {
//     a = 30;
//     b.city = "sanfransisco";
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// var years = [1990, 1965, 1937, 1928, 1799];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHearthRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
    
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var hearthRate = arrayCalc(ages, maxHearthRate);
// console.log(hearthRate);
// console.log(fullAges);
// console.log(ages);

// functions returning functions

// function interviewQuestion(job) {
//     if (job === "designer") {
//         return function(name) {
//             console.log(name + " can you please explain UX design is?");
//         }
//     } else if (job === "teacher") {
//         return function(name) {
//             console.log(name + " what subject do you teach?");
//         }
//     } else {
//         return function(name) {
//             console.log("hello " + name + " what do you do?");
//         }
//     }
// }

// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("john");

// var designerQuestion = interviewQuestion("designer");
// designerQuestion("john");


// Lecture iife

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

//iife
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


////////////////////////////////
// Lecture closures

// function retirement(retirementAge) {
//     var a = " years left until retirement";
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUs = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUs(1965);
// retirementIceland(1978);
// retirementGermany(1990);


// function interviewQuestion(job) {
//     return function(name) {
//         if (job === "designer") {
//             console.log(name + " can you please explain UX design is?");
//         } else if (job === "teacher") {
//             console.log(name + " what subject do you teach?");
//         } else {
//             console.log("hello " + name + " what do you do?");
//         }
//     }
// }   

// interviewQuestion("teacher")("mauro");

///////////////////////////////
// bind call and apply

// var john = {
//     name: "john",
//     age: 26,
//     job: "teacher",
//     presentation: function(style, timeOfDay) {
//         if (style === "formal") {
//             console.log("good " + timeOfDay + " ladies and gentleman i am " + this.name + " and my job is " + this.teacher);
//         } else if (style === "friendly") {
//             console.log("hey whats up? have a nice " + timeOfDay);
//         }
//     }
// }

// var emily = {
//     name: "emily",
//     age: 35,
//     job: "designer",
// }

// john.presentation("formal", "morning");

// john.presentation.call(emily, "friendly", "afternoon");
// // john.presentation.apply(emily, ["friendly", "afternoon"]);

// var johnFriendly = john.presentation.bind(john, "friendly");
// johnFriendly("morning");
// johnFriendly("night");

var Question = function(vraag, antwoorden, goedeAntwoorden) {
    this.quizQuestion = vraag;
    this.antwoorden = antwoorden;
    this.goedeAntwoorden = goedeAntwoorden;
}

Question.prototype.askQuestion = function() {
    // Chose a random question
    var randomQuestionGenerator = Math.floor(Math.random() * this.quizQuestion.length);
    var randomQuestion = this.quizQuestion[randomQuestionGenerator];
    console.log(randomQuestion);
    console.log("De mogelijkheden staan hieronder");

    // Store correct answer 
    var correctAnswer = this.goedeAntwoorden[randomQuestionGenerator].toString();

    // Display possible answers
    this.antwoorden[randomQuestionGenerator].forEach(function(element, i) {
        console.log(i, element);
    });

    // Store answer
    var antwoord = prompt(randomQuestion).toString();

    // call check method
    this.checkAnswer(antwoord, correctAnswer);
}

Question.prototype.checkAnswer = function(ca,pa) {

    //check if answer is correct
    if (pa === ca) {
        console.log("dit antwoord is goed!");
    } else {
        console.log("dit antwoord is fout")
    }
}

var questionsMauro = ["hoe oud ben ik", "hoe heet ik", "waar woon ik"];
var answersMauro = [
    [23, 25, 29],
    ["mauro", "djaya", "warner"],
    ["de rijp", "alkmaar", "purmerend"]
];
var correctAnswersMauro = ["23", "mauro", "de rijp"];

var question1 = new Question(questionsMauro, answersMauro, correctAnswersMauro);

question1.askQuestion();

