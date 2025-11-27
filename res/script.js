// Function for creating element inside the box 
function elementInBox(value){
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = value;
    document.getElementById("bogo").appendChild(box);
}



elements = 5
for (i = 0; i < elements; i++){
    elementInBox(i+1);
}
