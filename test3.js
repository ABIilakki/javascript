let a=[2,3,4,5,6,7,6,6,7,9,3,2,1,6,7,8]
let b=[9,8,7,6,5,4,3,2,2,1,7,8,9]
let c=[]

for(let i=0;i<a.length||i<b.length;i++){
    for(let j=0;j<b.length;j++){
        if(i<a.length&&i<b.length){
            c.push(a[i]+b[i])
            break
        }
        else if(i<a.length){
            c.push(a[i])
            break
        }
        else{
            c.push(b[i])
            break
        }
    }
} 
console.log(c);
