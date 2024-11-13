// 1

// let totalAmount = 600;
// if (totalAmount > 1 && totalAmount < 200) {
//   console.log("no discount applied");
// } else if (totalAmount > 500) {
//   discount = (20 / 100) * totalAmount;
//   console.log(`ToTal Amount = ${totalAmount}₹
//     discount applied = ${discount}₹
//     Final Amount = ${totalAmount - discount}₹
//                  `);
// } else if (totalAmount >= 200 && totalAmount <= 500) {
//   discount = (10 / 100) * totalAmount;
//   console.log(`ToTal Amount = ${totalAmount}₹
//     discount applied = ${discount}₹
//     Final Amount = ${totalAmount - discount}₹
//                  `);
// } else {
//   console.log("invalid");
// }

// 2

// let temp = 10;
// if (temp < 20) {
//   console.log("cold");
// } else if (temp > 20 && temp <= 40) {
//   console.log("Moderate");
// } else if (temp > 40) {
//   console.log("HOT");
// } else {
//   console.log("invalid");
// }

// 3

// let marks = 80;
// if (marks >= 1 && marks < 70) {
//   console.log("C");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("B");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("A");
// } else if (marks >= 90 && marks <= 100) {
//   console.log("A+");
// } else {
//   console.log("invalid marks");
// }

// 4

// let lateDays = 7;
// if (lateDays >= 1 && lateDays <= 5) {
//   cost = 2;
//   console.log(`${lateDays * cost}₹ : FINE`);
// } else if (lateDays > 5 && lateDays <= 10) {
//   cost = 3;
//   console.log(`${lateDays * cost}₹ : FINE`);
// } else if (lateDays > 10) {
//   cost = 5;
//   console.log(`${lateDays * cost}₹ : FINE`);
// } else {
//   console.log("invalid ");
// }

// 5

// let food = prompt("enter fav food item name :").toLocaleLowerCase();
// if (food == "pizza" || food == "pasta" || food == "burger") {
//   message = food + " Lover!";
//   console.log(message);
// } else {
//   console.log("invalid");
// }

// Medium level
// 1
// let age = 21;
// let income = 20001;
// let hasCriminalRecord = false;
// if (age >= 21 && age <= 60 && income > 20000 && !hasCriminalRecord) {
//   console.log("eligible for loan");
// } else {
//   console.log("not eligible for loan");
// }

// 2
// let salesTarget = 121;
// let monthlySalary = 10000;
// if (salesTarget > 0 && salesTarget < 100) {
//   console.log("No Bonus");
// } else if (salesTarget >= 100 && salesTarget <= 120) {
//   bonus = (10 / 100) * monthlySalary;
//   console.log(` ${bonus} (10% of ${monthlySalary}) `);
// } else if (salesTarget > 120) {
//   bonus = (20 / 100) * monthlySalary;
//   console.log(` ${bonus} (20% of ${monthlySalary}) `);
// } else {
//   console.log("invalid");
// }

// 3
// let totalClasses = 100;
// let classesAttended = 75;
// let percentage = (classesAttended / totalClasses) * 100;
// if (percentage > 1 && percentage < 75) {
//   console.log(`${percentage}% Attendence Not Eligible to write Exam `);
// } else if (percentage >= 75) {
//   console.log(`${percentage}% Attendence  Eligible to write Exam `);
// } else {
//   console.log("invalid");
// }

// 4
// let purchaseAmount = 909;
// if (purchaseAmount < 100) {
//   points = Math.floor((purchaseAmount / 10) * 1);
//   console.log(`${points} (1 point per 10$)`);
// } else if (purchaseAmount >= 100) {
//   points = Math.floor((purchaseAmount / 10) * 2);
//   console.log(`${points} (2 point per 10$)`);
// } else {
//   console.log("invalid");
// }

// 5
// let string = "EXcellence".toLocaleLowerCase();
// let char = "l";
// let count = 0;
// let start = string[0];
// for (i = 0; i < string.length; i++) {
//   if (char == string[i]) {
//     count++;
//   }
// }
// console.log(`the count of occurrences of "${char}" is : ${count}`);

// Advanced

// 1

// let currentDay = 365;
// let expiryDay = 365;
// if (currentDay > 1 && currentDay <= 365 && expiryDay > 1 && expiryDay <= 365) {
//   if (expiryDay < currentDay) {
//     console.log("the item is expired");
//   } else if (expiryDay >= currentDay) {
//     console.log("the item is not expired");
//   }
// } else {
//   console.log("invalid");
// }

// 2 even odd even odd

// let array = [2, 3, 4, 5, 6];
// let pattern = true;
// for (i = 0; i < array.length; i++) {
//   let current = array[i] % 2 === 0;
//   if (
//     (current && array[i + 1] % 2 === 0) ||
//     (!current && array[i + 1] % 2 === 1)
//   ) {
//     pattern = false;
//   }
// }
// if (pattern) {
//   console.log("pattern followed");
// } else {
//   console.log("pattern not followed");
// }

// 3

// let balance = 10000;
// let withdrawalAmount = 1000;
// if (balance >= 1 && withdrawalAmount >= 1) {
//   if (withdrawalAmount <= balance) {
//     console.log(
//       `allowed transaction of ${withdrawalAmount}₹ from balance of ${balance}₹`
//     );
//   } else {
//     console.log(`not allowed transaction of ${withdrawalAmount}₹
//       insufficient balance : ${balance}₹`);
//   }
// } else {
//   console.log("invalid");
// }

// 4

// let num = String(1234);
// let sum = 0;
// while (+num > 0) {
//   remi = num % 10;
//   sum += remi;
//   num = Math.floor(num / 10);
// }
// console.log(sum);
// if (sum % 2 == 0) {
//   console.log("Sum is even");
// } else {
//   console.log("Sum is odd");
// }

// 5

// let string = "abacaba";
// let pattern = true;
// let vowels = "aeiou";
// for (i = 0; i < string.length; i++) {
//   current = string[i];
//   if (
//     (current && string[i + 1]) === vowels[i] ||
//     (!current && string[i + 1]) !== vowels[i]
//   ) {
//     pattern = false;
//   }
// }
// if (pattern) {
//   console.log("pattern followed");
// } else {
//   console.log("pattern not followed");
// }

// array = [1, 2, 3, 4, 5];
// value = 0;
// function push(value) {
//   array[array.length] = value;
// }
// push(9);
// push(10);
// console.log(array);

// array = [1, 2, 3, 4, 5];
// value = [];
// function pop() {
//   value = array[array.length - 1];
//   console.log(array);
// }
// pop();
// console.log(array);
