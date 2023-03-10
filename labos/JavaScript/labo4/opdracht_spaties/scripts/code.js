const setup = () => {
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", change)
}

const change = () => {
    let txtString = document.getElementById("txtString");
    let result = maakMetSpaties(txtString);
    console.log(result);
}

const maakMetSpaties = (inputText) =>{
    let result = inputText.value;
    let txtOutput = "";
    for (let i = 0; i<result.length;i++) {
            txtOutput += result.charAt(i) + " ";
    }
    return txtOutput;
}
window.addEventListener("load", setup);