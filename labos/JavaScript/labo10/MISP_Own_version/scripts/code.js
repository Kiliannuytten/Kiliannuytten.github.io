let global = {
    cards : []
}
const setup = () => {
    console.log("****** Setup ******")
    document.getElementById("btnGo").addEventListener("click", go);

    restoreCards();
}
const go = () => {
    console.log("****** GO ******");
    //input van gebruiker krijgen
    let input = document.getElementById("commandoInput").value;
    // command uithalen van input en het controleren, waarde true of valse in variable steken
    // letter meegeven om te kijken of het juiste letter is
    let command = input.substring(0,3);
    let letter = command.substring(1,2);
    console.log(letter);
    let validCommand = checkValidCommand(command, letter);
    console.log(validCommand);

    let search = input.substring(3);
    console.log(search);
    if(validCommand){
        // kijken welke kaart we moeten maken
        whatCard(letter, search);
    }

}
const whatCard = (letter, search) => {
    console.log("****** WHAT CARD ******");
    let url;
    let title;
// werken met een switch om een kaart te maken
    switch (letter){
        case "g":   // maak kaart google
            console.log("****** GOOGLE ******");
            url = "https://www.google.com/search?q="+search;
            title = "google";
            makeCard(url, title, search);
            window.open(url);
            break
        case "y":   // maak kaart youtube
            console.log("****** YOUTUBE ******");
            url = "https://www.youtube.com/results?search_query=" + search;
            title = "youtube";
            makeCard(url,title,search);
            window.open(url);
            break
        case "t":   // maak kaart twitter
            console.log("****** TWITTER ******");
            url = "https://twitter.com/hashtag/" + search;
            title = "twitter";
            makeCard(url,title,search);
            window.open(url);
            break
        case "i":   // maak kaart instagram
            console.log("****** INSTAGRAM ******");
            url = "https://www.instagram.com/explore/tags/" + search;
            title = "instagram";
            makeCard(url,title, search);
            window.open(url);
            break

    }
}
const makeCard = (url, title, search) => {
    let history = document.getElementsByClassName("row");
    console.log("****** MAKE CARD " + title + " ******");
    // maak kaart aan
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-4");
    card.style.width = "18 rem";
    card.style.margin = "10px";
    //kaart body maken
    let body = createBody();
    //title appenden
    body.appendChild(createTitle(title));
    //search appenden
    body.appendChild(createSearch(search));
    //button go appenden
    body.appendChild(createButtonGo(url));
    // btn remove appenden
    //body.appendChild(createButtonRemove())
    //body appenden aan kaart
    card.appendChild(body);
    //kleur geven aan kaart
    card.classList.add(title +"-card");
    //kaart appenden aan history
    history.item(0).appendChild(card);
    //kaart toevoegen aan array

    //store de kaarten
    storeCard(url, search, title);
}
const storeCard = (url, search, title) => {
    console.log("****** STORE CARD ******");

    let card = {
        url: url,
        search: search,
        title: title
    }
    console.log(card)
    global.cards.push(card);
    let cardsJSON = JSON.stringify(global.cards);
    localStorage.setItem("Nuytten_Kilian_Cards",cardsJSON);
}
const restoreCards = () => {
    let storedCards = JSON.parse(localStorage.getItem("Nuytten_Kilian_Cards"));
    console.log(storedCards);
    let url;
    let search;
    let title;
    if(storedCards !== null){
        for(let i = 0; i<storedCards.length;i++){
            url = storedCards[i].url;
            search = storedCards[i].search;
            title = storedCards[i].title;
            makeCard(url, title, search);
        }
    }
}
const createBody = () => {
    console.log("****** Create body ******");
    let body = document.createElement("div");
    body.classList.add("card-body");
    return body;
}
const createTitle = (title) => {
    console.log("****** Create Title ******");
    title = title.toUpperCase();
    let cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    let titleNode = document.createTextNode(title);
    cardTitle.appendChild(titleNode);
    return cardTitle;
}
const createSearch = (search) => {
    console.log("****** Create search ******");
    let body = document.createElement("p");
    let searchNode = document.createTextNode(search);
    body.appendChild(searchNode);
    return body;
}
const createButtonGo = (url) => {
    console.log("****** Create Button Go ******");
    let link = document.createElement("a");
    link.setAttribute("href",url);
    link.classList.add("button");
    link.classList.add("btn-primary");
    link.target= '_blank';

    let linkNode = document.createTextNode("!Go");
    link.appendChild(linkNode);

    return link;
}
// const createButtonRemove = () => {
//     console.log("****** Create Button Remove ******");
//
//     let button = document.createElement("button");
//     button.setAttribute("id", "btnRemove");
//     button.textContent = "Remove Card"; // Set the text content of the button
//     button.addEventListener("click", removeCard);
//     return button;
// }
// const removeCard = (event) => {
//     console.log("****** Remove Card ******");
//     let card = event.target.parentNode.parentNode; // Traverse up the DOM to the card element
//     card.parentNode.removeChild(card); // Remove the card from its parent node (history)
//     const index = global.cards.indexOf(card); // Find the index of the card in the global.cards array
//     if (index > -1) {
//         global.cards.splice(index, 1); // Remove the card from the global.cards array
//     }
//     storeCard();
// }

const checkValidCommand = (command, letter) => {
    console.log("****** CHECK COMMAND ******")

    if(command.startsWith("/")){
        if(letter.localeCompare("y") === 0|| letter.localeCompare("t") === 0||
            letter.localeCompare("i") === 0|| letter.localeCompare("g") === 0){
            if(command.endsWith(" ")){
                console.log("right command");
                return true;
            }else{
                console.log("invalid command");
                alert("invalid command");
                return false;
            }
        }else{
            console.log("wrong letter for command");
            alert("wrong letter for command");
            return false;
        }
    }else{
        alert("Command has to start with '/'");
        console.log("Command has to start with /");
        return false;
    }
}
window.addEventListener("load", setup);