//API link for random images: https://source.unsplash.com/random?topics=nature

let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById("bits");
let kboutput = document.getElementById("kbs");
let mboutput = document.getElementById("mbs");

//Gets random image from unsplash.com
let imageLink = "https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dG9waWNzfHx8fHx8MTY3NTc4NzYwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";

//When image loads
image.onload = async function () {
  endTime = new Date().getTime();

  //Get image size
  await fetch(imageLink).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

//Function to calculate speed
function calculateSpeed() {
  //Time taken in seconds
  let timeDuration = (endTime - startTime) / 1000;
  //total bots
  let loadedBits = imageSize * 8;
  let speedInBps = (loadedBits / timeDuration).toFixed(2);
  let speedInKbps = (speedInBps / 1024).toFixed(2);
  let speedInMbps = (speedInKbps / 1024).toFixed(2);

  bitOutput.innerHTML += `${speedInBps}`;
  kboutput.innerHTML += `${speedInKbps}`;
  mboutput.innerHTML += `${speedInMbps}`;
}

//Initial
const init = async () => {
  startTime = new Date().getTime();
  image.src = imageLink;
};

window.onload = () => init();