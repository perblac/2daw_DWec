/* -------------------------------- importar -------------------------------- */
import {
  VehiculoLiteral as Vehiculo,
  CocheLiteral as Coche,
  MotoLiteral as Moto,
} from "./assets/modules.js";
/* ---------------------------- definir variables --------------------------- */
const marcaCocheFrm = document.getElementById("marcaCoche");
const modeloCocheFrm = document.getElementById("modeloCoche");
const añoCocheFrm = document.getElementById("añoCoche");
const errorCoche = document.getElementById("errorCoche");
const exitoCoche = document.getElementById("exitoCoche");

const marcaMotoFrm = document.getElementById("marcaMoto");
const modeloMotoFrm = document.getElementById("modeloMoto");
const añoMotoFrm = document.getElementById("añoMoto");
const errorMoto = document.getElementById("errorMoto");
const exitoMoto = document.getElementById("exitoMoto");

let coche = null,
  moto = null;

let spriteCoche = document.getElementById("spriteCoche"),
  spriteMoto = document.getElementById("spriteMoto"),
  limit = 600;

/* -------------------------------- funciones ------------------------------- */
// test objeto coche
// const coche = Object.create(Coche);
// coche.marca = 'seat';
// coche.modelo = 'toledo';
// coche.año = 2003;
// console.log(coche);
// console.log('coche parado, vel =',coche.velocidad);
// coche.arrancar();
// console.log('coche arranca, vel =', coche.velocidad);
// coche.acelerar();
// console.log('coche acelera, vel =', coche.velocidad);
// coche.velocidad = 50;
// console.log('coche set vel = 50 (MAX = 30), vel =', coche.velocidad);
// coche.acelerar();
// console.log('coche acelera, vel =', coche.velocidad);
// coche.frenar();
// console.log('coche frena, vel =', coche.velocidad);
// console.log(coche.MAXVEL, coche.constructor.MAXVEL);
// console.log(Coche.isPrototypeOf(coche));

function handlerCreateCar(e) {
  e.preventDefault();

  if (
    marcaCocheFrm.value == "" ||
    modeloCocheFrm.value == "" ||
    añoCocheFrm.value < 1900
  ) {
    exitoCoche.style.display = "none";
    errorCoche.style.display = "inline";

    setTimeout(() => {
      errorCoche.style.display = "none";
    }, 5000);
  } else {
    // coche = Object.create(Coche, {
    //   marca: marcaCocheFrm.value,
    //   modelo: modeloCocheFrm.value,
    //   año: parseInt(añoCocheFrm.value),
    //   pos: 10,
    //   vel: 0,
    //   dir: 1,
    // });
    coche = Object.create(Coche);
    coche.marca = marcaCocheFrm.value;
    coche.año = parseInt(añoCocheFrm.value);
    coche.modelo = modeloCocheFrm.value;
    coche.año = parseInt(añoCocheFrm.value);
    coche.pos = 10;
    coche.vel = 0;
    coche.dir = 1;

    document.getElementById("botonesCoche").style.display = "block";
    document.getElementById("cocheFrm").style.display = "none";

    document.getElementById(
      "boxCoche"
    ).innerText += `Coche: ${coche.modelo} ${coche.marca} del año ${coche.año}`;
    spriteCoche.style.display = "block";
    document.getElementById("pistaCoche").style =
      "border-bottom: 3px solid black; width: 664px";

    exitoCoche.style.display = "inline";
    errorCoche.style.display = "none";
    setTimeout(() => {
      exitoCoche.style.display = "none";
    }, 5000);

    document
      .getElementById("arrancarCoche")
      .addEventListener("click", handlerStartCar);
    document
      .getElementById("frenarCoche")
      .addEventListener("click", handlerStopCar);
    document
      .getElementById("acelerarCoche")
      .addEventListener("click", handlerAccelCar);
  }
}

function handlerStartCar() {
  coche.arrancar();
}

function handlerStopCar() {
  coche.frenar();
}

function handlerAccelCar() {
  coche.acelerar();
}

function handlerCreateMoto(e) {
  e.preventDefault();

  if (
    marcaMotoFrm.value == "" ||
    modeloMotoFrm.value == "" ||
    añoMotoFrm.value < 1900
  ) {
    exitoMoto.style.display = "none";
    errorMoto.style.display = "inline";

    setTimeout(() => {
      errorMoto.style.display = "none";
    }, 5000);
  } else {
    // pasando variables por el Object.create() :
    moto = Object.create(Moto, {
    marca: {value: marcaMotoFrm.value},
    modelo: {value: modeloMotoFrm.value},
    año: {value: parseInt(añoMotoFrm.value)},
    pos: {writable: true,value: 10},
    vel: {writable: true,value: 0},
    dir: {writable: true,value: 1},
    });

    document.getElementById("botonesMoto").style.display = "block";
    document.getElementById("motoFrm").style.display = "none";

    document.getElementById(
      "boxMoto"
    ).innerText += `Moto: ${moto.modelo} ${moto.marca} del año ${moto.año}`;
    spriteMoto.style.display = "block";
    document.getElementById("pistaMoto").style =
      "border-bottom: 3px solid black; width: 664px";

    exitoMoto.style.display = "inline";
    errorMoto.style.display = "none";
    setTimeout(() => {
      exitoMoto.style.display = "none";
    }, 5000);

    document
      .getElementById("arrancarMoto")
      .addEventListener("click", handlerStartMoto);
    document
      .getElementById("frenarMoto")
      .addEventListener("click", handlerStopMoto);
    document
      .getElementById("acelerarMoto")
      .addEventListener("click", handlerAccelMoto);
  }
}

function handlerStartMoto() {
  moto.arrancar();
}

function handlerStopMoto() {
  moto.frenar();
}

function handlerAccelMoto() {
  moto.acelerar();
}

//------- Loop de animación
function draw() {
  if (Coche.isPrototypeOf(coche)) {
    spriteCoche.style.left = coche.pos + "px";
    spriteCoche.src = coche.dir < 0 ? "./car2.png" : "./car.png";
  }
  if (Moto.isPrototypeOf(moto)) {
    spriteMoto.style.left = moto.pos + "px";
    spriteMoto.src = moto.dir < 0 ? "./moto2.png" : "./moto.png";
  }
}
function update(elem) {
  if (Vehiculo.isPrototypeOf(elem)) {
    elem.pos += elem.vel;
    if (elem.pos >= limit) elem.dir = -1;
    if (elem.pos < 0) elem.dir = 1;
    elem.vel = elem.velocidad * elem.dir;
  }
}
function mainLoop() {
  update(coche);
  update(moto);
  draw();
  requestAnimationFrame(mainLoop);
}
//-------- fin Loop de animación

function init() {
  requestAnimationFrame(mainLoop);
  document
    .getElementById("crearCoche")
    .addEventListener("click", handlerCreateCar);
  document
    .getElementById("crearMoto")
    .addEventListener("click", handlerCreateMoto);
}

/* ---------------------------- INICIO APLICACION --------------------------- */
document.addEventListener("DOMContentLoaded", init);
