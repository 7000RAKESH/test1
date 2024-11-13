// 1
// let start = 10;
// let end = 5;

// if (start >= 10 && end < 6) {
//   console.log("Day Shift");
// } else {
//   console.log("night shift");
// }

// let temp = 10;
// if (temp < 10) {
//   console.log("cold");
// } else if (temp > 10 && temp <= 25) {
//   console.log("Moderate");
// } else if (temp > 25) {
//   console.log("HOT");
// } else {
//   console.log("invalid");
// }

// 2
// let bill = "1000";
// if (bill > 0 && bill < 100) {
//   console.log("no discount applied");
// } else if (bill >= 100 && bill < 200) {
//   discount = (10 / 100) * bill;
//   console.log(`discount applied ${bill - discount}₹`);
// } else if (bill >= 200) {
//   discount = (20 / 100) * bill;
//   console.log(`discount applied ${bill - discount}₹`);
// } else {
//   console.log("invalid");
// }

// 3
// let weight = 100;
// if (weight < 500) {
//   console.log("you can use elivator");
// } else {
//   console.log("Overload");
// }

// 4
// let orders = 7;
// if (orders > 1 && orders < 5) {
//   console.log("Invalid Order");
// } else if (orders >= 5 && orders < 10) {
//   console.log("Standard Order");
// } else if (orders >= 10) {
//   console.log("Bulk Order");
// } else {
//   console.log("Invalid Order");
// }

// 5

// 13  leet code
// let num = 1123211;
// let input = num;
// let reverse = "";

// while (num > 0) {
//   reminder = num % 10;
//   reverse += reminder;
//   num = Math.floor(num / 10);
// }
// if (input == reverse) {
//   console.log(`${reverse} is a palindrome number`);
// } else {
//   console.log(`${reverse} is not a palindrome number`);
// }

// 6
// let balance = +prompt("enter account balance:");
// let balance = 1010;

// if (balance >= 1 && balance <= 100) {
//   console.log("low balance");
// } else if (balance > 100 && balance <= 500) {
//   console.log("healthy balance");
// } else if (balance > 500) {
//   console.log("high balance");
// } else {
//   console.log("invalid");
// }

// 7

// let ticketPrice = 100;
// let classs = "normal".toLocaleLowerCase();
// let advanceBookingDays = 31;
// if (classs == "normal") {
//   if (advanceBookingDays >= 30) {
//     discount = ticketPrice * 0.5;
//     totalAmount = ticketPrice - discount;
//     console.log(`5% discount is applied total Amount = ${totalAmount}`);
//   } else {
//     console.log(`no discount is applied total Amount = ${ticketPrice}`);
//   }
// } else if (classs == "bussiness") {
//   if (advanceBookingDays > 30) {
//     discount = ticketPrice * 0.1;
//     totalAmount = ticketPrice - discount;
//     console.log(`10% discount is applied total Amount = ${totalAmount}`);
//   } else {
//     console.log(`no discount is applied total Amount = ${ticketPrice}`);
//   }
// } else if (classs == "premium") {
//   if (advanceBookingDays > 30) {
//     discount = ticketPrice * 0.15;
//     totalAmount = ticketPrice - discount;
//     console.log(`15% discount is applied total Amount = ${totalAmount}`);
//   } else {
//     console.log(`no discount is applied total Amount = ${ticketPrice}`);
//   }
// }

// 8

// let age = prompt("enter your age :");
// if (age > 1 && age < 18) {
//   console.log("not eligible to vote");
// } else if (age >= 18) {
//   console.log(" eligible to vote");
// } else {
//   console.log("invalid");
// }

// 9
// let itemsCount = prompt("enter items count : ");

// if (itemsCount > 1) {
//   shoppingList = prompt("enter items price: ") * itemsCount;
// } else {
//   console.log("invalid");
// }

// let shoppingListPrice = [100, 200, 300, 400, 500];
// let totalAmount = 0;
// for (i = 0; i < shoppingListPrice.length; i++) {
//   totalAmount += shoppingListPrice[i];
// }
// console.log(totalAmount);

// 10
// let inputColor = prompt("enter current light color :").toLocaleLowerCase();
// if (inputColor == "red") {
//   console.log("STOP");
// } else if (inputColor == "yellow") {
//   console.log("SLOW DOWN");
// } else if (inputColor == "green") {
//   console.log("GO");
// } else {
//   console.log("invalid");
// }

// 7 leet code
// let num = 11234;
// let reverse = "";
// do {
//   reminder = num % 10;
//   reverse += reminder;
//   num = Math.floor(num / 10);
// } while (num > 0);
// console.log(reverse);

// 11
// let currentBill = 302;

