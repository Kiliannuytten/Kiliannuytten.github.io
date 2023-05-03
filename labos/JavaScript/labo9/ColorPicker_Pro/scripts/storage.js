const global = {
    swatches: []
}

const storeSliderValues = () => {
    let sliderValues = {}; //obhject om slidervalues op te slaan
    let settingsJSON;

    sliderValues.sldRed = parseInt(document.getElementById("sldRed").value);
    sliderValues.sldGreen = parseInt(document.getElementById("sldGreen").value);
    sliderValues.sldBlue = parseInt(document.getElementById("sldBlue").value);

    settingsJSON = JSON.stringify(sliderValues);
    localStorage.setItem("sliderValues", settingsJSON);
};

const restoreSliderValues = () => {
    let sliderValues;
    let settingJSON = localStorage.getItem("sliderValues");

    if (settingJSON !== null) {
        sliderValues = JSON.parse(settingJSON);

        document.getElementById("sldRed").value = sliderValues.sldRed;
        document.getElementById("sldGreen").value = sliderValues.sldGreen;
        document.getElementById("sldBlue").value = sliderValues.sldBlue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    // let colors = {};
    // let settingsJSONColors;
    // let settingsJSON;
    //
    // colors.red = parseInt(document.getElementById("sldRed").value);
    // colors.green = parseInt(document.getElementById("sldGreen").value);
    // colors.blue = parseInt(document.getElementById("sldBlue").value);
    //
    // global.swatches.push(colors);
    // console.log(global.swatches.length);
    // settingsJSON = JSON.stringify(global.swatches);
    // localStorage.setItem("swatches", settingsJSON);

    // ********************************************* OPLOSSING DOCENT *****************8

    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");
    for(let i = 0; i < swatches.length; i++){
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue"),
        };
        rgbColors.push(rgb);
    }

    let JSONText = JSON.stringify(rgbColors);
    localStorage.setItem("colorpicker.swatches",JSONText);
};

const restoreSwatches = () => {
    let swatchColors;
    let settingsJSON = localStorage.getItem("colorpicker.swatches");
    if (settingsJSON !== null) {
        swatchColors = JSON.parse(settingsJSON);
        for (let i = 0; i < swatchColors.length; i++) {

            addSwatchComponent(swatchColors[i].sldRed,swatchColors[i].sldGreen,swatchColors[i].sldBlue);
        }
    }


};
