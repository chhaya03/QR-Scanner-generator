

let img = document.querySelector("#qrimg");
let textInput = document.querySelector("#textHolder");



function ScanQR() {

    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;

}

ScanQR();