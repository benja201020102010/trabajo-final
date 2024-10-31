let btnNombre = document.querySelector("#btnNombre"); 
let btnHistoria = document.querySelector("#btnHistoria"); 
let btnLogros = document.querySelector("#btnLogros"); 
let btnCargar = document.querySelector("#btnCargar");
let input = document.querySelector("#Correo");
let infoDiv = document.querySelector("#info");

function mostrarInformacion(texto) {
    infoDiv.textContent = texto; 
}

function guardarInformacion() {
    btnCargar.onclick = function() {
        let correo = input.value;
        if (correo) {
            infoDiv.textContent = "Correo ingresado: " + correo;
        } else {
            alert("Por favor, ingresa un correo.");
        }
    };
}


btnNombre.onclick = function() {
    mostrarInformacion("La Liga Nacional de Básquetbol se fundó en 1985.");
};

btnHistoria.onclick = function() {
    mostrarInformacion("La historia de la liga incluye grandes equipos y jugadores que han dejado su huella.");
};

btnLogros.onclick = function() {
    mostrarInformacion("La liga ha visto múltiples campeonatos y reconocimientos a lo largo de los años.");
};


guardarInformacion();


    
