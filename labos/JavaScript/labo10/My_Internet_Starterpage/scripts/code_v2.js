const setup = () => {
    document.getElementById("btnGo").addEventListener("click", checkCommand);
    restoreCards();
}
const checkCommand = () => {
    console.log("****************CHECKCOMMAND****************");
    // input halen
    let input = document.getElementById("commandoInput").value;
    console.log("input = " + input);

    // command --> 1st 3 letters v input (want het moet een /,
    // dan een letter (g, i, t, y) en dan een spatie
    let command = input.substring(0, 3);
    console.log("Command = " + command);
    let letter = command.substring(1, 2);
    console.log("letter = " + letter);

    // de rest van de input
    let search = input.substring(3);
    console.log("Search: " + search);

    if (command.startsWith("/")) {
        if (command.endsWith(" ")) {
            console.log("Valid Command");
            switch (letter) {
                case "g":
                    console.log("****************GOOGLE****************");
                    const urlGoogle = "https://www.google.com/search?q=" + search;
                    window.open(urlGoogle);
                    makeCardGoogle(search, urlGoogle);
                    storeCard(search, urlGoogle, "google");
                    break;
                case "y":
                    console.log("****************YOUTUBE****************");
                    const urlYoutube = "https://www.youtube.com/results?search_query=" + search;
                    window.open(urlYoutube);
                    makeCardYoutube(search, urlYoutube);
                    storeCard(search, urlYoutube, "youtube");
                    break;
                case "i":
                    console.log("****************INSTAGRAM****************");
                    const urlInstagram = "https://www.instagram.com/explore/tags/" + search;
                    window.open(urlInstagram);
                    makeCardInstagram(search, urlInstagram);
                    storeCard(search, urlInstagram, "instagram");
                    break;
                case "t":
                    console.log("****************TWITTER****************");
                    const urlTwitter = "https://twitter.com/hashtag/" + search;
                    window.open(urlTwitter);
                    makeCardTwitter(search, urlTwitter);
                    storeCard(search, urlTwitter, "twitter");
                    break;
            }
        } else {
            alert("Not a valid command");
            console.log("Not a valid command");
        }
    } else {
        alert("Commando must start with '/'");
        console.log("Commando must start with '/'");
    }
}

// create a card
const createCard = (type, search, url) => {
    //card maken
    console.log("create card");
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-4");
    div.style.width = "18 rem";
    div.style.margin = "10px";

    //body maken
    console.log("create cardBody");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //title maken
    console.log("create title");
    let title = document.createElement("h5");
    title.classList.add("card-title");
    let titleNode = document.createTextNode(type);
    title.appendChild(titleNode);
    //title appenden op body
    cardBody.appendChild(title);

    //search maken op card
    console.log("create search");
    let txtCard = document.createElement("p");
    txtCard.classList.add("card-title");
    let txtCardNode = document.createTextNode(search);
    txtCard.appendChild(txtCardNode);
    //search appenden op kaart
    cardBody.appendChild(txtCard);

    //Create Link Button
    console.log("create link");
    let link = document.createElement("a");
    link.href = url;
    link.classList.add("btn");
    link.classList.add("btn-primary");
    link.target= '_blank'

    let linkTxtnode = document.createTextNode("Go!");
    link.appendChild(linkTxtnode);
    //link appenden op body
    cardBody.appendChild(link);

    //body appenden op card
    div.appendChild(cardBody);

    return div;
}
// kaarten aanmaken
const makeCardGoogle = (search, url) => {
    console.log("*****************MAKECARD GOOGLE***************")
    let card = createCard("google", search, url);
    card.classList.add("google-card");
    document.getElementsByClassName("row").item(0).appendChild(card);

}
const makeCardYoutube = (search, url) => {
    console.log("*****************MAKECARD YOUTUBE***************");
    let card = createCard("youtube", search, url);
    card.classList.add("youtube-card");
    document.getElementsByClassName("row").item(0).appendChild(card);
}
const makeCardInstagram = (search, url) => {
    console.log("*****************MAKECARD Instagram***************")
    let card = createCard("instagram", search, url);
    card.classList.add("instagram-card");
    document.getElementsByClassName("row").item(0).appendChild(card);
}
const makeCardTwitter = (search, url) => {
    console.log("*****************MAKECARD Twitter***************")
    let card = createCard("twitter", search, url);
    card.classList.add("twitter-card");
    document.getElementsByClassName("row").item(0).appendChild(card);
}

//kaarten oplsaan
const storeCard = (search, url, type) => {
    let card = {
        search: search,
        url: url,
        type: type
    }
    // wanneer er nog geen cards gestored zijn --> een lijst maken
    // anders haal je de kaarten op en push je en nieuwe kaart erin
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));
}

//kaarten terug ophalen wnr pagina refreshed word
const restoreCards = () => {
    // kaarten ophalen
    let storedCards = JSON.parse(localStorage.getItem("cards")) || [];

    storedCards.forEach((card) => {
        switch (card.type) {
            case "google":
                makeCardGoogle(card.search, card.url);
                break;
            case "youtube":
                makeCardYoutube(card.search, card.url);
                break;
            case "instagram":
                makeCardInstagram(card.search, card.url);
                break;
            case "twitter":
                makeCardTwitter(card.search, card.url);
                break;
            default:
                break;
        }
    });
};
window.addEventListener("load", setup);