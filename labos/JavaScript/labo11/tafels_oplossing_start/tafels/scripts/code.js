const setup = () => {
    document.getElementById("btnGo").addEventListener("click", checkInput)
    loadTables();
}
const checkInput = () => {
    console.log("input");
    let input = document.getElementById("inputNumber").value;
    if(!isNaN(input) && input !== "" ){
        console.log("its a number");
        createTable(input);
        document.getElementById("inputNumber").value = "";
        saveTables();
    }else{
        alert("Input is not a number");
    }
}

const createTable = (input) => {
    let divTafels = document.getElementById("tafels");
    let div = document.createElement("div");
    div.classList.add("tafel")
    divTafels.appendChild(div);
    createHeader(input, div);


}
const createHeader = (input, table) => {
    // create header
    let header = document.createElement("div");
    header.id = "header";
    header.classList.add("header");

    //create time
    let date = new Date();
    let datumString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(datumString);
    let headerNode = document.createTextNode("Tafel van " + input + " aangemaakt op: " + datumString);
    header.appendChild(headerNode);

    //append header to table
    table.appendChild(header);

    //create Rows
    createRows(table, input);
}
const createRows = (table, input) => {
    console.log("createrows");
    for(let i = 1 ; i <= 10 ; i++){
        // create tr and th
        let row = document.createElement("div");
        // create node for tr
        let text = input + " x " + i + " = " + (input * i);
        let textNode = document.createTextNode(text);
        row.appendChild(textNode);

        // wanneer even => kleur geven
        if(i %2 === 0){
            row.classList.add("even");
        }
        table.appendChild(row);
    }
}
const saveTables = () => {
    let tables = document.getElementById("tafels").innerHTML;
    localStorage.setItem("tables", tables);
};

const loadTables = () => {
    let tables = localStorage.getItem("tables");
    if (tables) {
        document.getElementById("tafels").innerHTML = tables;
    }
};

window.addEventListener("load", setup);