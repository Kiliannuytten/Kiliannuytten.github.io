const setup = () => {
    let li = document.querySelectorAll("li");
    let image = document.createElement("img");
    image.setAttribute("src","images/joel_tlou.jpg")
    image.setAttribute("alt","joel");
    for(let i = 0; i<li.length; i++){
        li[i].className = "listitem";
        li[i].style.color = "red";

    }
    document.querySelector("body").append(image);
}


window.addEventListener("load", setup);