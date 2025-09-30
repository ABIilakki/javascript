let buyprice=[5,9,4,5]
let sellprice=[10,8,5,18]
let percentage=[]

let highestprofit=0
let lowestprofit=Infinity

let highestbuyprice=0
let lowestbuyprice=0


for(i=0;i<buyprice.length;i++){
    let found=false;
    for(j=0;j<sellprice.length;j++){
        if(buyprice[i]<sellprice[i]){
            found=true;
            percentage.push((sellprice[i]-buyprice[i])*100/buyprice[i])
            break
        } 
    }
        if(!found){
            percentage.push(0)
        }
    }
    console.log(percentage);
    
    for (let k = 0; k < percentage.length; k++) {
    if (percentage[k] > highestprofit) {
        highestprofit = percentage[k];
        highestbuyprice = buyprice[k];
    }
     if ( (percentage[k]!==0)&&(percentage[k]<lowestprofit) ){
            lowestprofit = percentage[k];
            lowestbuyprice = buyprice[k];
        } 
    }
console.log(highestbuyprice);
console.log(lowestbuyprice);
