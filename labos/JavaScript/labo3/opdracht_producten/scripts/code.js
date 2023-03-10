const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", calc)
}

const  calc = () => {

    //get prijs van product
    let txtPrijzen = document.getElementsByClassName("bedrag");

    //get input van aantal producten
    let txtAantal = document.getElementsByClassName("aantal");

    // get btw van product
    let txtBtw = document.getElementsByClassName("btw");

    //get subtotaal
    let txtSubtotaal = document.getElementsByClassName("subtotaal");

    let totaal = 0.0;

    for(let i = 0; i<txtAantal.length;i++){
        let aantal = parseFloat(txtAantal[i].value);
        console.log("aantal: " + aantal);
        let prijs = parseFloat(txtPrijzen[i].innerHTML);
        console.log("prijs: " + prijs);
        let btw = parseFloat(txtBtw[i].innerHTML);
        console.log("btw: " + btw)

        let subtotaal = (prijs + (prijs * (btw/100))) * aantal;
        console.log("subtotaal: " + subtotaal);
        subtotaal = subtotaal.toFixed(2);
        subtotaal = parseFloat(subtotaal);

        txtSubtotaal[i].innerHTML = subtotaal + " EUR";
        totaal += subtotaal;
    }
    totaal = totaal.toFixed(2);
    totaal = parseFloat(totaal);
    document.getElementById("totaal").innerHTML = totaal + " EUR"
}
window.addEventListener("load", setup);