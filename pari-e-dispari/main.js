let evenOddTotal = document.getElementById("evenOdd");
let userNumber = document.getElementById("number")


function pcNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function play(){
    let computerNumber = pcNumber(1,5);
    let result = parseInt(userNumber.value) + computerNumber;
    if (evenOddTotal.value === "even" && result % 2 === 0){
        alert("you won!")
    }
    else if (evenOddTotal.value === "odd" && result % 2 !== 0){
        alert("you won!")
    } else 
    alert("you lost!")
    console.log(result);
}