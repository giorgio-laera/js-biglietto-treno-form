const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age");
const sendEl = document.getElementById("send");
const resetEl = document.getElementById("reset");
const nameEl = document.getElementById("inputName");

sendEl.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(distanceEl.value, ageEl.value);

    if (distanceEl == NaN) {
        console.log("non e un numero")
        return;

    }
    const priceKm = distanceEl.value * 0.21;
    console.log(priceKm);

    let discount = 1;
    let supplyEl=""
    if (ageEl.value == "minorenne") {
        discount = 0.8;
        supplyEl = "Biglietto junior";
    } else if (ageEl.value == "senior") {
        discount = 0.6;
        supplyEl = "Biglietto senior";
    } else {
        supplyEl = "Biglietto standard";
    }

    let result = priceKm * discount;
    document.getElementById("cost").innerHTML = result;
    document.getElementById("name").innerText = nameEl.value;
    document.getElementById("supply").innerText = supplyEl;
    document.getElementById("footer").classList.remove("d-none")
})
reset.addEventListener("click", function () {
    distanceEl = "";
    ageEl = "";
    result = "";
}) 
