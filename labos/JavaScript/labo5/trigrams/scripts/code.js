const setup = () => {
    document.getElementById("btnTrigrams").addEventListener("click", toonTrigrams);
}

//wat ik had

const showTrigram = () => {
    let txtInput = document.getElementById("tekts").value;
    console.log(txtInput);
    let output = "";
    for (let i = 0 ; i<txtInput.length-2; i++){
        output = txtInput.slice(i,i+3)
        console.log(txtInput.slice(i,i+3));
        output+="<li>"+txtInput.slice(i,i+3)+"<li>";

    }
};

//oplossing docent

const toonTrigrams = () => {
    let txtTekts=document.getElementById("txtTekst");
    let tekst = txtTekts.value;
    let lstTrigrams=document.getElementById("lstTrigrams");
    let trigrams = getTrigrams(tekst);
    let output = "";
    for(let i=0; i<trigrams.length;i++){
        output+="<li>"+trigrams[i]+"</li>";
    }
    lstTrigrams.innerHTML=output;
};

const getTrigrams = (tekst) => {
    let result=[];
    let trigram;
    for (let i = 0; i<=tekst.length-3;i++){
        trigram=tekst.slice(i,i+3);
        result.push(trigram);
    }
    return result;
};

window.addEventListener("load", setup);