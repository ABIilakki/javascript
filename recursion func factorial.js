// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return fact(n-1)*n;
//     }
// }
//     let result=fact(5)
//     console.log(result);

    // let filesystem={
    //     name:"name",
    //     files:['f1.txt','f2.txt'],
    //     subDir:[
    //         {
    //          name:"name",
    //          files:['f3.txt','f2.txt'],
    //          subDir:[{
    //             name:"name",
    //          files:['f3.txt','f2.txt'],
    //          }]
    //         }
    //     ]
    // }
     
    // function getfiles(folder){
    //    result= [folder.files];
    //    for(let subFolder of folder.subDir){
    //      let subResult= getfiles(subFolder);
    //      result=result.concat(subResult);
    //    }
    //    return result
    // }
    // let finalresult=getfiles(filesystem)
    // console.log(finalresult);
    

    // function add(n){
    //     if(n==1){
    //         return 1
    //     }
    //     else{
    //         return add(n-1)+n;
    //     }
    // }
    // let result=add(5)
    // console.log(result);

//     function sub(n){
//         if(n==1){
//             return 1
//         }
//         else{
//             return n-sub(n-1);
//         }
//     }
//     let result1=sub(5)
//     console.log(result1);

let array=[1,2,[3,4,4],[5,6],7,8,[3,3]]      
let result=[]
function findobject(array){
    for(let i=0;i<array.length;i++){
       if(typeof array[i] !=="object"){
            result.push(array[i])       
    }
    else{
       findobject(array[i])
    }
    }
    return result
}

let finalresult=findobject(array)
console.log(finalresult);

for(let j=0;j<result.length;j++){
    for(let k=j+1;k<result.length;k++){
        if(result[j]>result[k]){
            let comp=result[j]
            result[j]=result[k]
            result[k]=comp
        }
    }
}
console.log(result);

    