  //(1)  city name  //


var cityname  = prompt(("Enter your city name"));
if (cityname == "karachi")

alert(cityname = "welcome to city of lights ")

else{
alert("city not found")
} 




 //(2) gender  //

var gender = prompt(("enter your gender"));
if (gender == "male")

alert(gender = "Good Morning Sir")

if(gender == "female")

alert(gender = " Good Morning Ma'am");


else{
    alert("gender not found")
}




//(3) traffic signal //


var traficsignalcolor = (prompt("Enter your traffic signal color"))
if (traficsignalcolor == "red")

alert(traficsignalcolor = "Must Stop")

if (traficsignalcolor == "yellow")

alert(traficsignalcolor = "Ready to move")

if (traficsignalcolor == "green")

alert(traficsignalcolor = "Move now")

else{
    alert("traffic signal color not found")
}




// (4) fuel car //


var remainingfuel = (prompt("Enter the remaining fuel in your car (in liters"));

if (remainingfuel == "0.25" )
    alert(remainingfuel = "Please refill the fuel in your car")

else{
    alert( "You have enough fuel")
}





//(5) mathametics //

    a//
 var a  = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// given condition is true

   // b//
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// the given condition is false//
   // c//
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// the given conditiom is false//
if (c === 13){
alert("condition 2 is true");
}
// the given condition is true//
if (++c < 14){
alert("condition 3 is true");
}
//  the given condition id false//
if(c === 14){
alert("condition 4 is true");
//  the given condition is true//
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// the cost are equals//
 if (true){
alert("True");
}
if (false){
alert("False");
}
if ("car" < "cat"){
  alert("car is smaller than cat");
  }



  //(6) marksheet//

var Physics = Number(prompt("Enter your Physics Numbers !"))
var  Computer = Number(prompt("Enter your Computer Numbers !"))
var  Islamiat = Number(prompt("Enter your Islamiat Numbers !"))

var totalMarks = 300;
var obtMarks = Physics + Computer + Islamiat;
var percent = (obtMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet </h1> <br><br>")
document.write("Total Marks: " + "<b>" + totalMarks + "</b><br>")
document.write("Marks Obtained: " + "<b>"  + obtMarks + "</b><br>")
document.write("Percentage: " + "<b>" + percent+ "%" + "</b><br>")

if(percent >=80 ){
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}

else if(percent <=79 && percent >=70){
    document.write("Grade: A" + "<b>" + "</b><br>")
    document.write("Remarks: Good"  + "<b>" + "</b><br>")
}

else if(percent <=69 && percent >=60){
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")}


else if(percent <=60){
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry.. Work Hard" + "<br>")}





// ---7 Guess Game-//-

var Secratenumber = 5;
var Guessnumber   =  Number(prompt("Enter Your Lucky Number between 1 to 10"));

if( Guessnumber === Secratenumber){
    alert("Bingo! Correct answer")
}else if( Guessnumber == Secratenumber + 1 || Guessnumber == Secratenumber - 1){
    alert("Close enough to the correct answer")
}else{
    alert("Sorry Wrong Number Please try Again !")
}




// --8 Devided by 3---//

var userinput = Number(prompt("Write a Number to Check if it can devide by 3"))

if(userinput % 3 == 0){
    alert("Given Number Can be Devide By 3")
}else{
    alert("Given Number Can be Not Devide By 3")
}






// -----9 Even & Odd Number--//

var userinput = Number(prompt("Write a Number  so that we can check that is Even or Odd"))

if(userinput % 2 == 0){
    alert("Given Number is Even")
}else{
    alert("Given Number is Odd")
}




// ---- 10  temperature --//


var  temperature = Number(prompt("Enter the temperature in Celsius"))

if(temperature >=40 ){
   document.write("It is too hot outside")
}
         
else if(temperature <=39 && temperature >=30){
   document.write("The Weather today is Normal")
}
         
else if(temperature <=29 && temperature >=20){
   document.write("Today’s Weather is cool")
}
         
else if(temperature >=0 && temperature <=10){
   document.write("OMG! Today’s weather is so Cool")
}



// 11 calculator ///



var number1 = Number(prompt("enter your first number"));
var number2 = Number(prompt("enter your second number"));
var operator = (prompt("enter your operator number"));


if(operator === "+"){
    alert(number1+number2)
}
if(operator === "-"){
    alert(number1-number2)
}
if(operator === "*"){
    alert(number1*number2)
}
if(operator === "/"){
    alert(number1/number2)
}
if(operator === "%"){
    alert(number1/number2*100)
}



// --- the end---///