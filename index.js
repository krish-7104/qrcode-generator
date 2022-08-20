const generateQR = () => {
  let link = document.getElementById("qrText").value;
  if (link !== "") {
    let imgQR = document.getElementById("qrImg");
    imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`;
    console.log("DOne");
    document.getElementById("downloadBtn").style.display = "block";
    document.getElementById("qrText").value = "";
    document
      .getElementById("downloadLink")
      .setAttribute(
        "href",
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`
      );
    document.getElementById("qr_img").style.display = "flex";
  } else {
    alert("Enter Link Or Text Please!");
  }
};

let text = document.getElementById("qrText");
text.addEventListener("focusin", () => {
  document.getElementById("downloadBtn").style.display = "none";
  let imgQR = document.getElementById("qrImg");
  imgQR.src = `qr-code.png`;
  document.getElementById("qr_img").style.display = "none";
});
