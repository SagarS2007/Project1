const inputbox = document.getElementById("inputbox")
const listcontainer = document.getElementById("list-con")
let addClick = () => {
    // if the box is empty!
    if (inputbox.value === "") {
        alert("Enter Your Task First!");
    }
    else {
        // in this creating an li,  adding the input value which is our task ib in inner html of the list we made and the appending it into the container
        let list = document.createElement("li");
        list.innerHTML = inputbox.value;
        listcontainer.appendChild(list);
        let cross = document.createElement("span");
        cross.innerHTML = "☠️";// this will clear the task
        list.appendChild(cross)
    }
    // this will clear the input box after entering the task
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

  const saveData= ()=>{
    //what ever data we will have will be stored inside this data and it will use the local storage of Browser
     localStorage.setItem("data", listcontainer.innerHTML)
  }
  //this function is to display the saved data
  const displayData= ()=>{
    listcontainer.innerHTML = localStorage.getItem("data");
  }
  displayData();