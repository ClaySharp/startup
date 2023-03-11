let author = 'Guest User';
let title  = 'Poem';
let poem   = 'FIXME';

function parseData() {
    poemObject = JSON.parse(window.localStorage.getItem('fullPoemInfo'));
    const holder = Object.values(poemObject);
    author = holder[0];
    title  = holder[1];
    poem   = holder[2];
    window.localStorage.clear();
}

function createList() {
    parseData();

    const element_1 = document.getElementById("first-div");
    const element_2 = document.getElementById("second-div");
    if (element_1 !== null || element_2 !== null) {
        element_1.remove();
        element_2.remove();
    }

    const listElement = document.createElement("li");
    listElement.setAttribute("id", "test")
    listElement.classList.add("test");

    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("onclick", `generatePoem()`);
    anchorElement.innerHTML = title;

    listElement.appendChild(anchorElement);
    const output = document.getElementById("output");
    output.appendChild(listElement);
}

function generatePoem() {
    const element = document.getElementById("test");
    element.remove();

    const pElement = document.createElement("p");
    pElement.innerHTML = formatPoem();

    const divElement_1 = document.createElement("div");
    divElement_1.setAttribute("id", "first-div");
    divElement_1.style.marginBottom = "2em";
    divElement_1.appendChild(pElement);

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "submit");
    buttonElement.setAttribute("onclick", `createList()`);
    buttonElement.setAttribute("class", "btn btn-primary");
    buttonElement.innerHTML = "Back";


    const divElement_2 = document.createElement("div");
    divElement_2.setAttribute("id", "second-div");
    divElement_2.appendChild(buttonElement);

    const output = document.getElementById("output");
    output.appendChild(divElement_1);
    output.appendChild(divElement_2);

    //document.getElementById("output").appendChild(pElement);
}

function getPoetry() {
//window.localStorage.clear();
let returnVal = localStorage.getItem('fullPoemInfo') ?? 'No New Poetry';
window.localStorage.removeItem('fullPoemInfo');
return returnVal;
}

function formatPoem() {
    let newText1 = "Added By: " + author;
    let newText2 = newText1.concat("<br><br>", poem);
    let newText3 = newText2.replace(/\n/g, "<br>");
    return newText3;
}

function formatTitle() {
    const anchorElement = document.createElement("a");
}



