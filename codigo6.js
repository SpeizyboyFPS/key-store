"use strict"

const contenedor = document.querySelector(".flex-container");
let contador = 0;
contador++;

// create the key
function createKey(nombre,modelo,precio){
    let img = "<img class=llave-img src=llave.png <br>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

// key code
const changeHidden  = (number)=>{
    document.querySelector(".key-data").value = number;
}
let df = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modelRandom = Math.round(Math.random()*1000);
    let priceRandom = Math.round(Math.random()*10+30);
    let llave = createKey(`llave ${i}`,`modelo ${modelRandom}`,`${priceRandom }`);
    
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modelRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    df.appendChild(div);
}

contenedor.appendChild(df);