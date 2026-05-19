

// project 1      
let input = document.getElementById("input");
let text = document.getElementById("text");

let todos=JSON.parse(localStorage.getItem("todos")) ||[];
todos.forEach(data1 => displayData1(data1) );
console.log(todos)

function data1btn(){
    if(input.value.trim() ==""){
alert("please write here ");
return;

}
setTimeout(()=>{

location.reload();

},1000);



todos.push(input.value)
localStorage.setItem("todos",JSON.stringify(todos));
displayData1(input.value);
input.value="";

}

function displayData1(data1){

let li = document.createElement("li");
li.innerHTML=`${data1} <button id ="delete1">Delete</button>`;
text.appendChild(li);
li.classList.add("li");





li.querySelector("#delete1").addEventListener("click",()=>{

    // li ke andar jo text hai (button ke bina)
    let todoText = li.firstChild.textContent.trim();

    // Array me se wo todo hata do
    todos = todos.filter(t => t !== todoText);
    
    localStorage.setItem("todos",JSON.stringify(todos));
    li.remove();
// location.reload();
})



}


input.addEventListener("keydown",(e1)=>{
if(e1.key==="Enter"){
e1.preventDefault();
data1btn();

}


})



