const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i<sliders.length;i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update)
    }
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
}

window.addEventListener("load", setup);