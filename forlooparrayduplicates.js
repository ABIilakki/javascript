let arr = [1, 2, 3, 3, 3, 3, 4, 4 ,4, 5, 5, 5, 6, 6];
let counted=[]
for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {  
            if(counted[arr[i]])continue
            count=count+1
        }
    }
    if (count >=1) {
        console.log(arr[i] + " appears " + count + " times");
    }
    counted[arr[i]]=true
}