let num=[1,2,[3,4,5],6,7,[8,9],89,9,7,[6,7,8]]
let newarr=[]
 
for(let i=0;i<num.length;i++){
    if(typeof num[i]==="object"){
        // console.log(num[i]); 
       for(let j=0;j<num[i].length;j++){
           newarr.push(num[i][j])
        //    console.log(newarr);
        }
        }else{
            newarr.push(num[i])
        }

        }    
console.log(newarr);
