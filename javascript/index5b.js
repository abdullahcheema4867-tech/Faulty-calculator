// video 59
// making calculator

let random=Math.random()
let a = prompt("enter first number");
let b =prompt("enter second number");
 let c = prompt("enter operator");

 let obj={
 "+":"-",
 "*":"+",
 "-":"/",
 "/":"**",
 }
if(random >0.1)
{
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c=obj[c]
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`);
}