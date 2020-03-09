let source2 = src = "https://maps.google.com/maps?q=hello%20world&t=k&z=13&ie=UTF8&iwloc=&output=embed";

let locations = [];

let dataToPush;

let submitted = false;

console.log("REF " + ref);
let myRef = ref;

document.getElementById("nextButton").addEventListener('click', nextMap);
document.getElementById("submitButton").addEventListener('click', submitData);

//DATALOAD

objData = ref.on("value", gotData);

function gotData(data) {

    var dataVals = data.val();
    var keys = Object.keys(dataVals);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        var curObj = (dataVals[key]);
        locations.push(curObj);
    }
    console.log(locations);
}

//

function nextMap() {
    console.log(locations.length);

    let randomObj = locations[Math.floor((Math.random() * locations.length))];

    console.log(randomObj);

    let formattedAdr = encodeURIComponent(randomObj.location.trim());

    console.log(formattedAdr);

    document.getElementById("map").src =

        "https://maps.google.com/maps?q=" +
        formattedAdr +
        "&t=k&z=13&ie=UTF8&iwloc=&output=embed";


    document.getElementById("description").innerHTML = randomObj.description;

}

function submitData() {

    let locVal = document.getElementById("inputLocation").value;
    let descVal = document.getElementById("inputDescription").value;

    if (locVal.length > 0 && descVal.length > 0 && !submitted) {

        let mapObj = {
            location: locVal,
            description: descVal
        }

        console.log(mapObj);
        ref.push(mapObj);
        submitted = true;
    }

    else {
        console.log("no string or already submitted")
    }

}

let adr = "45 telegraph hill road falmouth ma us"
adr = encodeURIComponent(adr.trim())

console.log(adr);
