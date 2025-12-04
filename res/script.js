function changeBtn(sorted, parent){
    let btnID = parent + "Btn";
    let btn = document.getElementById(btnID);
    if (sorted) {
        btn.classList.add("arrSortedBtn");
        btn.innerHTML = "Sorted";
    } else{
        btn.classList.remove("arrSortedBtn");
        btn.innerHTML = "Press to sort";
    }
}

function arrSorted(parent, length){
    let sorted = true;
    for (i = 1; i < length; i++){
        let previousElement = document.getElementById(parent + "Box" + (i))
        let currentElement = document.getElementById(parent + "Box" + (i+1))
        if (currentElement.innerHTML < previousElement.innerHTML){
            sorted = false;
        }
    }
    changeBtn(sorted, parent);
}

function bogoSort(){
    let parent = "bogo";
    let arr = numbers.slice();
    let arrLength = arr.length;

    // Reorder the elements
    for (i = 0; i < arrLength; i++){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let value = arr.splice(randomIndex, 1);
        let currentElement = document.getElementById(parent + "Box" + (i + 1));
        currentElement.innerHTML = value;
    }
    arrSorted(parent, arrLength);
}

function sleepsort(){
    let parent = "sleep";
    let arr = [5, 7, 3, 1];
    // reset the values
    for (i = 0; i < arr.length; i++){
        let el = document.getElementById(parent + "Box" + (i + 1));
        el.innerHTML = "x";
    }
    // Sort the array
    let boxNumber = 1;
    for (i = 0; i < arr.length; i++){
        let number = arr[i];
        setTimeout(() =>{
            let el = document.getElementById(parent + "Box" + boxNumber);
            el.innerHTML = number;
            boxNumber++;
    }, number * 1000);
    }
}

numbers = [4, 1, 3, 2];
