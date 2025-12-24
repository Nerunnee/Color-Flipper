const colorText1 = document.querySelector("#colorText");
const simple = document.getElementById("simple-btn");
const hex = document.getElementById("hex-btn");
const clickMe = document.getElementById("clickMe-btn");

const simpleColors = ["red", "green", "blue"];

let currentMode = "simple";

simple.addEventListener("click", () => {
  currentMode = "simple";
  simple.classList.add("active");
  hex.classList.remove("active");
});

hex.addEventListener("click", () => {
  currentMode = "hex";
  hex.classList.add("active");
  simple.classList.remove("active");
});

const defaultColor = () => {
  colorText1.innerHTML = `<h1>Background Color: #FFFFFF</h1>`;
  document.body.style.backgroundColor = "#FFFFFF";
};

const changeSimpleColor = () => {
  const selectColorName =
    simpleColors[Math.floor(Math.random() * simpleColors.length)];

  colorText1.innerHTML = `<h1>Backround Color: ${selectColorName} </h1>`;
  document.body.style.backgroundColor = selectColorName;
};

const randomColor = () => {
  const hexCharacters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }

  colorText1.innerHTML = `<h1>Backround Color: ${color}</h1>`;

  return color;
};

const changeBackround = () => {
  document.body.style.backgroundColor = randomColor();
};

clickMe.addEventListener("click", () => {
  if (currentMode === "simple") {
    changeSimpleColor();
  } else {
    changeBackround();
  }
});
