/* Multiplication Quiz 
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

main();
/* Setup */
// Define a function called main and then call it up top.
// Define a function called askFive and call it from inside main().
// Define a function called askQuestion and call it from inside askFive() as askQuestion(1);

function main(){
    askFive();
}

function askFive(){
    askQuestion();
}
function askQuestion(){
    let a = Math.floor(Math.random(7))+3;
    let b = Math.floor(Math.random(7))+3;
    let product = a*b;
    let equation=a+ "*" + b +"=?";
    let answer = prompt(a + "*" + b + " =" + "?");
    if (answer == "q") {
        alert ("Quitter!");
         return 2;
    }
    else if (answer==product){
        alert("correct!");
        return 0;
    }
    else {
        alert("incorrect");
        return 1;
    }
}

