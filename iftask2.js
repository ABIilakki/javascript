let firstnumber=11
let secondnumber=9
let nearestnumber=12


if(firstnumber>nearestnumber){
    (a=firstnumber-nearestnumber)
}
else{
    a=nearestnumber-firstnumber
}
if(secondnumber>nearestnumber){
    (b=secondnumber-nearestnumber)
}   
else{
    b=nearestnumber-secondnumber
}
if(a<b){
    console.log(firstnumber)
}   
else if(b<a){
    console.log(secondnumber)
}
else{
    console.log("Both numbers are nearest number")
}

