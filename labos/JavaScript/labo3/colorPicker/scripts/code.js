const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i<sliders.length;i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update)
    }
    restoreValues();
    update();
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
    storeValues(red,green,blue);
}
const storeValues = (red, green, blue) => {
    let color = {red: red, green: green, blue: blue};
    let settingsJSON;
    settingsJSON = JSON.stringify(color);
    localStorage.setItem("colorSlider", settingsJSON);
}
const restoreValues = () => {
    let color;
    let settingsJSON = localStorage.getItem("colorSlider");

    let swatch = document.getElementById("swatch");

    if(settingsJSON !== null){
        console.log("*********************");
        color = JSON.parse(settingsJSON);
        console.log(color);
        console.log(color.red);
        console.log(color.green);
        console.log(color.blue);
        document.getElementById("redAmount").innerHTML = color.red;
        document.getElementById("greenAmount").innerHTML = color.green;
        document.getElementById("blueAmount").innerHTML = color.blue;

        swatch.style.backgroundColor="rgb("+color.red+","+color.green+","+color.blue+")";
    }
}
window.addEventListener("load", setup);