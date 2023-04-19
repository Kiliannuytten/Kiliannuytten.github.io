let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    playField_width: 600,
    playField_height: 800
};

const setup = () => {
    document.getElementById("playField").addEventListener("click", alert);
    //image veranderen na bepaalde tijd
    setInterval(changeImage,global.MOVE_DELAY);
}

const alert = () => {
    //score +1 doen
    global.score++;
    console.log(global.score);
    console.log("random getal =" + getRandomGetalImage());

    //score veranderen
    let score = document.getElementById("score");
    score.innerHTML = global.score;
    //image veranderen
    changeImage();
    }

let changeImage = () => {
    let image = document.getElementById("image");
    image.setAttribute("src",global.IMAGE_PATH_PREFIX + getRandomGetalImage() + global.IMAGE_PATH_SUFFIX);
    //move image
    moveImage(image);
}

let moveImage = (image) => {
    image.style.left = getRandomGetalBoxWidth()+"px";
    image.style.top = getRandomGetalBoxHeight()+"px";
}

const getRandomGetalBoxWidth = () => {
    console.log(Math.floor(Math.random()*global.playField_width));
    return Math.floor(Math.random()*global.playField_width);
}

const getRandomGetalBoxHeight = () =>{
    return Math.floor(Math.random()*global.playField_height);
}

let getRandomGetalImage = () => {
    return Math.floor(Math.random() * global.IMAGE_COUNT);
}

window.addEventListener("load", setup);