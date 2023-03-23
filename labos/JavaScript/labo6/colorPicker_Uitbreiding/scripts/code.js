const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update)
    }
    update();

    document.getElementById("btnSave").addEventListener("click", save);
}

const save = () => {
    let swatchComponents = document.getElementById("swatchComponents")
    // SWATCH MAKEN
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
}

const buildSwatchComponent = () => {
    let swatch = document.createElement("div");

    //KLEUREN VERKRIJGEN
    let red = getRedSlider();
    let green = getGreenSlider();
    let blue = getBlueSlider();
    // //KLEUR GEVEN AAN SWATCH
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    swatch.setAttribute("data_red",getRedSlider());
    swatch.setAttribute("data_green",getGreenSlider());
    swatch.setAttribute("data_blue",getBlueSlider());

    swatch.className = "swatch";
    //BUTTON MAKEN OM BUTTON TE MAKEN
    swatch.append(createButton());
    swatch.addEventListener("click", copy);
    return swatch;
}

const copy = (e) => { //KLEUR VAN SWATCH COPIEREN
    let swatchTop = document.getElementById("swatch");
    let red = e.target.getAttribute("data_red");
    let green = e.target.getAttribute("data_green");
    let blue = e.target.getAttribute("data_blue");

    swatchTop.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

const createButton = () => {    //Button op swatch maken
    let button = document.createElement("input")
    button.setAttribute("type", "button");
    button.setAttribute("value", "X");
    button.setAttribute("id", "btnRemove");
    //EVENT OM BUTTON TE REMOVEN
    button.addEventListener("click", removeSwatch)
    return button;
}

const removeSwatch = (e) => {
    e.target.parentElement.remove();
}

const update = () => {      // getallen + swatch updaten met kleur
    let red = getRedSlider();
    let green = getGreenSlider();
    let blue = getBlueSlider();

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    console.log("red = " + red + ", green = " + green + ", blue = " + blue);
}


// GET COLOR FROM SLIDER
const getRedSlider = () => {
    return  document.getElementById("sliderRed").value;;
}

const getGreenSlider = () => {
    return document.getElementById("sliderGreen").value;;
}

const getBlueSlider = () => {
    return document.getElementById("sliderBlue").value;

}

window.addEventListener("load", setup);