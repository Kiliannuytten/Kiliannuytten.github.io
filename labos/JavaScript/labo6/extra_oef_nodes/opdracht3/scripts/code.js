const setup = () => {
    document.getElementById("btnAppendP").addEventListener("click",creat);
}
const creat = () => {
    let para = document.createElement("p");
    let t = document.createTextNode("This is a paragraph");
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}
window.addEventListener("load", setup);