// if (currentBill > 1 && currentBill <= 100) {
//   currentBill *= 0.1;
//   console.log(`current bill according to the usage ${currentBill}$`);
// } else if (currentBill > 100 && currentBill <= 200) {
//   currentBill -= 100;
//   currentBill *= 0.15;
//   console.log(
//     `current bill according to the usage ${currentBill + 100 * 0.1}$`
//   );
// } else if (currentBill > 200) {
//   currentBill -= 300;
//   currentBill *= 0.2;
//   console.log(
//     `current bill according to the usage ${
//       currentBill + 100 * 0.1 + 200 * 0.15
//     }$`
//   );
// } else {
//   console.log("invalid");
// }

// 12
// let employeeWages = 5000;
// let hours = 40;
// if (hours >= 40) {
//   employeeWages *= 1.5;
//   console.log(`${employeeWages} per week`);
// } else if (hours > 1 && hours < 40) {
//   console.log(`${employeeWages} per week`);
// } else {
//   console.log("invalid");
// }

// 13
// maths = 80;
// english = 90;
// science = 80;
// let marks = maths + english + science;
// let average = marks / 3;
// if (average >= 90) {
//   console.log("A");
// } else if (average >= 80 && average < 90) {
//   console.log("B");
// } else if (average >= 70 && average < 80) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

// 14
// let stock = 100;
// if (stock === 0) {
//   console.log("Out of stock");
// } else if (stock >= 1 && stock <= 10) {
//   console.log("LOW stock");
// } else if (stock > 10) {
//   console.log("In stock");
// } else {
//   console.log("invalid");
// }

// 15
// let distance = 20;
// let points = 0;
// if (distance > 1 && distance <= 10) {
//   points = 100;
//   console.log(`you got ${points} points`);
// } else if (distance > 10 && distance <= 20) {
//   points = 500;
//   console.log(`you got ${points} points`);
// } else if (distance > 20) {
//   points = 1000;
//   console.log(`you reached milestone with ${points} points`);
// } else {
//   console.log("invalid");
// }

// 16
// let distance = 100;
// let classs = "bussiness".toLocaleLowerCase();
// let price = 0;
// if (distance > 1 && distance <= 20) {
//   if (classs == "normal") {
//     price = 1.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "economy") {
//     price = 2.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "bussiness") {
//     price = 3.5 * distance;
//     console.log(`${price}$ total price`);
//   }
// } else if (distance > 20 && distance <= 40) {
//   if (classs == "normal") {
//     price = 1.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "economy") {
//     price = 2.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "bussiness") {
//     price = 3.5 * distance;
//     console.log(`${price}$ total price`);
//   }
// } else if (distance > 40) {
//   if (classs == "normal") {
//     price = 1.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "economy") {
//     price = 2.5 * distance;
//     console.log(`${price}$ total price`);
//   } else if (classs == "bussiness") {
//     price = 3.5 * distance;
//     console.log(`${price}$ total price`);
//   }
// } else {
//   console.log("invalid");
// }

// 17
// let monthlyIncome = 20000;
// let creditScore = 749;
// if (monthlyIncome > 20000 && creditScore >= 750) {
//   console.log("loan is approved");
// } else if (monthlyIncome <= 20000 && creditScore < 750) {
//   console.log("loan is not approved");
// } else {
//   console.log("invalid");
// }

// 18
// function ticketPriceCalulator(price, age) {
//   if (age > 0 && age <= 25) {
//     discount = price * 0.1;
//     console.log(`${discount}$ 10% discount is applied on ${price}$`);
//   } else if (age > 25 && age <= 40) {
//     console.log(`${price}$ no discount is applied`);
//   } else if (age > 40) {
//     discount = price * 0.2;
//     console.log(`${discount}$ 20% discount is applied on ${price}$`);
//   }
// }
// ticketPriceCalulator();

// 19
// function playerGameExperience(experience) {
//   if (experience > 0 && experience <= 5) {
//     console.log(
//       "you got 500 points based on your experience, you cant level up"
//     );
//   } else if (experience > 5 && experience <= 10) {
//     console.log(
//       "you got 700 points based on your experience ,you cant level up"
//     );
//   } else if (experience > 10) {
//     console.log(
//       "you got 1000 points based on your experience , you can level up"
//     );
//   }
// }
// playerGameExperience(11);

// 20
// function fuelCostEstimation(distance, efficiency) {
//   let fuelCost = 102;
//   vehicleEfficiency = distance / efficiency;
//   totalCost = vehicleEfficiency * fuelCost;
//   console.log(
//     `${Math.floor(totalCost)}₹ is fuel cost for distance ${distance}km`
//   );
// }

// fuelCostEstimation(120, 10);

