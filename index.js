//1. intriductions to data types

//let num1;
//let num2;
//let num;


//2. basic functions

//function add(num1, num2) {
//    return ´${num1} plus ${num2} equals ${num1+num2}´;
//}

//function substract(num1, num2) {
//    return ´${num1} minus ${num2} equals ${num1-num2}´;
//}

//function multifly(num1, num2) {
//    return ´${num1} times ${num2} equals ${num1*num2}´;
//}

//function devide(num1, num2) {
//    return ´${num1} devided by ${num2} equals ${num1/num2}´;
//}

//2. magic function

//function magicOperation(true){
 //   switch(num){
 //       case num<10: return "magic dust makes the number grow: " + (num*10);
 //       case num>=10 && num<=100: return "A magic gone doubles the number: " + (num*2);
  //      default: return "the magic is too mighty for magic and remains unchanged.";
 //   }
//}

//3. Loop Operation

//let continueCalculating = true;
//while (continueCalculating) {
//    let operation = prompt ("Choose an operation: add, subtract, multiply, devide, magic or exit");
//    if (operation === "add"){
//        
 //   }
 //   if (operation === "subtract"){
//
 //   }
 //   if (operation === "multiply"){
//
 //   }
 //   if (operation === "devide"){
//
 //   }
 //   if (operation === "magic"){
//
 //   }
 //   if (operation === "exit"){
//        console.log ("goodbye!");
 //       break;
//    }
//}

//4. input validation

//let continueCalculating = true;
//while (continueCalculating) {
//    let operation = prompt ("Choose an operation: add, subtract, multiply, devide, magic or exit");
 //   if (operation === "add"){
//
 //   }
 //   if (operation === "subtract"){
//
 //   }
 //   if (operation === "multiply"){
//
 //   }
 //   if (operation === "devide"){
//
 //   }
 //   if (operation === "magic"){
//
 //   }
 //  if (num2 === 0 && operation === "devide"){
 //       console.log ("can not devide by zero. try another operation");
 //       continue;
 //   }
//
 //   if (operation === "exit"){
 //       console.log ("goodbye!");
 //       break;
 //   }
//}





let userWantsToContinue = prompt ("If you want to continue to the calculator type yes, otherwise type No");

if (userWantsToContinue === "Yes" || userWantsToContinue === "yes" ){
    console.log ("welcome to the magic calculator!");



    while (userWantsToContinue === "Yes" || userWantsToContinue === "yes"){
    
        let operation = prompt ("Choose an operation: add, subtract, multiply, devide, magic or exit");

        //magic operation
        if (operation === "magic"){
            let num = prompt ("please give a number");
            function magicOperation(num){
                switch (true) {
                    case num<10 : return "magic dust makes the number grow: " + (num*10);
                    case num>=10 && num<=100 : return "A magic gone doubles the number: " + (num*2);
                    default : return "the magic is too mighty for magic and remains unchanged.";
                }
            }
            console.log(magicOperation(num));
        }

        //real operation    
        if (operation === "add" || operation ==="subtract" || operation === "multiply" || operation === "devide"){
            let num1 = prompt ("Give number 01 for "+operation); 
            let num2 = prompt ("Give number 02 for "+operation); 

            //add
            function add(num1,num2) {
                return `${num1} plus ${num2} equals ${+num1+ +num2}`;
            }

            //substracttes
            function subtract(num1,num2) {
                return `${num1} minus ${num2} equals ${num1 - num2}`;
            }

            //multiply
            function multiply(num1,num2) {
                return `${num1} times ${num2} equals ${num1 * num2}`;
            }

            //devideyes num2 === 0 && operation === "devide"
            function devide(num1,num2) {
                if (num2 == 0 && num1 == 0) {
                    console.log ("can not devide zero by zero. try another operation");
                }
                if (num2 == 0 && operation === "devide") {
                    console.log ("can not devide " + num1 +" by zero. try another operation");
                }
                if (!(num2 == 0)||!(num1 == 0)){
                    return `${num1} devide by ${num2} equals ${num1 / num2}`;
                }
            }

            switch (operation) {
            case "add" : 
                console.log (add(num1,num2));
                break;
                case "subtract" :
                console.log (subtract(num1,num2));
                break;
                case "multiply" : 
                console.log (multiply(num1,num2));
                break;
                case "devide" : 
                console.log (devide(num1,num2));
                break;
                default: 
                console.log ("Invalid operation, Please try again.");
                break;
            }   
        }
    
        else if(operation === "exit"){
            console.log ("Thank you, goodbye!");
            break;
        }

        else if(!(operation === "exit")){
            console.log (operation+" is a invalid operation, Please type the operation again.");
        }
    }
}

if (userWantsToContinue === "No" || userWantsToContinue === "no" ){
    console.log ("Thank you, goodbye!");
}
