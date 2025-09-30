let num=[7,5,9,8,6,12]
let prime=[];
let notprime=[];

for(let i=0;i<num.length;i++){
    let isprime=true
    if(num[i]<2){
        isprime=false
    }
    else{

        for(let j=2;j<num[i];j++){
            if(num[i]%j==0){
                isprime=false
                break
            }
            }
        }
        if(isprime){
            prime.push(num[i])
               
        }
        else{
            notprime.push(num[i])  
              }
}
    console.log(notprime);
    console.log(prime);
    


// let num=[7,5,9,8,6]
// let prime=[];
// let notprime=[];

// for(let i=0;i<num.length;i++){
//     for(let j=2;j<=num[i];j++){
//         if(num[i]%j==0){
//             notprime.push(num[i])
//             break
//         }
//         else{
//             prime.push(num[i])
//             break;
//         }
//     }
// }
    
// console.log("Not prime numbers:", notprime);
// console.log("Prime numbers:", prime);

