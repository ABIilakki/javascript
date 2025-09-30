let a=[1,2,4,6,7,9,12,13,20,17]
let odd=[]
let even=[]

for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    }
    
    else{
        odd.push(a[i])
        
    }    
}
console.log(odd);
console.log(even);

