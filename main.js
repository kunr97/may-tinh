var allNnumberButton = document.querySelectorAll(".number_button");
var renderDisplay = document.getElementById("display");
var deleteButton = document.querySelector(".delete_button");
var resultButton = document.querySelector(".result_button");
var plusButton = document.querySelector(".plus_button");
var minusButton = document.querySelector(".minus_button");
var divisionButton = document.querySelector(".division_button");
var multiplierButton = document.querySelector(".multiplier_button");
var memoryTemp;
function print(value,index){
    value.onclick = function() {
        if(renderDisplay.innerText.length < 15){
            renderDisplay.innerText = renderDisplay.innerText.concat(value.innerText);
        }
    }
}

allNnumberButton.forEach(print);

deleteButton.onclick = function(){
    lengthRender = renderDisplay.innerText.length;
    renderDisplay.innerText = renderDisplay.innerText.slice(0,lengthRender-1);
}

plusButton.onclick = function(){
    renderDisplay.innerText = renderDisplay.innerText.concat("+");
}

resultButton.onclick = function(){
    memoryTemp =  eval(renderDisplay.innerText);
    renderDisplay.innerText = memoryTemp.toPrecision(7);
    
}

minusButton.onclick = function(){
    renderDisplay.innerText = renderDisplay.innerText.concat("-");
}

divisionButton.onclick = function(){
    renderDisplay.innerText = `${renderDisplay.innerText}/`;
    
}

multiplierButton.onclick = function(){
    renderDisplay.innerText = `${renderDisplay.innerText}*`;

}

var mouseIsDown = false;

deleteButton.addEventListener('mousedown', function() {
  mouseIsDown = true;
  setTimeout(function() {
    if(mouseIsDown) {
       renderDisplay.innerText = "";
    }
  }, 1500);
});

deleteButton.addEventListener('mouseup', function() {
  mouseIsDown = false;
});
