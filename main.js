const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age");
const sendEl = document.getElementById("send");

sendEl.addEventListener("click", function () {

    console.log(distanceEl, ageEl.value);

    if (distanceEl == NaN) {
        console.log("non e un numero")
        return;

    }
    const priceKm = distanceEl.value * 0.21;
    console.log(priceKm);

    let discount = 1;

    if (ageEl.value == "minorenne") {
        discount = 0.8;
    }else if (ageEl.value == "senior") {
        discount = 0.6;
    }else{}

    let result = priceKm * discount;
    document.getElementById("cost").innerHTML = result;
})
