const setup = () => {
    let start = new Date(); //systeem datum
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //maand
    console.log(start.getMonth() +1);

    //jaar
    console.log(start.getFullYear())

    //dag
    console.log(start.getDate())

    //datum
    console.log("DATUM:" + start.getDate() + "-" + (start.getMonth()+1) + "-" + start.getFullYear()
        + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2023,0,1);
    console.log(datum);

    let geboorte = new Date(2002,4,7);
    let milisecondsInDag = 1000*60*60*24;
    let milisecondsAlive = start - geboorte;
    let dagenAlive = milisecondsAlive/milisecondsInDag;

    console.log(Math.floor(dagenAlive) + " dagen in leven");

    ///////////////////////////////////////////////
    console.log("***************************")

    let event = new Date();

    console.log("toString " + event.toString());

    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());
}
window.addEventListener("load", setup);