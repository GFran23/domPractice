let form = document.querySelector("form");
let allElements = document.querySelectorAll('div');
addClicks(allElements);

function addClicks(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', changeColor);
        
        }
        
    }

function changeColor(e){
    console.log(e.target.innerHTML);
    document.body.style.color = `${e.target.innerHTML}`;
}
  
function myFunction() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode("Hot Sauce");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
  }