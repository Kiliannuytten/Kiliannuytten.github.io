let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 4,
    TOTAL_CARDS: 8,
    PREFIX: "images/",
    SUFFIX: ".png",
    FOUND: 0,
    TURNED: false,
    KAARTEN: [],
    CLICKCOUNT: 0,
    KAART1_ID: 0,
    KAART2_ID: 0,
    AANTAL_JUIST: 0

}
const setup = () => {
    let speelveld = document.getElementById("speelveld");
    vulKaarten();
    shuffle();
    for (let i = 0; i < global.TOTAL_CARDS * 2; i++) {
        let img = document.createElement("img");
        img.src = global.PREFIX + "achterkant" + global.SUFFIX;
        img.alt = "questionmark";
        img.id = global.KAARTEN[i];
        img.classList.add("achterkant");
        img.addEventListener("click", showCard);
        speelveld.appendChild(img);
    }
}
const vulKaarten = () => {      // kaarten array vullen
    for (let i = 1; i <= global.TOTAL_CARDS; i++) {
        global.KAARTEN.push(i);
        global.KAARTEN.push(i);
    }
}
const shuffle = () => {     // id kaarten shuffle zodat ze er random in zitten en zo kan geven naar een kaart id
    global.KAARTEN.sort(() => Math.random() - 0.5);
    console.log(global.KAARTEN);
}

const showCard = (e) => {
    global.CLICKCOUNT++;
    let id = e.target.id;
    console.log(id);

        if (global.CLICKCOUNT <= 2) {
            e.target.src = global.PREFIX + "card" + id + global.SUFFIX;     // kaarten draaien tot er 2 gedraaid zijn
            e.target.classList.remove("achterkant");
            e.target.classList.add("voorkant");

            if (global.CLICKCOUNT === 1) {                      // 1ste gedraaide kaart hierin stekem
                global.KAART1_ID = e.target;
            } else {

                global.KAART2_ID = e.target;                          // 2de gedraaide kaart hierin steken


                console.log("kaart 1: " + global.KAART1_ID.id +
                    "\nkaart 2: " + global.KAART2_ID.id);

                compare(global.KAART1_ID, global.KAART2_ID);    // gaan vergelijken als het dezelfde kaarten zijn
            }
        }
}

const compare = (card1, card2) => {
    if(card1.id === card2.id){
        console.log("DEZELFDE KAART");
        global.AANTAL_JUIST ++;

        card1.classList.add("juist");   // groene border geven
        card2.classList.add("juist");

        setTimeout(function(){juist(card1, card2)}, 1000);

        if(global.AANTAL_JUIST === global.TOTAL_CARDS){
            setTimeout(einde, 500);
        }

    }else {     // kaarten terugdraaien
        console.log("NIET DEZELFDE KAART");
        card1.classList.add("fout");
        card2.classList.add("fout");

        setTimeout(function(){draaiterug(card1, card2)}, 1000);
        
    }

    global.CLICKCOUNT =0; //clickcount resetten
}
const draaiterug = (card1, card2) => {
    card1.src = global.PREFIX + "achterkant" + global.SUFFIX;
    card2.src = global.PREFIX + "achterkant" + global.SUFFIX;

    card1.classList.remove("voorkant");
    card1.classList.add("achterkant");

    card2.classList.remove("voorkant");
    card2.classList.add("achterkant");

    card1.classList.remove("fout");
    card2.classList.remove("fout");
}

const juist = (card1, card2) => {
    card1.style.visibility = "hidden";   //kaarten laten verdwijen
    card2.style.visibility = "hidden";


}

const einde = () => {
    alert("CONGRATS, you have finally one this game");
}
window.addEventListener("load", setup);