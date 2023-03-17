const setup = () => {
    document.getElementById("btnChange").addEventListener("click", change)


}

const change = (e) => {
    let p = document.querySelectorAll("p")[0];
    y = p.childNodes[0];
    p.removeChild(y);
    let textNode = document.createTextNode("Good job!");
    p.appendChild(textNode);
}
window.addEventListener("load", setup);