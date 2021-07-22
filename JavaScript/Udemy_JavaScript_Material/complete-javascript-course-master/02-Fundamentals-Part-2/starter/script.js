////////////////////////////
// use of // "use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("i can drive");

//////////////////////////////////
// functions

// function fruitProcessor(apples, oranges, kova) {
//   console.log(`i have ${apples} apples
//    and ${oranges} oranges ${kova}`);
// }

// fruitProcessor(10, 20);

// function fruits(grape, sapota) {
//   console.log(grape, sapota);
//   const juice = `i want to drink ${grape} grape juice and ${sapota} sapota juice`;
//   return juice;
// }

// console.log(fruits("ga", 4));
// const appleJuice = fruits(5, 6);
// console.log(appleJuice);

///////////////////////////////////////////
// function declaration and expression/

// function age(myAge) {
//   return myAge - 5;
// }

// const myLessAge = age(27);

// const age1 = function (myAge) {
//   return myAge - 6;
// };
// const myLessAge = age1(27);
// console.log(myLessAge, myLessAge);

// function declaration

// function calcAge1(birthYear) {
//   return 2021 == birthYear;
// }

// age1 = calcAge1(2021);

// console.log(calcAge1(age1));
// console.log(age1);

// // function Expression

// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// const age = calcAge2(1994);

// console.log(age);

//////////////////////////////////
// Arrow functions

// Function Expression

// const cal = function age(birthyear) {
//   return 2021 - birthyear;
// };

// val = cal(1998);
// console.log(val);

// const year = (birth) => 2021 - birth;

// console.log(year);

// const funyear = year(2000);
// console.log(funyear);

// const a = (bhaskarinitial) => 2 + bhaskarinitial;
// const b = a("k");
// console.log(b);
// console.log(a);

// const retirementLeft = (birthYear) => {
//   const yearsOld = 2021 - birthYear;
//   console.log(yearsOld);
//   const retiredLeft = 60 - yearsOld;
//   return retiredLeft;
// };

// const retiredIn = retirementLeft(1994);
// console.log(`Hey you will retired in ${retiredIn} years`);

/////////////////////////////////////////////////////
// Function calling Other functions

// const cutFruit = function (fruit) {
//   return fruit * 5;
// };
// const fruitProcessor = function (apple, orange) {
//   const ApplePieces = cutFruit(apple);
//   const OrangePiece = cutFruit(orange);
//   return ApplePieces;
// };

// const val = fruitProcessor(4, 5);
// console.log(val);

// const cutFruit1 = function (fruit) {
//   return fruit * 5;
// };
// const fruitProcessor1 = function (apple, orange) {
//   const ApplePieces = cutFruit1(apple);
//   const OrangePiece = cutFruit1(orange);
//   const pices = `apple pices are ${ApplePieces} and orange pices are ${OrangePiece}`;
//   return pices;
// };

// const val1 = fruitProcessor1(4, 5);
// console.log(val1);

// const salary = function (perAnnum) {
//   return perAnnum * 30;
// };

// const FriendsSalary = function (BhaskarSal, DamSal) {
//   const bothSal = Number(BhaskarSal + DamSal);
//   console.log(bothSal);
//   // const allBothSal = perAnnum+bothSal
//   const BhaskarS = salary(BhaskarSal);
//   console.log(BhaskarS);
//   const DamS = salary(DamSal);
//   console.log(DamS);
//   const both = BhaskarS + DamS;
//   const sal = `bhskar salary in 30 years ${BhaskarS} and Dam sal ${DamS} BOTH EARNED TOTAL SAL ${both}`;
//   return sal;
// };

// const allSal = FriendsSalary(600000, 1000000);

// console.log(allSal);

////////////////////////////////////////
// review functions

// const currentAge = function (birthYea) {
//   return 2021 - birthYea;
// };

// const retire = function (birthYear) {
//   const retiredIn = 60 - currentAge(birthYear);
//   if (retiredIn > 0) {
//     console.log(`you retired in ${retiredIn} years`);
//   } else {
//     console.log("you already retired");
//   }
//   return retiredIn;
// };

// console.log(retire(1663));

///////////////////////////////////////////
// function coding Challange 1

