
let joiningdate=19
let joiningmonth=7
let joiningyear=2024


let currentdate=19
let currentmonth=6
let currentyear=2025


let salary=10000

if (typeof joiningdate !== 'number' || typeof joiningmonth !== 'number' ||  typeof joiningyear !== 'number' ||  typeof currentdate !== 'number' || typeof currentmonth !== 'number' ||  typeof currentyear !== 'number' ){
    console.log("invalid input")
    return  
}
else if(joiningdate!==joiningdate || joiningmonth!==joiningmonth || joiningyear!==joiningyear || currentdate!==currentdate || currentmonth!==currentmonth || currentyear!==currentyear){
    console.log("invalid input")
    return
}
if(joiningyear<currentyear){
    a=currentyear-joiningyear
}
else if(joiningyear===currentyear && joiningmonth<=currentmonth && joiningdate<=currentdate){
    console.log(salary);
    return
}   
else{
    console.log("invalid")
    return
}   
if(currentmonth<joiningmonth || currentmonth===joiningmonth && currentdate<joiningdate){
    a = a -  1
}
if(a<=0){
    console.log(salary)
}
else{
    console.log(salary+a*1000);
    
}


             
