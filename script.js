import showColors from "./showColors.js";

let arrColors = ["red", "green", "blue"];

function getColors() {
  arrColors.forEach(color => {
    showColors(color);
  });
}

getColors();
