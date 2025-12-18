const colortext = document.getElementById("colorText");

const randomColor = () => {
  const hexCharacters = "0123456789ABCDF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const changeBackround = () => {
  document.body.style.backgroundColor = randomColor();
};

colortext.innerHTML = `   
    <div class="color">
      <h1>Backround Color: ${color}</h1>
    </div>`;
