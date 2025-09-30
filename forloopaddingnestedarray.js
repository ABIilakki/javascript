// let arr=[1,2,[1,3,8],1,2,[1,8],0,9]
// let newarr=[]

// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]==="object"){
//         // console.log(arr[i]);
//         let b=0;
//         for(let j=0;j<arr[i].length;j++){

//             // console.log(arr[i]);
//         b=b+arr[i][j]
//     }
//     newarr.push(b)
// }
//     else{
//         newarr.push(arr[i])
//     }
//     }
// console.log(newarr);


arr = [1,6,5,[7,8],[7,6],8,[[9,0,8]]] //[1,6,5,15,13,8,17]
newarr=[]
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="object"){
        let b=0
        for(let j=0;j<arr[i].length;j++){
            b=b+arr[i][j]
            if(typeof arr[i][j]==="object"){
                let c=0
                for(let k=0;k<arr[i][j].length;k++){
                    c=c+arr[i][j][k]  
                }
                b=+c;    //important  don't use push here just add to b.  not a operator
            }
        }
        newarr.push(b)
}
    else{
        newarr.push(arr[i])
    }
}
console.log(newarr)


