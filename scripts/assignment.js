// // Task 1
// var ZakatPercentage = 0.025
// var UserInput = + prompt("Your Asset Value");
// var Result = ZakatPercentage * UserInput
// alert("Your Zakat Value ="+Result)

// // Task 2
// var FamilyMember = prompt("Enter Your Total Famliy Member");

// var Gandum = 250;
// var Jau = 450;
// var Khajoor = 2100;
// var Kishmish = 2800;
// var result 
// var Fitrah = +prompt("Select a One Option:1.Gandum 2.Jau 3.Khajoor 4.Kishmish ") ;
// if (Fitrah==1) {
//     result=Gandum*FamilyMember;
//     alert("Your Fitrah" + result)

// }

// else  if (Fitrah==2) {
//     result=Jau*FamilyMember;
//     alert("Your Fitrah" + result);

//  }
//  else  if (Fitrah==3) {
//     result=Khajoor*FamilyMember;
//     alert("Your Fitrah" + result);

//  }


//  else  if (Fitrah==4) {
//     result=Kishmish*FamilyMember;
//     alert("Your Fitrah" + result);

//  }
 
// //  Task3
// var SecretNumber = 4
// var num = +prompt("Guess a number Between 1to10")
// if (num==SecretNumber) {
//     alert("Congratulations! You guessed the secret number")
    
// } 
// else if (num>SecretNumber) {
//     alert(" The guess is too high")

    
// }
//  else if (num<SecretNumber) {
//     alert(" The guess is too Low")
    
//  }
// // Task 4
// var str = prompt("Please enter your name:");
// var capital_name = str.slice(0, 1).toUpperCase() +str.slice(1).toLocaleLowerCase();
// alert("Your name is  " + capital_name);
// // Taske 5
// var ContactNumbers = [];
// var ContactNames = [];
// for (var i = 0; i < 2; i++) {
//   var num = +prompt("Enter a contact number");
//   if (!num) 
//         break;
        
//   var num2 = prompt("Enter a contact name:");
//   if (!num2) 
//         break;
//   ContactNumbers.push(num);
//   ContactNames.push(num2);
//   console.log("Contact Names:",ContactNames);
//   console.log("Contact Numbers:",ContactNumbers);

// }
// 
// // Task 6
// var pro = ["Prince", "Rio", "Oreao", "HeartJam","Zera","Tuck"];
// var pro1 = +prompt("Which Biscuit would you like to buy? select 0to5")
// var remove_pro = pro.splice(pro1,1);
// console.log("Removed Item", remove_pro);
// console.log("Remaining Items:", pro);
// console.log("Total number of items remaining:", pro.length);
// // Task 7
// var nationality = prompt("Enter Your Nationality");
// var gender = prompt("Enter Your Gender");
// var age = +prompt("Enter Your Age");

// if (nationality === "Pakistani" || nationality === "Indian") {
//   if (gender == "male" && age >= 18) {
//     alert("You are eligible to vote.");
//   } else if (gender == "female" && age >= 18) {
//     var married = prompt("Are you married? (yes or no)").toLowerCase();
//     if (married == "yes") {
//       alert("You are eligible to vote.");
//     } else {
//       alert("You are not eligible to vote.");
//     }
//   } else {
//     alert("You are not eligible to vote.");
//   }
// } else {
//   alert("You are not eligible to vote.");
// }
// // Task 8
// var WorldCupSquad = [
//     'Babar Azam',
//     'Shadab Khan',
//     'Faheem Ashraf',
//     'Fakhar Zaman',
//     'Haris Rauf',
//     'Iftikhar Ahemd',
//     'Ihsanullah',
//     'Imad Wasim',
//     'Mohammad Haris',
//     'mohammad Nawaz',
//     'Mohammad Rizwan',
//     'Naseem Shah',
//     'Saim Ayub',
//     'Shaheen Shah Afridi',
//     'Shan Masood'
//     ];
// var finalTeam = WorldCupSquad.slice(0, 11);
// console.log("Final team players:" + finalTeam);
