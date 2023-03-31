
//============================= alert prompt and console ======================================

alert('hello world');

prompt('where are you from','karachi')

console.log('hello karachi');

//============================= crate string varibales   ======================================

var Myname = "Mubbashir"
var Fname = "M.hussain"

console.log(' ')
//concat variables 
console.log('My name is : ' + Myname + " "+ Fname)
console.log(' ')

//============================= Number variables and math oprations ===================================

var a = 10
var b = 20 
var c = a + b;
console.log(c);

var d = (c + a) - b; 

console.log(d);




var e = '40'
var f = c - e           // it can done subtraction 
var g = c + e ;         // it can't do addintion cuz it can do conacatination
console.log(f)
console.log(g + "  concatination")

//=============================  legal and ilegal variables  ======================================

// ===================================legal varibales==============================
var Name = 'anything'
var fatherName = 'anything'
var Father_name = 'anything'
var Name1234 = 'anything'
var name$1 = 'anything'
var $name = 'anything'
        
//==================================== ilegal varibales =================================================

// var 123 = 'anything'  
// var "".>/?  = 'anything'
// var +-645 = 'anything'

console.log(' ')
//============================= if elase Statment ! important =================================

var condition = false

if(condition){
    console.log("if condition is "+condition+" IF statment run")
}else{
    
    console.log("if condition is "+condition+" else statment run")
}



