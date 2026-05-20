
// project4


let input4 = document.getElementById("input4");
let nbr4 = document.querySelectorAll(".nbr4");
let btnclear4 = document.querySelector(".btnclear4");
let btnequal4 = document.querySelector(".btnequal4");



// safe calculator function
function s(p) {
  return Function('"use strict"; return (' + p + ')')();
}

// number aur operator buttons kaam karein
nbr4.forEach(btn4 =>{
  btn4.addEventListener("click",()=>{
    input4.value += btn4.innerText;
  });
});

// clear button
btnclear4.addEventListener("click",()=>{
  input4.value = "";
})

// equal button
btnequal4.addEventListener("click", ()=>{
  try {
    input4.value = s(input4.value); 
  } catch {
    input4.value = "Error";
  }
});
