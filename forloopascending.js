let arr=[2,4,1,5,7,10,11,3,2,12,8,6]

for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){ 
            if(arr[i]>arr[j]){
                let comp=arr[i]
                arr[i]=arr[j]
                arr[j]=comp
            }
        }
    }
  
  
