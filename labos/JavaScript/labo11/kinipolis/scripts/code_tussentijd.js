let global = {
    seats_values :[    true, false, true, true, true, false, false, false, true, true,
        true, true, true, false, false, false, false, true, true, false,
        false, true, false, true, true, true, false, true, true, true],
    seats: [],
    PREFIX: "images/",
    SUFFIX:".png",
    AVAIL: "seat_avail",
    SELECT: "seat_select",
    UNAVAIL: "seat_unavail",
    ROWS: 5,
    COLUMNS: 6
}
const setup = () => {
    setupZaal();
    document.getElementById("btnfind").addEventListener("click", search);
    storeChairs();
}
const search = () => {
    console.log("search");
    let idx = 0;
    while (idx < global.seats.length) {
        //let confirmation = confirm("We hebben 3 stoelen gevonden, wil je deze?");
        if (global.seats_values[idx] && searchSecondChair(idx)) {
            showGreenChairs(idx);
        }

        // if (confirmation) {
        //     idx = 505;
        // }
        idx++;
    }
};

const showGreenChairs = (i) => {
    let idxFirst = i;
    let idxSecond = idxFirst ++;
    let idxThird = idxSecond ++;

    global.seats[idxFirst].setAttribute("src",global.PREFIX + global.SELECT + global.SUFFIX);
    global.seats[idxSecond].setAttribute("src",global.PREFIX + global.SELECT + global.SUFFIX);
    global.seats[idxThird].setAttribute("src",global.PREFIX + global.SELECT + global.SUFFIX);
}
const searchSecondChair = (i) => {
    let rowFirstChair = Math.floor(i / global.COLUMNS);
    let idxSecondChair = i + 1;
    let rowSecondChair = Math.floor(idxSecondChair / global.COLUMNS);
    if (global.seats_values[idxSecondChair] && rowSecondChair === rowFirstChair) {
        return searchThirdChair(idxSecondChair, rowSecondChair);
    } else {
        return false;
    }
};

const searchThirdChair = (idxSecondChair, rowSecondChair) => {
    let idxThirdChair = idxSecondChair + 1;
    let rowThirdChair = Math.floor(idxThirdChair / global.COLUMNS);
    return rowSecondChair === rowThirdChair;

};

const setupZaal = () => {
    let zaal = document.getElementById("zaal");
    for (let row = 0; row < global.ROWS; row++) {
        let br = document.createElement("br");

        for (let col = 0; col < global.COLUMNS; col++) {
            let seatIndex = row * global.COLUMNS + col; // rij 1 (0) * max rijen + kolom 4 ==> stoel 4, rij 3 (2) * max rijen + stoel 6 = 2*6+6 = stoel 18
            let imgStoel = document.createElement("img");
            if(!global.seats_values[seatIndex]){
                imgStoel.setAttribute("src", global.PREFIX + global.UNAVAIL + global.SUFFIX);
            }else{
                imgStoel.setAttribute("src", global.PREFIX + global.AVAIL + global.SUFFIX);
            }
            imgStoel.setAttribute("alt", "stoel");
            imgStoel.setAttribute("id", "stoel" + seatIndex);
            let seat = {
                src: imgStoel.getAttribute("src")
            }
            global.seats.push(imgStoel);

            zaal.appendChild(imgStoel);

            // rij maken
            if (col === global.COLUMNS - 1) {
                zaal.appendChild(br);
            }
        }
    }
}
const storeChairs = () => {
    let chairsJSON = JSON.stringify(global.seats);
    localStorage.setItem("NK_Chairs",chairsJSON);
}
window.addEventListener("load", setup);