const setup = () => {
    let products = document.getElementsByClassName("aantal");
    for(let i = 0; i<products.length;i++){
        products[i].addEventListener("change", calc);
    }
}

const  calc = () => {

}
window.addEventListener("load", setup);