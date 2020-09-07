let id = setInterval(animate, 50);

// Get a reference to the canvas
let canvas = document.getElementById("myCanvas");

// Create rendering context
let context = canvas.getContext("2d");

//Set font and text color
context.font = "34px serif";
context.fillStyle = "#d4cf96";

// Initialize an array with image objects
let frames = []
for (let index = 0; index < 10; index++) {
  frames.push(new Image());
}

let imageUrls = [
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_01.png?v=1599458827677",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_02.png?v=1599459100475",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_03.png?v=1599459477692",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_04.png?v=1599459482729",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_05.png?v=1599459490487",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_06.png?v=1599459495819",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_07.png?v=1599459838829",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_08.png?v=1599459500995",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_10.png?v=1599459506640",
  "https://cdn.glitch.com/c96bdd3a-8412-4f73-8df9-40953ef8d400%2Fhurt_10.png?v=1599459506640"
];

// Initalize image src with url
for (let index = 0; index < 10; index++) {
  frames[index].src =imageUrls[index];
}


//Animate
let currentFrame = 0;
function animate() {
  let image = frames[currentFrame];
  context.drawImage(image, 80, 1, image.width / 2, image.height / 2);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 80, 1, image.width / 2, image.height / 2);
  currentFrame += 1;
  if(currentFrame >= 10){
    currentFrame = 0
  }
}
