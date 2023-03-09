const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //Event-based programming
    //btnTry.addEventListener("mouseover", mouseHover);
    // je kan ook een funtcie in een eventlistener schrijven ==> naamloze functies
    btnTry.addEventListener("mouseover", () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
    });
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}


/*
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}
*/
const onClick = () => {
    document.getElementById("event").innerHTML += "MouseClicked!<br>";
}

const mouseOut = () => {
    document.getElementById('event').innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {
    // VANAF DAT JE GETELEMENTBYTAGNAME WORD HET EEN ARRAY !!!
    let listItems = document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++){
        /*
        //1ste manier       <-- NOOIT GEBRUIKEN
        listItems[i].style.listStyleType='none';
        listItems[i].style.backgroundColor="red";

        //2de manier, beter en overzichtelijker
        listItems[i].className="listItemsStyleNone colorRed";
        */
        //3de manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output " + listItems[i].className);
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++){
        /*
        listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";

        listItems[i].className="listItemsStyleDisc colorWhite";
        */
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("colorRed");
        listItems[i].classList.add('listItemsStyleNone');
    }
}

const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);