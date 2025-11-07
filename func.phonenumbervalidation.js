let a="1232275222";

function length(a){
    if(a.length<10 || a.length>10){
        return " number is length is invalid";
    }
   else{
        return "valid";
       }
    }
   //  console.log(length(a));

    function alphabets(a){
         let alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
         let found=false;  
         for(let i=0;i<alphabets.length;i++){
            for(let j=0;j<a.length;j++){
            if(a[j]===alphabets[i]){
               found=true;
                return "invalid,number contains alphabet";
            }
         } 
      }
      if(!found){
        return "valid";
      }
   }
   // console.log(alphabets(a));

   function specialchar(a){
      let specialchar=['!','@','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','.','?','/','`','~']; 
      let found=false;  
      for(let i=0;i<specialchar.length;i++){
         for(let j=0;j<a.length;j++){
         if(a[j]===specialchar[i]){
            found=true;
             return "invalid,number contains special character";
         }
      }
   }
      if(!found){
        return "valid";
   }
}
   // console.log(specialchar(a));

function phonenumbervalidation(a){
  let first=length(a);
  let second=alphabets(a);
  let third=specialchar(a);
   if(first==="valid" && second==="valid" && third==="valid"){
      return "valid phone number";
   }
   else if(first!=="valid"){
      return first;
   }
   else if(second!=="valid"){
      return second;
   }
   else{
      return third;
   }
}
console.log(phonenumbervalidation(a)); 