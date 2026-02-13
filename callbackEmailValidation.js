 function capitalletter(email,callback){
   setTimeout(() => {
     let capital_letter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     let found=false;
     for(let i=0;i<email.length;i++){
       for(let j=0;j<capital_letter.length;j++){
         if(email[i]==capital_letter[j]){
           found=true
           callback("invalid no caps letter allowed in email")
          }
        }
        
      }
      if(!found){
        callback("valid") 
      }
    }, 2000);
  } 
  function result(email) {
  console.log(email);
};

function checkspecialchars(user_name,callback){
  setTimeout(() => {
    let special_chars=['!','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','?','/','~','`'];
    let found=false;
    for(let i=0;i<user_name.length;i++){
      for(let j=0;j<special_chars.length;j++){
        if(user_name[i]==special_chars[j]){
          found=true
          callback( "invalid no special char allowed in user name")
        }
      }
    }
    if(!found){
      callback( "valid")
    }
  },2000);
}

function checklength(user_name,callback){
  setTimeout(() => {
      let less=false
    if(user_name.length<6){
      less=true
      callback( "invalid username must be more than 6 char")
    }
    if(!less){
      callback( "valid")
    }
  }, 2000);
  }

  function checkindexs(user_name,callback){
    setTimeout(() => {
      let found=false;    
      let first_char=user_name[0];
      let last_char=user_name[user_name.length-1];
      let dot=['.'];
    for(let i=0;i<dot.length;i++){
        if(first_char==dot[i] || last_char==dot[i]){
            found=true;
           callback( "invalid username must start and end with a letter") 
        }
    }
    if(!found){
      callback( "valid")
    }
  }, 2000);
}
    
function checkcontinousdot(user_name,callback){
  setTimeout(() => {
    let found=false
    for(let i=0;i<user_name.length;i++){
        if(user_name[i]==='.'&&user_name[i+1]==='.'){
            found=true;
             callback( "invalid username must not contain continous dots")
           
        }
         }
         if(!found){
            callback( "valid")
            }
          }, 2000);
            }

    function checkcontinousunderscore(user_name,callback){
      setTimeout(() => {
        let found=false;
        for(let i=0;i<user_name.length;i++){
        if(user_name[i]==='_'&&user_name[i+1]==='_'){
            callback("invalid username must not contain continous underscore")
        }
         }
         if(!found){
             callback( "valid")
            }
    }, 2000);
  }
    
function checknumbers(domain_name,callback){
  setTimeout(() => {
    
    let numbers=['0','1','2','3','4','5','6','7','8','9'];
    let found=false;
    for(let i=0;i<domain_name.length;i++){
      for(let j=0;j<numbers.length;j++){
               if(domain_name[i]==numbers[j]){
                found=true
                callback( "invalid no number allowed in domain name")
               }
            }
        }
        if(!found){
         callback( "valid")
        }
      },2000);
    }

    function checkindex(domain_name,callback){
      setTimeout(() => {
        let found=false;    
        let first_char=domain_name[0];
        let last_char=domain_name[domain_name.length-1];
        let dot=['.'];
        for(let i=0;i<dot.length;i++){
          if(first_char==dot[i] || last_char==dot[i]){
            found=true;
           callback( "invalid domainname must start and ends with a letter does not allow dots")
            
          }
        }
        if(!found){
        callback( "valid")
        }
      },2000);
}

    function checkspecialchar(domain_name,callback){
      setTimeout(() => {
        
        let special_char=['!','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','?','/','~','`','@'];
        let found=false;
        for(let i=0;i<domain_name.length;i++){
          for(let j=0;j<special_char.length;j++){
               if(domain_name[i]==special_char[j]){
                found=true
                callback("invalid no special char allowed in domain name")
               }
              }
            }
            if(!found){
             callback("valid")
            }
          }, 2000);
}

    function checkcontinousdots(domain_name,callback){
      setTimeout(() => {
        let found=false
        for(let i=0;i<domain_name.length;i++){
          if(domain_name[i]==='.'&&domain_name[i+1]==='.'){
            found=true;
           callback("invalid domain name not contain continous dots")
          }
         }
         if(!found){
            callback("valid")
          }
        }, 2000);
            }
    
function checkdotlimit(domain_name,callback){
  setTimeout(() => {
    
    let dotcount=0;
    for(let i=0;i<domain_name.length;i++){
      if(domain_name[i]==='.'){
        dotcount++;
      }
    }
    if(dotcount>2){
      callback( "invalid dot count is more than 2 in domain name")
    }
    else{
      callback("valid")
    }
  }, 2000);
}

function emailvalidation(email, callback) {
    if (email == "@" || email.split('@').length !== 2) {
      callback("invalid: only one @ allowed");
      return;
    }
    let newemail=email.split("@");
    let domain_name=newemail[1];
    let user_name=newemail[0];
    capitalletter(email, function(validateCapitalLetter) {
    if (validateCapitalLetter !== "valid") {
      callback(validateCapitalLetter); 
      } 
    else {
         checkspecialchars(user_name,function(validateSpecialChars) {
    if(validateSpecialChars !=="valid"){
       callback(validateSpecialChars);
      } 
  else{ 
    checklength(user_name,function(validateLenght){
   if(validateLenght !=="valid"){
    callback(validateLenght);
   }
  else{
     checkindexs(user_name,function(validateIndexes){
  if(validateIndexes !=="valid"){
    callback(validateIndexes);
   }
  else{
     checkcontinousdot(user_name,function(validateContinousDot){
      if(validateContinousDot!=="valid"){
        callback(validateContinousDot);
      }
      else{
        checkcontinousunderscore(user_name,function(validateContinousUnderscore){
          if(validateContinousUnderscore!=="valid"){
            callback(validateContinousUnderscore)
          }
          else{
            checknumbers(domain_name,function(validateNumbers){
              if(validateNumbers!=="valid"){
                callback(validateNumbers)
              }
              else{
                checkindex(domain_name,function(validateIndex){
                  if(validateIndex!=="valid"){
                    callback(validateIndex)
                  }
                  else{
                    checkspecialchar(domain_name,function(validateSpecialChar){
                      if(validateSpecialChar!=="valid"){
                        callback(validateSpecialChar)
                      }
                      else{
                        checkcontinousdots(domain_name,function(validateContinousDots){
                          if(validateContinousDots!=="valid"){
                            callback(validateContinousDots)
                          }
                          else{
                            checkdotlimit(domain_name,function(valiidateDotLimit){
                              if(valiidateDotLimit!=="valid"){
                                callback(valiidateDotLimit)
                              }
                              else{
                                callback("valid email")
                              }
                            })
                          }
                          
                        })
                      }
                    })
                  }
                })

              }
            })
          }
        })
      }
     })
   }
  })
  }
})   
}
})
}
})
}
emailvalidation("abines*@gmail.com", function(result){
  console.log(result);
});




// add(result,3,5); 
// function add(callback,a,b){
//     setTimeout(()=> {
//         c=a+b 
//         callback(c)
//     } , 2000);
// }
// function result(c) {
//   console.log(c);    
// }

// function abi(callback){
//     callback()
// }
// function example(){
//     let a =10;
//     let b = 20;
//     console.log(a+b)
// }
// abi(example)