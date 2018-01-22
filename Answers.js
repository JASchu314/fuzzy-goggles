var myNumber = 42
var myName = "Joyce"
console.log("myNumber="+myNumber);
console.log("myName="+myName);
var temp =myNumber
var myNumber=myName;
var myName = temp;
console.log("myName is swapped with"+myNumber);
console.log("myNumber is swapped with"+myName);

for(var i=-52; i<1067; i++){
    }
console.log(i)

function beCheerful(){
    for(var i =1; i<99;i++){
        console.log("good morning!")
    }
}
console.log(beCheerful())

for(var i=-300; i<1; i++){
    if(i == -6||i == -3){
        continue;
}
console.log(i);
}

var i=2000;
while(i<5281){
    console.log(i);
    i++;
}

var birthDay = Math.floor((Math.random() * 31) + 1);
var birthMonth = Math.floor((Math.random() *12) + 1);
if (birthDay == 14 || birthMonth == 3) {
console.log("How did you know?")
} else {
console.log("Just another day…")
}
console.log("Birthday = " + birthDay, "Birth month = " + birthMonth)

function leapYear(year){
    if(((year%4==0)&&(year%100!=0))||(year%400==0)){
        console.log("It's Leap Year!");
}else{
    console.log("It's NOT Leap Year");
}
}
console.log(leapYear(4000));

    
    