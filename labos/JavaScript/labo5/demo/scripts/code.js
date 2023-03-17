const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change);
    document.getElementById("imgPhoto").addEventListener("click", smash);

}

const change = () => {
    let txt = document.getElementById("txtText");

    let txtNew = "A cute cat"
    txt.innerHTML = txtNew;

    let getPhoto = document.getElementById("imgPhoto");
    getPhoto.src = "images/cat.jpg";
    getPhoto.alt = "cat";
    getPhoto.classList.remove("normal");
    getPhoto.className("bigger");

}

const  smash = () => {
    let txt = document.getElementById("txtText");

    let txtNew = "Dog Smashed"
    txt.innerHTML = txtNew;

    let getPhoto = document.getElementById("imgPhoto");
    getPhoto.src = "images/dog_smashed.jpg";
    getPhoto.alt = "dog smashed";
}

window.addEventListener("load", setup);