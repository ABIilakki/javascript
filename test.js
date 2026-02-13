//string reverse

// let str="bwm is the fastest car"
// let newstr=str.split(" ")
// let reverse=newstr.reverse()
// console.log(reverse.join(" "));

let str = 'hello world';
let reverse = "";
for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse); 



