
let a=660
let b=900
let c=1600
let d=600
let largest,secondLargest
// if(typeof a!==a || typeof b!==b || typeof c!==c || typeof d!==d ){
//     console.log("invalid input")
//     return
// }

if (typeof a !== 'number' | typeof b !== 'number' |  typeof c !== 'number' |  typeof d !== 'number' ){
    console.log("invalid input")
    return  
}
else if(a!==a | b!==b | c!==c | d!==d){
    console.log("invalid input")
    return
}
else if(a>b){
    largest=a
    secondLargest=b
}
else{
    largest=b
    secondLargest=a
}
if(c>largest){
    secondLargest=largest
    largest=c
}
else if(c==largest){
    largest=c
}
else if(c>secondLargest) {
    secondLargest=c
}
if(d>largest){
    secondLargest=largest
    largest=d
}
else if(d==largest){
    largest=d
}
else if(d>secondLargest) {
    secondLargest=d
}
// if(largest==secondLargest){
//     console.log("all numbers are equal")
// }
// // if(typeof largest !== 'number'){
//     // console.log("invalid "+secondLargest)
//     // return
// // } 
// // else if(typeof secondLargest !== 'number'){
//     // console.log(largest+" invalid")
//     // return
// // }
console.log(largest,secondLargest)





