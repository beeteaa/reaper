const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        // If input box is empty, give user message
        alert("You must write something!");
    }else{
        // Creates one html line using list tag
        let li = document.createElement("li");
        
        // List tag is filled with user input
        li.innerHTML = inputBox.value;
        
        // Display input, display in list container 
        //(list-container) in html
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    // clears input box after adding task
    inputBox.value = "";

    // save data after every change
    saveData();
}

// click function
listContainer.addEventListener
("click", function(e)
    {
        // sees where user clicks (checked or unchecked)
        // checked function
        if(e.target.tagName === "LI"){
            // checks class name
            e.target.classList.toggle("checked");
            // save even when tasks are deleted
            saveData()
        }
        // delete function, removes task from list
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false
);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();







