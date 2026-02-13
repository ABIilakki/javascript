let email='abinesh@gmail.com.in';
let newEmail=email.split("@");
let userName=newEmail[0];
let domainName=newEmail[1];

let checkCapitalLetter=(email)=>{
return new Promise((resolve, reject) => {
    let CapitalLetter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0;i<email.length;i++){ 
      for(let j=0;j<CapitalLetter.length;j++){
        if(email[i]===CapitalLetter[j]){
          reject("invalid no caps letter allowed in email")
        }
      }
    }
      resolve("valid")
})
}
let checkSpecialChars=(userName)=>{
  return new Promise((resolve, reject) => {
  let specialChar=['!','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','?','/','~','`'];
   for(let i=0;i<userName.length;i++){
    for(let j=0;j<specialChar.length;j++){
      if(userName[i]===specialChar[j]){
        reject("invalid no special char allowed in user name")
        
      }
    }
  }
  resolve("valid")
})
}
let checkLength=(userName)=>{
  return new Promise((resolve, reject) => {
      if(userName.length<6){
        reject("invalid...because username must be more than 6 characters ")
      }
      else{
        resolve("valid")
      }
})
}
let checkIndexs=(userName)=>{ 
  return new Promise((resolve, reject) => {
  let firstChar=userName[0]
  let lastChar=userName[userName.length-1]
    if(firstChar==='.' || lastChar==='.'){
      reject("invalid username must start and end with a letter")
    }
    else{
      resolve("valid")
    }
})
}
let checkContinousDot=(userName)=>{
  return new Promise((resolve, reject) => {
    for(let i=0;i<userName.length;i++){
      if(userName[i]==='.'&&userName[i+1]==='.'){
        reject("invalid user doesnot allows continous dots")
      }
    }
    resolve("valid")
  })
}
let checkContinousUnderscore=(userName)=>{
  return new Promise((resolve, reject) => {
    for(let i=0;i<userName.length;i++){
      if(userName[i]==='_'&&userName[i+1]==='_'){
        reject("invalid username doesnot allows continous underscores")
      }
    }
    resolve("valid")
  })
}
let checkNumbers=(domainName)=>{
  return new Promise((resolve, reject) => {
    let numbers=['0','1','2','3','4','5','6','7','8','9'];
    for(let i=0;i<domainName.length;i++){
      for(let j=0;j<numbers.length;j++){
        if(domainName[i]===numbers[j]){
          reject("invalid.. domainname doesnot allows numbers")
        }
      }
    }
    resolve("valid")
  })
}
let checkIndex=(domainName)=>{ 
  return new Promise((resolve, reject) => {
  let firstChar=domainName[0]
  let lastChar=domainName[domainName.length-1]
    if(firstChar==='.' || lastChar==='.'){
      reject("invalid username must start and end with a letter")
    }
    else{
      resolve("valid")
    }
})
}
let checkContinousDots=(domainName)=>{
  return new Promise((resolve, reject) => {
    for(let i=0;i<domainName.length;i++){
      if(domainName[i]=='.'&&domainName[i+1]=='.'){
        reject("invalid domainname doesnot allows continous dots")
      }
    }
    resolve("valid")
  })
}
let checkDotLimit=(domainName)=>{
    return new Promise((resolve, reject) => {
        let dotcount=0;
        for(let i=0;i<domainName.length;i++){
        if(domainName[i]==="."){
         dotcount++ 
          }
        }
         if(dotcount>2){
            reject("invalid domainname allows only two dots")
         }
         else{
            resolve("valid")
         }
    })
}
let checkAtLimit=(email)=>{
    return new Promise((resolve, reject) => {
        let dotcount=0;
        for(let i=0;i<email.length;i++){
        if(email[i]==="@"){
         dotcount++ 
          }
        }
         if(dotcount>1){
            reject("invalid email doesnot allows two At")
         }
         else{
            resolve("valid")
         }
    })
}
async function emailValidation(){
    try{
     await checkCapitalLetter(email);   
     await checkSpecialChars(userName);
     await checkLength(userName);
     await checkIndexs(userName);
     await checkContinousDot(userName);
     await checkContinousUnderscore(userName);
     await checkNumbers(domainName);
     await checkIndex(domainName);
     await checkContinousDots(domainName);
     await checkDotLimit(domainName);
     await checkAtLimit(domainName)
     console.log("valid")     
      }
    catch(error){
        console.log(error);  
    }   
}
emailValidation()