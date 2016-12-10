// var input = parseInt(prompt("Enter Your Salary"));
function salary() {
    
    if(input == "" || input == " "){ 
        alert("Please Enter Your Salary");
    }
    else{
    var input = parseFloat(document.getElementById('user_input').value);
    var d = input * 0.4;
    var h = input * 0.2;
    var total = input + h + d;
    document.getElementById('D-a').innerHTML = "Your Dearness Allowance is : " + d + "<br>";
    document.getElementById('H-a').innerHTML = "Your Dearness Allowance is : " + h + "<br>";
    document.getElementById('gross').innerHTML = "Your Gross Salary is : " + total + "<br>";
    document.getElementById('user_input').value = "";
    }
}

