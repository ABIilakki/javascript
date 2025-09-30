let num=[1,2,2,9,3,3,3,4,4,5,5,5,5,6,2]
let originals=[]
let duplicates=[]
// let counts=[]

for (let i = 0; i < num.length; i++) {
    let found=false;
    for(let j=0;j<i;j++){
        if(num[i]===num[j]){
            duplicates.push(num[i])
            found=true;
            break
        } 
    }
        if(!found){
            originals.push(num[i])
            // break
        }
    // counts[num[i]]=(counts[num[i]] || 0) + 1;
    }

console.log(originals);
console.log(duplicates);

