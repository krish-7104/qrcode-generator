const generateQR = () => {
  let link = document.getElementById("qrText").value;
  if (link !== "") {
    let imgQR = document.getElementById("qrImg");
    imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`;
    document.getElementById("qrText").value = "";
    document
      .getElementById("downloadLink")
      .setAttribute(
        "href",
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`
      );
    let qrImg = document.getElementById("qrImg");
    qrImg.addEventListener("load", () => {
      document.getElementById("downloadBtn").style.display = "block";
    });
  } else {
    alert("Enter Link Or Text Please!");
  }
};

let text = document.getElementById("qrText");
text.addEventListener("focusin", () => {
  document.getElementById("downloadBtn").style.display = "none";
  let imgQR = document.getElementById("qrImg");
  imgQR.src = `qr-code.png`;
});
