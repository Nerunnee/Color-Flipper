const colorText1 = document.querySelector("#colorText");

const randomColor = () => {
  const hexCharacters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }

  colorText1.innerHTML = `<h1>Backround Color: ${color}</h1>`;

  return color;
};

const changeBackround = () => {
  document.body.style.backgroundColor = randomColor();
};

const defualtColor = () => {
  colorText1.innerHTML = `<h1>Backround Color: #FFFFFF</h1>`;
  document.body.style.backgroundColor = "#FFFFFF";
};
