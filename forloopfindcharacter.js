let arr=[1,2,3,4,'@','$',7,8]
let character=[]
const number =[]

for(let i=0;i<arr.length;i++)
{
    if(typeof arr[i]=='number'){
        number.push(arr[i])
    }
    else{
    character.push(arr[i])
}
}
console.log(character);
console.log(number);