// 21
// function seatingArrangement(students, seatsPerRow) {
//   if (students > 0 && seatsPerRow > 0) {
//     let rows = Math.round(students / seatsPerRow);
//     return rows;
//   } else {
//     console.log("invalid");
//   }
// }
// console.log(seatingArrangement(50, 4));

// 22
// function taxCalculation(income) {
//   if (income >= 1 && income < 50000) {
//     tax = income * 0.1;
//     console.log(`${tax}$ is tax for income ${income}$`);
//   } else if (income >= 50000 && income < 100000) {
//     tax = income * 0.2;
//     console.log(`${tax}$ is tax for income ${income}$`);
//   } else if (income >= 100000) {
//     tax = income * 0.3;
//     console.log(`${tax}$ is tax for income ${income}$`);
//   } else {
//     console.log("invalid");
//   }
// }
// taxCalculation(100);

// 23
// function employeeBonus(experience, salary) {
//   if (experience >= 5 && experience < 10) {
//     bonus = salary * 0.05;
//     salary += bonus;
//     console.log(`5% bonus ${bonus} is added to your salary ${salary}`);
//   } else if (experience >= 10 && experience < 20) {
//     bonus = salary * 0.1;
//     salary += bonus;
//     console.log(`10% bonus ${bonus} is added to your salary ${salary}`);
//   } else if (experience >= 20) {
//     bonus = salary * 0.15;
//     salary += bonus;
//     console.log(`15% bonus ${bonus} is added to your salary ${salary}`);
//   } else {
//     console.log("invalid");
//   }
// }
// employeeBonus(10, 10000);

// 24
// function fuelEfficiency(fuelUsed, distance) {
//   efficiency = distance / fuelUsed;
//   console.log(`fuel efficiency is ${Math.floor(efficiency)} liters per km`);
// }
// fuelEfficiency(10, 100);

// 25
// function dataUsage(data, usedData) {
//   if (data >= usedData) {
//     let used = Math.floor((usedData / data) * 100);
//     if (used >= 80 && used < 90) {
//       console.log("80% data is used");
//     } else if (used == 100) {
//       console.log("100% data is used");
//     } else {
//       console.log("data is unused");
//     }
//   } else {
//     console.log("invaid");
//   }
// }
// dataUsage(597, 597);

// 26
// let books = [
//   { name: "johngrisham", price: 1000 },
//   { name: "maths", price: 1000 },
//   { name: "science", price: 5000 },
//   { name: "physics", price: 1000 },
// ];
// let sum = 0;
// let book = [];
// for (i = 0; i < books.length; i++) {
//   sum += books[i].price;
// }
// console.log(sum);
// console.log(book);

//27
// let rating = 0;
// function movie(movieRating) {
//   for (let i = 0; i < movieRating.length; i++) {
//     if (movieRating[i] <= 5) {
//       rating += movieRating[i];
//       average = rating / 5;
//     }
//   }
//   console.log(`average rating of movie is ${average} out of 5`);
// }
// movie([1, 2, 3, 4, 5, 8]);

// 28
// function savings(income, expenses) {
//   if (income > expenses) {
//     let saving = income - expenses;
//     console.log(`you saved ${saving}$`);
//   } else if (income < expenses) {
//     let saving = income - expenses;
//     console.log(`you have to save money because you are ${saving}$ debt`);
//   } else if (income == expenses) {
//     console.log(`you used 100% of your income`);
//   } else {
//     console.log("innvalid");
//   }
// }
// savings(10000, 10000);

// 29
// function time(distance, speed) {
//   let time = distance / speed;
//   console.log(`${time * 60} minutes is the estimated time `);
// }
// time(100, 100);

// 30
// let totalmarks = [
//   { marks: 100 },
//   { marks: 80 },
//   { marks: 90 },
//   { marks: 30 },
//   { marks: 50 },
// ];
// let total = 0;
// function marks() {
//   for (i = 0; i < totalmarks.length; i++) {
//     total += totalmarks[i].marks;
//   }
//   console.log(`total marks of  students in a class is ${total} `);
//   let average = total / totalmarks.length;
//   console.log(` average marks   of students in a class is ${average}`);
// }
// marks();

// 31
// function gpaa(...rest) {
//   let total = 0;
//   let gpa = 0;
//   for (let i = 0; i < rest.length; i++) {
//     total += rest[i];
//     gpa = total / rest.length;
//   }
//   console.log(`${gpa} is the gpa for overall academics`);
// }
// gpaa(95, 89, 77, 89);

