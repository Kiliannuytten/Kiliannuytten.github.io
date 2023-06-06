const setup = () => {
    let li = document.querySelectorAll("li"); // <== is een array
    let idx = 0;
    console.log(li.length);
    while(idx < li.length){
        li[idx].innerHTML = window.prompt("Vul de namen in", "onbekend");
        idx++;
    }


}
window.addEventListener("load", setup);