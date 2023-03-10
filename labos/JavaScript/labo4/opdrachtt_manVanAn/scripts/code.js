const setup = () => {
    let txtAn = document.getElementById("txtAn");
    let zin = txtAn.value;
    console.log(zin);

    let i = 0;
    let counter = 0;

    while(i<txtAn.length){
        if(txtAn.indexOf(i) == "a" || txtAn.indexOf(i) == "A"){
            if (txtAn.indexOf(i+1) == "n" || txtAn.indexOf(i+1) == "N"){
                counter++;
            }
        }
    }
    console.log(counter);
}
window.addEventListener("load", setup);