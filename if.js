let a=40
let b=60
let c=70
let d=69
let largest,secondLargest

if(a>b){
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
// else{
//     secondLargest=c
// }
else if(c>secondLargest){
    secondLargest=c
}
else if(c<secondLargest){
    secondLargest=c
}
if(d>largest){
    secondLargest=largest
    largest=d
}
else if(secondLargest<d){
    secondLargest=d
}
else if(secondLargest>d){
    secondLargest=d
}
// else{
//     secondLargest=d
// }
console.log(largest,secondLargest)

