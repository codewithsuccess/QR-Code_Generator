const inputText = document.querySelector("#input");
const generateQr = document.querySelector("#gen-btn");
const downloadQr = document.querySelector("#down-btn");
const qrContainer = document.querySelector("#qr-container");


// Adding addEventListener on generateQR button
generateQr.addEventListener('click', () => {

    if (inputText.value !== "") {

        // generate QR inside QR Container
        qrContainer.value = generateQrCode();

    }
    else {
        alert("Enter text or URL to generate QR code.");
    }

});

// Adding addEventListener on Downoad Button
downloadQr.addEventListener('click', () => {

    let image = document.querySelector("#qr-container img");

    if (image !== null) {

        // this will download Image
        let imgAttr = image.getAttribute("src");
        downloadQr.setAttribute("href", imgAttr);

    }
    else {
        qrContainer.innerHTML = " QR code is not generated to dowload";
    }

});

// arrow function to generate QR code 
const generateQrCode = () => {

    qrContainer.innerHTML = ""; // clear QR container for each QR

    new QRCode(qrContainer, {
        text: inputText.value,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
};