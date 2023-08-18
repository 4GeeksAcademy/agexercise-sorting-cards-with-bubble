import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { createPopperBase } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
  let rannum = num[Math.floor(Math.random() * num.length)];
  let ranpin = pin[Math.floor(Math.random() * pin.length)];
  let cards = [];
  // generamos array con cartas random
  document.getElementById("sorteo").addEventListener("click", function() {
    let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
    for (let i = 0; i < cantCards.value; i++) {
      let rannum = num[Math.floor(Math.random() * num.length)];
      let ranpin = pin[Math.floor(Math.random() * pin.length)];
      cards[i] = { pinta: ranpin, numero: rannum };
    }
    // renderizamos el array del sorteo
    renderCards(cards, "cartas");
  });
  // rutina de clasificación y creación de log
  document.getElementById("sort").addEventListener("click", function() {
    let cardsord = [];
    let cardsn = [].concat(cards);
    let paso = "";
    let ind = 0;
    order.innerHTML = "";
    for (let i = 1; i <= cantCards.value; i++) {
      for (let j = 0; j < cantCards.value - 1; j++) {
        if (numcar(cardsn[j].numero) > numcar(cardsn[j + 1].numero)) {
          cardsord[ind] = cardsn[j];
          ind++;
          cardsord[ind] = cardsn[j + 1];
          ind++;
          paso = cardsn[j + 1];
          cardsn[j + 1] = cardsn[j];
          cardsn[j] = paso;
        }
      }
    }
    // renderizamos cartas ordenadas
    renderCards(cardsn, "order");
    // renderizamos el log de cambios
    renderCards(cardsord, "log");
    function numcar(num) {
      if (num == "A") {
        return 1;
      }
      if (num == "J") {
        return 11;
      }
      if (num == "Q") {
        return 12;
      }
      if (num == "K") {
        return 13;
      }
      return num;
    }
  });
  // función de renderizado, recibe array y ID
  function renderCards(array, id) {
    document.getElementById(id).innerHTML = "";
    for (let i = 0; i < array.length; i++) {
      document.getElementById(id).innerHTML +=
        "<div class='carta'><img id='imgtop" +
        id +
        i +
        "' class='pintatop' alt=''/><p id='numero" +
        id +
        i +
        "'" +
        "class='numero'></p><img id='imgbot" +
        id +
        i +
        "' class='pintabot' alt=''/></div>";
      document.getElementById("imgtop" + id + i).src =
        "../src/assets/img/" + array[i].pinta;
      document.getElementById("numero" + id + i).innerHTML = array[i].numero;
      document.getElementById("imgbot" + id + i).src =
        "../src/assets/img/" + array[i].pinta;
    }
  }
};