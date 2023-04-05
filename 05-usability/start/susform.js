document.querySelector("#susForm")
  .addEventListener("submit",(event) => {
  event.preventDefault();
  let q1 = document.querySelector("#q1").value;
  let q2 = document.querySelector("#q2").value;
  let q3 = document.querySelector("#q3").value;
  let q4 = document.querySelector("#q4").value;
  let q5 = document.querySelector("#q5").value;
  let q6 = document.querySelector("#q6").value;
  let q7 = document.querySelector("#q7").value;
  let q8 = document.querySelector("#q8").value;
  let q9 = document.querySelector("#q9").value;
  let q10 = document.querySelector("#q10").value;
  console.log(q1);
  console.log(q2);
  console.log(q3);
  console.log(q4);
  console.log(q5);
  console.log(q6);
  console.log(q7);
  console.log(q8);
  console.log(q9);
  console.log(q10);
  
  
q1 -= 1;
q3 -= 1;
q5 -= 1;
q7 -= 1;
q9 -= 1;
q2 = 5 - q2;
q4 = 5 - q4;
q6 = 5 - q6;
q8 = 5 - q8;
q10 = 5 - q10;
let answer = (q1+q2+q3+q4+q5+q6+q7+q8+q9+q10)*2.5;
document.querySelector("#answer").value = answer;
console.log(answer);
});
