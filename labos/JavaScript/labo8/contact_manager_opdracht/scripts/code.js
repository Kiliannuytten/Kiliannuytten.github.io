let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();

    let persoon = {};
    //nieuw persoon bewaren
    vulPersoonOpBasisVanUserInterface(persoon);
    personen.push(persoon); //toevoegen aan interface
    voegPersoonToeAanLijstInUserInterface(persoon);

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let voornaam = document.getElementById("txtVoornaam").value.trim();
    let familienaam = document.getElementById("txtFamilienaam").value.trim();
    let geboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
    let email = document.getElementById("txtEmail").value.trim();
    let aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

    persoon.Voornaam = voornaam;
    persoon.Familienaam = familienaam;
    persoon.Geboortedatum = geboortedatum;
    persoon.Email = email;
    persoon.AantalKinderen = aantalKinderen;
    console.log(persoon.toString());

};

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    //let textNode = document.createTextNode(persoon.Voornaam + " " + persoon.Familienaam);
    option.text = persoon.Voornaam + " " + persoon.Familienaam;
    option.value = persoon.Email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = persoon.length - 1;


}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";


    //let inputElem = document.querySelectorAll('imput[type=text]');

    // inputElem.forEach((elem) => {
    //     elem.value=""
    // };

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);