let str = "bmw is my favourite best car.cricket is my favourite and best game"

let newstr = str.split(".")
// console.log(newstr);

let str1 = newstr[0]
// console.log(str1.toUpperCase()+"."+newstr[1])

let str2 = newstr[0].toUpperCase()
// console.log(str2);

let str3 = str2.split(" ")
// console.log(str3);

let str4 = str3[0].toLowerCase()
// console.log(str4);

let str5 = str3[str3.length-1].toLowerCase()
// console.log(str5)
 
let str6 = str4 + " "+str3.slice(1,-1).join(" ")+ " "+str5
// console.log(str6+"."+newstr[1]);

let str7 = newstr[1].split(" ")
// console.log(str7)

let str8 = str7[0].toUpperCase()
// console.log(str8);

let str9 = str7[str7.length-1].toUpperCase()
// console.log(str9);

let str10 = str8+" "+str7.slice(1,-1).join(" ")+" "+str9
// console.log(str10)

let str11 = str6 + "." + str10
// console.log(str11);

let str12 = str11.split(".")
// console.log(str12);

let str13 = str12[0]
// console.log(str13);

let str14 = str13.split(" ")
// console.log(str14);


let firstword = str14[0]
str14[0] = firstword.charAt(0).toUpperCase() + firstword.slice(1,-1) + firstword.charAt(firstword.length - 1).toUpperCase()

let lastword = str14[str14.length - 1]
str14[str14.length - 1] = lastword.charAt(0).toUpperCase() + lastword.slice(1,-1) + lastword.charAt(lastword.length -1).toUpperCase()

let str15 = str14.join(" ")
let str16 = str15 + "." +str12[1] 
// console.log(str16);

let str17 = str12[1].split(" ")
// console.log(str17);

let fword = str17[0]
str17[0] = fword.charAt(0).toLowerCase() + fword.slice(1,-1) + fword.charAt(fword.length - 1).toLowerCase() 

let lword = str17[str17.length -1]
str17[str17.length -1] = lword.charAt(0).toLowerCase()+ lword.slice(1,-1) + lword.charAt(lword.length -1).toLowerCase()

let str18 = str17.join(" ")
let str19 = str15 +"."+str18
console.log(str19);







// let str14 = str13.slice(0,23) + str13.charAt(23).toUpperCase()+str13.slice(24)
// console.log(str14);

// let str15 = str14.slice(0,25) + str14.charAt(25).toUpperCase()+str14.slice(26)
// console.log(str15);

// let str16 = str15.slice(0,27) + str15.charAt(27).toLowerCase()+str15.slice(28)
// console.log(str16);

// let str17 = str16.slice(0,33) + str16.charAt(33).toLowerCase()+str16.slice(34)
// console.log(str17);

// let str18 = str17.slice(0,51) + str17.charAt(51).toLowerCase()+str17.slice(52)
// console.log(str18);

// let str19 = str18.slice(0,54) + str18.charAt(54).toLowerCase()+str18.slice(55)
// console.log(str19);













 



