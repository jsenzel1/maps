let source2 = src = "https://maps.google.com/maps?q=hello%20world&t=k&z=13&ie=UTF8&iwloc=&output=embed";

let locations = [];

let dataToPush;

document.getElementById("nextButton").addEventListener('click', nextMap);
document.getElementById("submitButton").addEventListener('click', submitData);

function nextMap() {

    document.getElementById("map").src = source2;

}

function submitData() {



    let mapObj = {
        location: document.getElementById("inputLocation").value,
        description: document.getElementById("inputDescription").value
    }

    console.log(mapObj);

}

let adr = "45 telegraph hill road falmouth ma us"
adr = encodeURIComponent(adr.trim())

console.log(adr);
