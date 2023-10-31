let radioBtn = document.querySelectorAll("input[name='tipo_seguro']");
let precio = document.getElementById("precio");
let precio1 = "$500";
let precio2 = "1000";
let precio3 = "$1500";

let = mostrarPrecio = () => {
    let seleccionado = document.querySelector("input[name= 'tipo_seguro']:checked").value;
    if (seleccionado == "basico"){
        precio.textContent = `Elegiste el seguro ${seleccionado}. Invertis ${precio1}`;
    }
    if (seleccionado == "intermedio"){
        precio.textContent = `Elegiste el seguro ${seleccionado}. Invertis ${precio2}`;
    }
    if (seleccionado == "premium"){
        precio.textContent = `Elegiste el seguro ${seleccionado}. Invertis ${precio3}`;
    }
}

radioBtn.forEach(btnRadio =>{
    btnRadio.addEventListener("change", mostrarPrecio);
});

mostrarPrecio();