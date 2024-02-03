var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    var id;
    var name;
    // 1 (a) Get style element by ID (hint: getElementById)
    id = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    name = id.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    if (name == "decorations.css"){
        id.setAttribute("href", "professional.css");
        localStorage.setItem("style", "professional.css");
    }
    else{
        id.setAttribute("href", "decorations.css");
        localStorage.setItem("style", "decorations.css");
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    
}   


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    var id;
    var name;
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    name = localStorage.getItem("style");
    // 2 (b) get html style element by ID
    id = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    if (name != null){
        if (name == "decorations.css"){
            id.setAttribute("href", "decorations.css");
        }
        else{
            id.setAttribute("href", "professional.css");
        }
    }
}