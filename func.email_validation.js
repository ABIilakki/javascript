
function capital_letter(email){
     let capital_letter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     let found=false;
     for(let i=0;i<email.length;i++){
          for(let j=0;j<capital_letter.length;j++){
               if(email[i]==capital_letter[j]){
                found=true
                return "invalid no caps letter allowed in email"
               }
          }
     }
     if(!found){
            return "valid"
     }
}
function check_special_chars(user_name){
        let special_chars=['!','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','?','/','~','`'];
        let found=false;
        for(let i=0;i<user_name.length;i++){
          for(let j=0;j<special_chars.length;j++){
               if(user_name[i]==special_chars[j]){
                found=true
                return "invalid no special char allowed in user name"
               }
          }
    }
    if(!found){
        return "valid"
    }
}

function check_length(user_name){
    if(user_name.length>6){
        return "valid"
    }
    else{
        return "invalid username must be more than 6 char"
    }
}

function check_indexs(user_name){
    let found=false;    
    let first_char=user_name[0];
    let last_char=user_name[user_name.length-1];
    let dot=['.'];
    for(let i=0;i<dot.length;i++){
        if(first_char==dot[i] || last_char==dot[i]){
            found=true;
            return "invalid username must start and end with a letter"
            
        }
    }
    if(!found){
        return "valid"
    }
}

function check_continous_dot(user_name){
    let found=false
    for(let i=0;i<user_name.length;i++){
        if(user_name[i]==='.'&&user_name[i+1]==='.'){
            found=true;
            return "invalid username must not contain continous dots"
        }
         }
         if(!found){
             return "valid"
            }
            }

function check_continous_underscore(user_name){
    let found=false;
    for(let i=0;i<user_name.length;i++){
        if(user_name[i]==='_'&&user_name[i+1]==='_'){
            found=true;
            return "invalid username must not contain continous underscore"
        }
         }
         if(!found){
             return "valid"
            }
        }
        

function check_numbers(domain_name){
    let numbers=['0','1','2','3','4','5','6','7','8','9'];
     let found=false;
        for(let i=0;i<domain_name.length;i++){
          for(let j=0;j<numbers.length;j++){
               if(domain_name[i]==numbers[j]){
                found=true
                return "invalid no number allowed in domain name"
               }
            }
        }
        if(!found){
            return "valid"
        }
    }

function check_index(domain_name){
    let found=false;    
    let first_char=domain_name[0];
    let last_char=domain_name[domain_name.length-1];
    let dot=['.'];
    for(let i=0;i<dot.length;i++){
        if(first_char==dot[i] || last_char==dot[i]){
            found=true;
            return "invalid domainname must start and ends with a letter does not allow dots"
            
        }
    }
    if(!found){
        return "valid"
    }
}

function check_special_char(domain_name){
        let special_char=['!','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|',':',';','"',"'",'<','>',',','?','/','~','`','@'];
        let found=false;
        for(let i=0;i<domain_name.length;i++){
          for(let j=0;j<special_char.length;j++){
               if(domain_name[i]==special_char[j]){
                found=true
                return "invalid no special char allowed in domain name"
               }
          }
    }
    if(!found){
        return "valid"
    }
}
function check_continous_dots(domain_name){
    let found=false
    for(let i=0;i<domain_name.length;i++){
        if(domain_name[i]==='.'&&domain_name[i+1]==='.'){
            found=true;
            return "invalid domain name not contain continous dots"
        }
         }
         if(!found){
             return "valid"
            }
            }

function check_dot_limit(domain_name){
    let dotcount=0;
    for(let i=0;i<domain_name.length;i++){
        if(domain_name[i]==='.'){
            dotcount++;
        }
    }
    if(dotcount>2){
        return "invalid dot count is more than 2 in domain name"
    }
    else{
        return "valid"
    }
}
// console.log(check_dot_limit(domain_name));

// console.log(check_continous_dots(domain_name));
            
// console.log(check_special_char(domain_name));
 
// console.log(check_index(domain_name));

// console.log(check_numbers(domain_name));
    
// console.log(check_continous_underscore(user_name));

// console.log(check_continous_dot(user_name));

// console.log(check_indexs(user_name));

// console.log(check_length(user_name));

// console.log(check_special_chars(user_name));

// console.log(capital_letter(email));

function email_validation(email){
    if(email=="@"||email.split('@').length!==2){
        return "invalid one @ only"
    }
    let newemail=email.split("@");
    let domain_name=newemail[1];
    let user_name=newemail[0];
    
    
    let first=capital_letter(email);
    let third=check_special_chars(user_name);
    let fourth=check_length(user_name);
    let fifth=check_indexs(user_name);
    let sixth=check_continous_dot(user_name);
    let seventh=check_continous_underscore(user_name);
    let eight=check_numbers(domain_name);
    let ninth=check_index(domain_name);
    let tenth=check_special_char(domain_name);
    let eleventh=check_continous_dots(domain_name);
    let twelfth=check_dot_limit(domain_name);
    if(first==="valid"&&third==="valid"&&fourth==="valid"&&fifth==="valid"&&sixth==="valid"&&seventh==="valid"&&eight==="valid"&&ninth==="valid"&&tenth==="valid"&&eleventh==="valid"&&twelfth==="valid"){
        return"valid email"
    }
    else if(first!="valid"){
        return first;
    }
    else if(third!="valid"){
        return third;
    }
    else if(fourth!="valid"){
        return fourth;
    }
    else if(fifth!="valid"){
        return fifth;
    }
    else if(sixth!="valid"){
        return sixth;
    }
    else if(seventh!="valid"){
        return seventh;
    }
    else if(eight!="valid"){
        return eight;
    }
    else if(ninth!="valid"){
        return ninth;
    }
    else if (tenth!="valid"){
        return tenth;
    }
    else if (eleventh!="valid"){
        return eleventh;
    }
    else if (twelfth!="valid"){
        return twelfth;
    }
}
console.log(email_validation("abinesh124@gmail.com"));
console.log(email_validation("abinesh124@gmail.com"));
console.log(email_validation("gowth@gmail.com.in"));
