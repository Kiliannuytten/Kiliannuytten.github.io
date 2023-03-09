const setup = () => {
    let lblCursus = document.getElementById( "lblCursus");
    lblCursus.addEventListener( "mouseover", change);
    lblCursus.addEventListener("mouseout", changeOut);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if(txtName.value != ""){
        alert("jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);

        console.log(`jouw naam is ${txtName.value}`);
    }else {
        alert("gelieve naam in te vullen");
    }
}

const change = () => {
    let lblCursus = document.getElementById( "lblCursus");
    lblCursus.className = "cursus";
}
const changeOut = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "";
}
window.addEventListener("load", setup);