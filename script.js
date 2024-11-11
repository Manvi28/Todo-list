

function addtask(){
    const inputbox = document.getElementById("inputbox");
    const tasks = document.getElementById("tasks");
    if(inputbox.value ===''){
        alert("you must write something");
    } 
    else {
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();

}
tasks.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showTask(){
     tasks.innerHTML=localStorage.getItem("data");
}
showTask();