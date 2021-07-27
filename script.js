document.getElementById("inp").addEventListener("keypress", pressedEnter, false);
document.getElementById("0").addEventListener("click", getClickElement, false);
document.getElementById("1").addEventListener("click", getClickElement, false);
document.getElementById("2").addEventListener("click", getClickElement, false);
var id = 2;

function pressedEnter(event){
    if(event.key == "Enter"){
        addItem();
    }
}

function getClickElement(event){
    if(event.target.textContent == ""){
        removeItem(event);
    }
    else{
        crossed(event);
    }
}

function crossed(event){
    var element = document.getElementById(event.currentTarget.getAttribute('id'));
    if(element.getAttribute("class") == "crossed"){
        element.classList.remove("crossed");
    }
    else{
        element.setAttribute("class","crossed");
    }
}

function removeItem(event){
    var element = document.getElementById(event.currentTarget.getAttribute('id'));
    element.parentNode.removeChild(element);
    id--;
}
function addItem(){
    if(document.getElementById("inp").value == "" || document.getElementById("inp").value == null){
        alert("Enter something!");
    }
    else{
        var ul = document.getElementById("ulist");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = "<span><i class='fa fa-trash'></i></span>";
        id++;
        li.setAttribute("id",id);
        li.appendChild(span);
        li.appendChild(document.createTextNode(document.getElementById("inp").value));
        ul.appendChild(li);
        document.getElementById(id).addEventListener("click", getClickElement, false);
    }
}
