function isLeapYear(year){
    if(
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
        console.log(" Input Year:", year, "is a Leap Year");
    else
    console.log(
        "Input Year:", 
        year, 
        "is Not a Leap Year"
    );
}
let inputYear = 2017;
isLeapYear(inputYear);
inputYear = 2026;
isLeapYear(inputYear);