const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i<sliders.length;i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update)
    }
    update();

    document.getElementById("btnSave").addEventListener("click",save);
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
    let red = document.getElementById("sliderRed").value;  //INPUT ALWAYS VALUE
    let green = document.getElementById("sliderGreen").value;
    let blue = document.getElementById("sliderBlue").value
    //KLEUR GEVEN AAN SWATCH
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    swatch.className = "swatch";
    //BUTTON MAKEN OM BUTTON TE MAKEN
    swatch.append(createButton());

    swatch.addEventListener("click",copy);
    return swatch;
}

const copy = (r,g,b) => { //KLEUR VAN SWATCH COPIEREN
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+r+","+g+","+b+")";
}

const createButton = () => {
    let button = document.createElement("input")
    button.setAttribute("type", "button");
    button.setAttribute("value","X");
    button.setAttribute("id","btnRemove");
    //EVENT OM BUTTON TE REMOVEN
    button.addEventListener("click", removeSwatch)
    return button;
}

const removeSwatch = (e) => {
    e.target.parentElement.remove();
}

const update = () => {
    let red = document.getElementById("sliderRed").value;  //INPUT ALWAYS VALUE
    let green = document.getElementById("sliderGreen").value;
    let blue = document.getElementById("sliderBlue").value

    document.getElementById("redAmount").innerHTML = red;
    document.getElementById("greenAmount").innerHTML = green;
    document.getElementById("blueAmount").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

    console.log("red = " + red + ", green = " + green + ", blue = " + blue);
}

window.addEventListener("load", setup);