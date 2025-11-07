let a=[1,2,3,3,4,4,4,5,5,5,6,6,7,7,7,9,4,8,2,4,2,2,4,3,10,10,7,5,5,4,5,6,7,3]
let originals=[]
let duplicates=[]

for(let i=0;i<a.length;i++){
    let found=false;
    for(let j=0;j<i;j++){
        if(a[i]===a[j]){
            duplicates.push(a[i])
            found=true;
            break
        }
    }
        if(!found){
            originals.push(a[i])
        }
}
console.log(originals);
console.log(duplicates);

