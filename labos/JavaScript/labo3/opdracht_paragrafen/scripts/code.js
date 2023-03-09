const setup = () => {
    let classBelangrijk = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < classBelangrijk.length; i++){
        classBelangrijk[i].className += "opvallend";
    }
}
window.addEventListener("load", setup);