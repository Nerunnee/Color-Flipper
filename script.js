const colorText1 = document.querySelector("#colorText");

const simpleColors = ["red", "green", "blue"];

const defaultColor = () => {
  colorText1.innerHTML = `<h1>Backround Color: #FFFFFF</h1>`;
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

const changeBackroundHex = () => {
  document.body.style.backgroundColor = randomColor();
};

const selectHexBtn = () => {
  changeBackroundHex();
};
