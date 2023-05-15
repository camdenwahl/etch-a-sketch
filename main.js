


// Default the grid space for drawing.
createCanvas(16);


// Creates the grid and assigns it to a class.
function createCanvas(loopC){
    let loopCount = loopC * loopC;

    let allDivs = document.querySelectorAll('.individual-div');
    allDivs.forEach((divEle) =>{
        divEle.remove();
    });
    for (let i = 0; i < loopCount; i++) {
        let onePixel = document.createElement("div");
    const mainDiv = document.getElementById("container");
    mainDiv.classList.add("sub-div");
    onePixel.classList.add('individual-div');
    mainDiv.appendChild(onePixel);
    grabActivity();
    }
}


// Selects the class and iterates through all elements to assign event listeners.
function grabActivity(){
    let partBox = document.querySelectorAll('.individual-div');
    partBox.forEach(box => {
        box.addEventListener('mouseover', function handleClick(event){
            box.setAttribute('style', 'background-color: black;');
        });
        box.addEventListener('mouseout', function handleClick(event){
            box.setAttribute('style', 'background-color: azure;');
        });
    });
}


let buttonSquare = document.getElementById("btn-square");
buttonSquare.addEventListener('click', promptUser);

function promptUser(){
    let squareValue = prompt("Enter your canvas size:");
    if (squareValue > 24){
        alert("Please enter a value lower than 24.");
        let squareValue = prompt("Enter your canvas size:");
    }
    else if (squareValue < 24){
        squareValue = parseInt(squareValue);
        createCanvas(squareValue);
        grabActivity();
    }
}