//how to define a function and its scope
function addTwoNumber (num1,num2) {
    console.log(num1 + num2);
}

function addition (num1,num2){
    // let result = num1 + num2;
    // return result

    return num1 + num2;
}

//function call [ for call the function use paranthesis .... if not it consider as a function referance]
// addTwoNumber(3,5)

// console.log(addition(5,10));


function logginMessage (username) {
    // console.log(`${username} is logged in`);
    if(!username){
        console.log("user is not valid or incorrect username");
    }
}

// logginMessage("nikhil joshi")
logginMessage("")