// var markHeight, markMass, johnHeight, johnMass;
// markHeight = 165;
// markMass = 100;
// johnHeight = 200;
// johnMass = 150;

// so var drink = age => 18 ? 'beer' : cola' ;

// var bmiMark = markMass / (Math.pow(markHeight/100, 2));
// var bmiJohn = johnMass / (Math.pow(johnHeight/100, 2));

// var truth = bmiMark > bmiJohn;
// console.log("is mark heavier then john? " + truth);

// var teamJohn, teamMark, teamMary;
// teamJohn = (97 + 134 + 105) / 3;
// teamMark = (97 + 134 + 205) / 3;
// teamMary = (97 + 134 + 105) / 3;

// if (teamJohn > teamMark && teamJohn > teamMary) {
//     console.log("The winner is team John with an average score of " + teamJohn);
// } else if (teamMary > teamJohn && teamMary > teamMark) {
//     console.log("The winner is team Mary with an average score of " + teamMary);
// } else if (teamJohn === teamMark && teamJohn === teamMary) {
//     console.log("There are no winners, it is a draw!");
// } else {
//     console.log("The winner is team Mark with an average score of " + teamMark);
// }

// function calculateBirth(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calculateBirth(1996);
// var ageJur = calculateBirth(1995);
// var ageDjaya = calculateBirth(1994);
// console.log(ageJohn, ageDjaya, ageJur);

// Function declaration
// function yearsUntilRitrement(Year, firstName) {
//     var age = calculateBirth(Year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + " retires in " + retirement + " years");
//     } else {
//         console.log(firstName + " is already retired");
//     }
// }

// yearsUntilRitrement(1990, "john");

// Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case"teacher":
//             return firstName + " teaches kids how to code";
//         case"driver":
//             return firstName + " drives a cab in lisbon";
//         case"designer":
//             return firstName + " designs beautifull websites";
//         default:
//             return firstName + " does something else";
//     }
// }

// console.log(whatDoYouDo("teacher", "mauro"));
// console.log(whatDoYouDo("driver", "jur"));
// console.log(whatDoYouDo("retired", "kees"));

// initialize new array
// var names = ["John" ,"Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// //mutate array data
// names[1] = "ben";
// names[names.length] = "marry";
// console.log(names);

// // different data types

// var john = ["john", "de vries", 1996, "false"];

// john.push("blue");
// john.unshift("add as first item");
// john.pop(john); // remove last item
// john.shift(); // removes first item
// console.log(john);

// console.log(john.indexOf(1996)); // locatie position in array

// var lastName = john.indexOf("de boer") === -1 ? "mijn achternaam is niet de boer" : " dit is mijn achternaam";
// console.log(lastName);

// var bill, tips, finalBill;
// bill = [124, 48, 268];
// tips = [];
// finalBill = [];

// bill.forEach(tipCalculator);

// function tipCalculator(item) {
//     if ( item < 50 ) {
//         tips.push(item * 0.2);
//         finalBill.push(item * 0.2 + item);
//     } else if ( item >= 50 && item <= 200 ) {
//         tips.push(item * 0.15);
//         finalBill.push(item * 0.15 + item);
//     } else {
//         tips.push(item * 0.10);
//         finalBill.push(item * 0.10 + item);
//     }
// }

// console.log(tips, finalBill);

// Objects and properties

// // object literal
// var john = {
//     firstName: "john",
//     lastName: "smith",
//     birthYear: 1990,
//     family: ["jane", "mark", "bob", "emily"],
//     job: "teacher",
//     isMarried: false
// };

// console.log(john.lastName);
// console.log(john["isMarried"]);
// var x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// // new object syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.job = "hoer";

// Methods and object

// var john = {
//     firstName: "john",
//     lastName: "smith",
//     birthYear: 1996,
//     family: ["jane", "mark", "bob", "emily"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

//coding challenge 4 
// var mark = {
//     fullName: "Mark de Boer",
//     mass: 82,
//     height: 1.84,
//     calcBmi: function() {
//        return this.bmiMark = this.mass / (this.height * this.height);
//     }
// }

// var john = {
//     fullName: "John Visser",
//     mass: 100,
//     height: 1.84,
//     calcBmi: function() {
//         return this.bmiJohn = this.mass / (this.height * this.height);
//     }
// }

// if (mark.calcBmi() > john.calcBmi()) {
//     console.log(mark.fullName + " has the highest bmi score of " + mark.bmiMark);
// } else if(mark.calcBmi() === john.calcBmi()) {
//     console.log(mark.fullName + " and " + john.fullName + " have the same bmi of " + mark.bmiMark);
// } else {
//     console.log(john.fullName + " has the highest bmi score of " + john.bmiJohn);
// }

// Loops

// for (let i = 0; i < 1; i++) {
//     console.log(i);
// }

// var john = ["john", "smith", 1990, "designer", false];

// for (let i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// let i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++
// }

// continue and break statements

// var john = ["john", "smith", 1990, "designer", false];

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== "string") continue; 
//     console.log(john[i]); 
// }

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== "string") break; 
//     console.log(john[i]); 
// }

// // loop backwards
// for (let i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]); 
// }

// code challenge 5

var john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    finalBill: [],
    calcTip: function() {
        this.bill.forEach(item => {
            if (item < 50) {
                this.tip.push(item * 0.2);
            } else if (item >= 50 && item < 200) {
                this.tip.push(item * 0.15);
            } else {
                this.tip.push(item * 0.1);
            }
        });   
    },
    calcFinalBill: function() {
        let count = 0;
        this.bill.forEach(item => {
            this.finalBill.push(item + this.tip[count]);
            count++;
        });
    }
}

john.calcTip();

var mark = {
    bill: [77, 375, 110, 45,],
    tip: [],
    finalBill: [],
    calcTip: function() {
        this.bill.forEach(item => {
            if (item < 100) {
                this.tip.push(item * 0.2);
            } else if (item >= 100 && item < 300) {
                this.tip.push(item * 0.10);
            } else {
                this.tip.push(item * 0.25);
            }
        });   
    },
    calcFinalBill: function() {
        let count = 0;
        this.bill.forEach(item => {
            this.finalBill.push(item + this.tip[count]);
            count++;
        });
    }
}

mark.calcTip();

function calcAverageTip(item) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        sum += item[i];
    }
    return sum / item.length;
}

let markAverageTip = calcAverageTip(mark.tip);
let johnAverageTip = calcAverageTip(john.tip);

if (markAverageTip > johnAverageTip) {
    console.log("the family of mark paid the highest tip of " + markAverageTip);
}   else if (johnAverageTip > markAverageTip) {
    console.log("the family of john paid the highest tip of " + johnAverageTip);
} 