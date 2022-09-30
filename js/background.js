const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;

// 아직 JS에만 bgImg라는 요소 존재
document.body.appendChild(bgImg);
