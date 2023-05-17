const setup = () => {
    const btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click",go);
}

const go = () => {
    const input = document.getElementById("commandoInput").value;
    const command = input.substring(0,2);
    console.log(command);
    const textInput = input.substring(3);
    console.log(textInput);
    // checken of het een juist commando is
    //console.log("command = " + rightCommand(command));
    if (checkRightCommand(command)){
        //voeg kaart toe
        const letter = command.substring(1);
        console.log(letter);
        if(letter === "g"){
            console.log("google");
            makeCardGoogle(textInput);
            const url = "https://www.google.com/search?q=" + textInput;
            window.open(url);
        }
        if(letter === "y"){
            console.log("youtube");
            makeCardYoutube(textInput);
            const url = "https://www.youtube.com/results?search_query=" + textInput;
            window.open(url);
        }
        if(letter === "t"){
            console.log("twitter");
            makeCardTwitter(textInput);
            const url = "https://twitter.com/hashtag/" + textInput;
            window.open(url);
        }
        if(letter === "i"){
            console.log("instagram")
            makeCardInstagram(textInput);
            const url = "https://www.instagram.com/explore/tags/" + textInput;
            window.open(url);
        }
    }else{
        //foutmelding geven
        alert("unvalid command");
    }
}

const checkRightCommand = (command) => {
    // heeft command een /
    // heeft command geldig teken na de / (geldig commando eindigt op een g / y / t / i
    if(!command.startsWith("/")){
        alert("no prefix '/' ");
        return false;
    }else return command.endsWith("g")
        || command.endsWith("y")
        || command.endsWith("t")
        || command.endsWith("i");
}

const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNmaeAndText("h5","card-title", title);
    let cardText = createElementWithClassNmaeAndText("p", "card-text", commandoSuffix);

    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);

}
const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}
const createElementWithClassNmaeAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const createLinkButton = (url) => {

}

const makeCardGoogle = (input) => {
    createCardAndAppend(input, "/g", "google.com")

}
const makeCardYoutube = (input) => {
    createCardAndAppend(input, "/y", "youtube.com")
}
const makeCardTwitter = (input) => {
    createCardAndAppend(input, "/t", "twitter.com")
}
const makeCardInstagram = (input) => {
    createCardAndAppend(input, "/i", "instagram.com")
}
window.addEventListener("load", setup);