// const calAvg = (a, b, c) => (a + b + c) / 3;

// const dolphinAvg = calAvg(2, 3, 4);
// const KolasAvg = calAvg(5, 6, 7);
// const KolasAvg1 = calAvg(8, 9, 10);

// console.log(dolphinAvg);
// console.log(KolasAvg);
// console.log(KolasAvg1);

// const calAverage = (score1, score2, score3) => {
//   const scores = (score1 + score2 + score3) / 3;
//   return scores;
// };

// const dolhinAvg = calAverage(4, 23, 71);
// const KoalasAvg = calAverage(4, 2, 1);

// console.log(dolhinAvg);
// console.log(KoalasAvg);

// function checkWinner(dolhinAvg, KoalasAvg) {
//   if (dolhinAvg >= 2 * KoalasAvg) {
//     console.log(
//       `dilhin team is winner because they got ${dolhinAvg} average and kolas got ${KoalasAvg} only`
//     );
//   } else if (KoalasAvg >= 2 * dolhinAvg) {
//     console.log(
//       `kolas team is winner because they got ${KoalasAvg} average and dolhin got ${dolhinAvg} only`
//     );
//   } else if (KoalasAvg === dolhinAvg) {
//     console.log(
//       `tie match bec kola  ${KoalasAvg} average and dolhin  ${dolhinAvg}  got same only`
//     );
//   } else {
//     console.log("No team win👎");
//   }
// }

// const winner = checkWinner(dolhinAvg, KoalasAvg);

// const fun = checkWinner(230, 230);

/////////////////////////////////////////////////////////
// Array in javaScript

// const FrientsArray = ["bhaskar", "dam", "ammu"];

// console.log(FrientsArray);

// console.log(FrientsArray[1]);

// const friends = new Array("bhaskar", 2, "hey");
// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends.length - 1);
// console.log(friends[friends.length - 2]);

// friends[1] = "amrutha";
// console.log(friends);

// friends[3] = "a";
// console.log(friends);

// const fun = (a, b, c) => {
//   var h = a + b + c;
//   return h;
// };
// const ans = fun(1, 2, 3);
// console.log(ans);
// const first = "iam first";
// const data = [first, friends, "iam bhaskar", fun(1, 2, 3)];
// console.log(data);

/////////////////////////////
// exercise

// const age = (birthYear) => 2021 - birthYear;

// const ar = [1994, 1993, 1992, 1990];

// const age1 = age(ar[3]);

// console.log(age1);

/////////////////////////////////////////
// array methods

// const friendss = ["bhaskar", "satish", "murali"];
// friendss.push("ramu");
// const aa = friendss.push("ramu");
// console.log(friendss);
// console.log(aa);

// friendss.unshift("first");

// console.log(friendss);

// friendss.pop([1]);
// console.log(friendss);
// friendss.shift();
// console.log(friendss);

// console.log(friendss.indexOf("bhaskar"));

// friendss.unshift(23);

// console.log(friendss.indexOf(23));

// console.log(friendss.includes(23));
// const va = 5;
// if (friendss.includes("23")) {
//   console.log(va);
// } else {
//   console.log(`${va} not present`);
// }

/////////////////////////
// coding challenge 2

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

// console.log(tips);

// const a = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(a);

////////////////////////////////////////
// objects

// const obj = {
//   firstName: "bhaskar",
//   lastName: "koilada",
//   arr: [1, 2, 3],
// };
// console.log(obj.lastName);
// console.log(obj["lastName"]);

// const newkey = "Name";
// const b = "rr";
// console.log(obj.first + newkey);
// console.log(obj["first" + newkey]);
// console.log(obj["last" + newkey]);
// console.log(obj["a" + b]);

// const pro = prompt("hey iam,bhaskar,koilada");
// console.log(pro);

//////////////////////////////////////////
// object methods

const jones = {
  firstName: "Bhaskar",
  lastName: "Koilada",
  birthYear: 1994,
  job: "developer",
  frients: ["ram", "sam", "dam"],
  hasDrivingLicence: true,
  calcAge: function (birthYear) {
    return 2021 - birthYear;
  },
};

console.log(jones.calcAge(1994));
console.log(jones["calcAge"](1990));
