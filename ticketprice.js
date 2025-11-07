const prompt=require("prompt-sync")();
let n=prompt("Enter the age : ")
let gender=prompt("Enter the gender : ")                      
if(n<=18){  
    console.log("Ticket price is : "+(30))
}
else if(n>18 == n<=36){
    console.log("Ticket price is : "+(40))
}
else if(n>36 == n<60){
    console.log("Ticket price is : "+(70))
}
else if(n=60){
    console.log("Ticket price is : "+(100))
}
else if(n=61)
{
    console.log("Ticket price is : "+(100-(100*2/100)))
}
else if(n=62)
{
    console.log("Ticket price is : "+(100-(100*4/100)))
}