// 32
// function foodCourtBill(bill) {
//   let tax = 0;
//   let serviceCharge = 0;
//   let total = 0;
//   if (bill > 0 && bill <= 1000) {
//     tax = bill * 0.1;
//     serviceCharge = bill * 0.1;
//     total = bill + serviceCharge + tax;
//   } else if (bill > 1000 && bill <= 10000) {
//     tax = bill * 0.2;
//     serviceCharge = bill * 0.2;
//     total = bill + serviceCharge + tax;
//   } else if (bill > 10000) {
//     tax = bill * 0.3;
//     serviceCharge = bill * 0.3;
//     total = bill + serviceCharge + tax;
//   } else {
//     console.log("invaild");
//   }
//   return total;
// }
// console.log(foodCourtBill(100000));

// 33
// function simpleInterest(principal, rate, time) {
//   let sInterest = 0;
//   if (principal > 0 && rate > 0 && time > 0) {
//     sInterest = (principal * rate * time) / 100;
//   } else {
//     console.log("invalid");
//   }
//   return sInterest;
// }
// console.log(simpleInterest(100000, 10, 3));

// 34
// function lateFee(dueDays) {
//   let lateCost = 0;
//   let total = 0;
//   if (dueDays > 0 && dueDays <= 10) {
//     lateCost = 10;
//     total = lateCost * dueDays;
//   } else if (dueDays > 10 && dueDays <= 20) {
//     lateCost = 15;
//     total = lateCost * dueDays;
//   } else if (dueDays > 20) {
//     lateCost = 20;
//     total = lateCost * dueDays;
//   } else {
//     console.log("invalid");
//   }

//   return `total amount to pay for overdue days is ${total}`;
// }
// console.log(lateFee());

// 35
// function roomRent(rent, roomType) {
//   let total = 0;
//   let type = roomType.toLowerCase();
//   if (type === "standard") {
//     total = rent + rent * 0.1;
//   } else if (type === "delux") {
//     total = rent + rent * 0.2;
//   } else if (type === "suite") {
//     total = rent + rent * 0.3;
//   } else {
//     console.log("invalid");
//   }
//   return total;
// }
// console.log(roomRent(1000, "sTanDard"));

// 36
// let income = 8000;
// let expenses = [
//   { price: 1000 },
//   { price: 2000 },
//   { price: 1000 },
//   { price: 2000 },
//   { price: 1000 },
//   { price: 2000 },
// ];

// let savedMoney = 0;
// for (let i = 0; i < expenses.length; i++) {
//   console.log(income);
//   income -= expenses[i].price;
//   savedMoney = income;
// }
// if (savedMoney > 1) {
//   console.log(`${savedMoney} your current bank balance`);
// } else if (savedMoney < 0) {
//   console.log(`${savedMoney} your current bank balance is not enough`);
// } else {
//   console.log("invalid");
// }

// 37
// function taxiFare(distance) {
//   let taxiFare = 0;
//   if (distance > 0 && distance <= 2) {
//     taxiFare = 5;
//     console.log(`${taxiFare}$ is your taxi fare for ${distance}km distance`);
//   } else if (distance > 2) {
//     distance = distance - 2;
//     taxiFare = distance * 8;
//     console.log(
//       `${taxiFare}$ is your taxi fare for ${distance + 2}km distance`
//     );
//   } else {
//     console.log("invalid");
//   }
// }

// taxiFare(10);

// 38
// let studentAttendance = [
//   { student: "a", attendance: 90 },
//   { student: "b", attendance: 60 },
//   { student: "c", attendance: 80 },
//   { student: "d", attendance: 70 },
// ];
// for (let i = 0; i < studentAttendance.length; i++) {
//   if (studentAttendance[i].attendance >= 75) {
//     console.log(
//       `${studentAttendance[i].student}  have attendence more than 75%`
//     );
//   } else if (studentAttendance[i].attendance < 75) {
//     console.log(
//       `${studentAttendance[i].student}  have attendence less than 75%`
//     );
//   } else {
//     console.log("invalid");
//   }
// }

// 39
// function speedingTicket(speed) {
//   let limit = 5;
//   if (speed > limit) {
//     console.log("speeding ticket is issued due to over speeding");
//   } else {
//     console.log("speeding ticket is not issued ");
//   }
// }
// speedingTicket(6);

// 40
// function currencyConverter(money, country) {
//   country = country.toLowerCase();
//   if (country == "usd") {
//     usd = money * 81;
//     console.log(`${money}₹ indian currency to usd ${usd}$`);
//   } else if (country == "eur") {
//     eur = money * 91;
//     console.log(`${money}₹  indian currency to EUR ${eur} Euros`);
//   } else if (country == "gbp") {
//     gbp = money * 108;
//     console.log(`${money}₹ indian currency to GBP ${gbp} Pounds`);
//   } else {
//     console.log("invalid");
//   }
// }
// currencyConverter(1, "gbp");
