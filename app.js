// fuction for extra memory 
function memoryCharge(memoryChargeId) {
    const extraMemory = document.getElementById("extra-memory");
    if (memoryChargeId == true) {
        extraMemory.innerText = 0;
    }
    else {
        extraMemory.innerText = 180;
    }
}

// function for extra ssd 
function ssdCharge(ssdChargeId) {
    const extraStorage = document.getElementById("extra-storage");
    if (ssdChargeId == 256) {
        extraStorage.innerText = 0;
    }
    else if (ssdChargeId == 512) {
        extraStorage.innerText = 100;
    }
    else {
        extraStorage.innerText = 180;
    }
}

// function for delivery charge 
function deliveryCharge(chargeForDelivery) {
    const deliveryChargeId = document.getElementById("delivery-charge")
    if (chargeForDelivery == true) {
        deliveryChargeId.innerText = 0;
    }
    else {
        deliveryChargeId.innerText = 20;
    }
}

function calculateTotal() {
    const extraMemoryTotal = document.getElementById("extra-memory").innerText;
    const extraStorageTotal = document.getElementById("extra-storage").innerText;
    const deliveryChargeTotal = document.getElementById("delivery-charge").innerText;
    const totalCharge = 1299 + parseInt(extraMemoryTotal) + parseInt(extraStorageTotal) + parseInt(deliveryChargeTotal);
    document.getElementById("total-charge").innerText = totalCharge;
    const totalOverAll = document.getElementById("total-overAll");
    totalOverAll.innerText = totalCharge;
}

// extra memory 
document.getElementById('8gb-memory').addEventListener('click', function () {
    memoryCharge(true);
    calculateTotal();
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    memoryCharge(false);
    calculateTotal();
});

// ssd charge 
document.getElementById("256gd-ssd").addEventListener('click', function () {
    ssdCharge(256);
    calculateTotal();
});
document.getElementById("512gd-ssd").addEventListener('click', function () {
    ssdCharge(512);
    calculateTotal();
});
document.getElementById("1tb-ssd").addEventListener('click', function () {
    ssdCharge(1);
    calculateTotal();
});

// deliver charge 
document.getElementById("free-delivery").addEventListener('click', function () {
    deliveryCharge(true);
    calculateTotal();
});
document.getElementById("charge-delivery").addEventListener('click', function () {
    deliveryCharge(false);
    calculateTotal();
});

// total overall price 


// total price using promo code
document.getElementById("apply-button").addEventListener('click', function () {
    const extraMemoryTotal = document.getElementById("extra-memory").innerText;
    const extraStorageTotal = document.getElementById("extra-storage").innerText;
    const deliveryChargeTotal = document.getElementById("delivery-charge").innerText;
    const totalCharge = 1299 + parseInt(extraMemoryTotal) + parseInt(extraStorageTotal) + parseInt(deliveryChargeTotal);
    document.getElementById("total-charge").innerText = totalCharge;
    const promoInput = document.getElementById("promo-input");
    if (promoInput.value == "stevekaku") {
        // document.getElementById("apply-button").removeAttribute('disabled');
        document.getElementById("total-overAll").innerText = totalCharge * 0.8;
        // 1299(1-0.2) calculation for 20%
    }
    // else {

    //     document.getElementById("apply-button").setAttribute('disabled', true);
    // }
    promoInput.value = "";

});
