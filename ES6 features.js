-1/////spread operator////

// let numbers=[1,2,3]
// function addnumbers(a,b,c){
//     return a+b+c
// }
// let result=addnumbers(...numbers)  //spread operator
// console.log(result);

// const breakfast=['idly','dosa']
// const lunch=['sambar','meal']
// const dinner=['chapati','chenna']
// issummer=false
// const myfood=[
//     ...breakfast,
//     ...lunch,
//     ...(issummer ? ['waterlon']:""),
//     ...dinner]
// console.log(myfood);





-2/////rest operator/////

// function  sumexpense(loan,...expenses){
//     let total= expenses.reduce((a,b)=>a+b)
//     return total-loan
// }
// let result=sumexpense(7,56,21,45,13,22)
// console.log(`your total expense is:${result}`);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num);
// }

// console.log(sum(1, 2, 3));  
// console.log(sum(10, 20, 30, 40)); 




-3///////object destructuring//////

// const person={
//     firstName:"mari",
//     lastName:"selvaraj",
//     age:29,
//     isAlive:true,
//     parent:{
//         father:'vijay',
//         mother:'trisha',
//     }
// }
// const{firstName,lastName:myLastName,...remainingdetails}=person
// console.log(firstName,myLastName,remainingdetails);

// let fav1,fav2;
// ({fav1,fav2,...otherValues}={
//     fav1:'one',
//     fav2:'two',
//     fav3:'three',
//     fav4:'four',
//     fav5:'five',
// })
// console.log(fav1,fav2,otherValues);


//  const person={
//     firstName:"mari",
//     lastName:"selvaraj",
//     age:29,
//     isAlive:true,
//     parent:{
//         father:'vijay',
//         mother:'trisha',
//     }
// }
// function displayUser({firstName,lastName}){
//     console.log(`Hello my name is ${firstName}${lastName}`);
// }
// displayUser(person)




-4/////array destructuring//////

1///basic array destructuring///

// const[phy,sci,math]=[89,98,69]
// console.log(phy)
// console.log(math)

2///handling undefined elements///

// const[phy,sci,math]=[89,98]
// console.log(phy)
// console.log(math)

3///skipping elements///

// const[phy,,sci]=[70,80,90]
// console.log(phy,sci);

4///default values///

// const [name='no name',age=0 ]=[]
// console.log(name,age);

// const [name1='no name',age1=0]=["jhon",50]
// console.log(name1,age1);

5///rest syntax///

//  const [one,two,...rest]=[1,2,3,4,5,6]
//  console.log(one,two,rest);
 
6///swapping variables///

// let a=20
// let b=40;
// [a,b]=[b,a]
// console.log(a,b);

7///Nested array destructuring

// const [one,two,[three,four],five]=[1,2,[3,4],5]
// console.log(one,two,three,four,five);

8///array destructuring on functios

// function getFullName(){
//     return["vijay",'trisha'];
// }
// const[firstName,lastName]=getFullName()
// console.log(firstName,lastName);

9///on loop///

// const myTeam=[
//     ['vijay','trisha','vijaytrisha@gmail.com'],
//     ['simbu','nayan','simbunayan@email.com']
// ];
// for(let [firstName,lastName,email] of myTeam){
//     console.log(firstName,lastName,email);
    
// }



-5///Deep Copy and Swallow Copy

1///shallow Copy///

// let emp1={
//     name:'vijay',
//     company:'tvk'
// }
// let emp2=emp1
// console.log(emp1);
// console.log(emp2);

1///Deep Copy///

// let emp1={
//     name:'vijay',
//     company:'tvk'
// }
// let emp2=JSON.parse(JSON.stringify(emp1))
// emp1.name='simbu'
// console.log(emp1);
// console.log(emp2);

2///neither shallow copy nor a deep copy///

// let a=10;
// let b=a;
// console.log(b);
// console.log(a);
// a=30
// console.log(b);
// console.log(a,b);

3///Deep Copy///

//  let companydetails={
//     companyName:'nike',
//     employees:[{name:"vijay"},{name:"trisha"}]
//  }
//  let newdetails=JSON.parse(JSON.stringify(companydetails))
//  companydetails.companyName='puma'
//  companydetails.employees[0].name='simbu'
//  console.log(companydetails);
//  console.log(newdetails);
 
//  const person={
//     firstName:"mari",
//     lastName:"selvaraj",
//     age:29,
//     isAlive:true,
//     parent:{
//         father:'vijay',
//         mother:'trisha',
//     }
// }
//  newperson ={ ...person,parent:{...person.parent}}
//  person.parent.father="simbu"
//  console.log(person);
//  console.log(newperson);
 

// const person={
//     firstName:"mari",
//     lastName:"selvaraj",
//     age:29,
//     isAlive:true,
//     parent:{                        ///object destruct
//         father:'vijay',
//         mother:'trisha',
//     }
// }
// const{firstName,lastName,parent:{father,mother}}=person
// console.log(firstName,lastName);
// console.log(father);

 