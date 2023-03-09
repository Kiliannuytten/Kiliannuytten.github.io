const setup = () => {
    let btnSubString = document.getElementById("btnSubstring");
    btnSubString.addEventListener("click", txtSubstring)
}

const txtSubstring = () => {
    let txtInput = document.getElementById("txtInput").value;
    let nmbInputMin = document.getElementById("nmbInputMin").value;
    let nmbInputMax = document.getElementById("nmbInputMax").value;

    let txtInputSubstring = txtInput.substring(nmbInputMin, nmbInputMax);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = txtInputSubstring;
    console.log(txtInputSubstring);
}
window.addEventListener("load", setup);