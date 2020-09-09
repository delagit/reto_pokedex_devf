function pokedexGrid(pokemon){
    // console.log(pokemon);

//Se obtiene el div con id = "pokedex" para ingresar dentro las tarjetas
    var grid = document.getElementById("pokedex");

//Se crea el div de bootstrap que da forma las tarjetas
    var grilla = document.createElement("div");
    grilla.className = "col-3 mb-4";

//Se crea el div de bootstrap que dispara el modal
    var tarjeta = document.createElement("div");
    tarjeta.className = "card text-center";
    tarjeta.setAttribute("data-toggle", "modal");
    //Se añade el identificador modal y el indice para diferenciarlo de los demas pokemon
    tarjeta.setAttribute("data-target", "#pokemon" + pokemon.pkdx_id);
    tarjeta.id = pokemon.pkdx_id;

// Se crea el indice superior de las tarjetas
    var numero = document.createElement("h5");
    numero.className = "card-text text-left text-secondary ml-2";
    numero.innerHTML = "#" + pokemon.pkdx_id;

//Se crea la imagen del pokemon en la tarjeta
    var imagen = document.createElement("img");
    imagen.className = "card-img-top";
    imagen.src = pokemon.art_url;

//Se crea el cuerpo de la tarjeta
    var cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

//Se crea el nombre del pokemon en la tarjeta
    var nombre = document.createElement("h4");
    nombre.className = "card-title text-center";
    nombre.innerHTML = pokemon.name;

//Se inserta la grilla en el inicio del grid
    grid.appendChild(grilla);
//Se inserta el cuerpo de la tarjeta en la grilla
    grilla.appendChild(tarjeta);
//Se inserta el indice de pokemon en la tarjeta
    tarjeta.appendChild(numero);
//Se inserta la imagen del pokemon bajo el indice en la tarjeta
    tarjeta.appendChild(imagen);
//Se inserta el cuerpo de la tarjeta
    tarjeta.appendChild(cuerpo);
//Se inserta el nombre del pokemon en la tarjeta
    cuerpo.appendChild(nombre);

// INICIO DEL MODAL
    //Se obtiene el contenedor que contendra los modales
    var inicioModal = document.getElementById("contenedorModal");

    //Se crean y agregan los elementos del modal al HTML
    var modalFade = document.createElement("div");
    modalFade.className = "modal fade";
    modalFade.id = "pokemon" + pokemon.pkdx_id;
    modalFade.setAttribute("tabindex", "-1");
    modalFade.setAttribute("role","dialog");
    modalFade.setAttribute("aria-labelledby","pokemonDetailModal");
    modalFade.setAttribute("aria-hidden","true");

    var modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog modal-dialog-centered my-modal";
    modalDialog.setAttribute("role","document");

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    var modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    var modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title text-center";
    modalTitle.id = "nombrePokemon";
    modalTitle.innerHTML = pokemon.name;

    var modalBody = document.createElement("div");
    modalBody.className = "modal-body my-modal-body";

    var fotoPokemon = document.createElement("img");
    fotoPokemon.id = "fotoPokemon";
    fotoPokemon.src = pokemon.art_url;

    var texto = document.createElement("h6");
    texto.className = "mt-3 text-center";
    texto.innerHTML = "DESCRIPTION";

    var description = document.createElement("p");
    description.id = "textoPokemon";
    description.className = "text-justify";
    description.innerHTML = pokemon.description;

    var modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    var cierre = document.createElement("button");
    cierre.className = "btn btn-secondary";
    cierre.type = "button";
    cierre.setAttribute("data-dismiss","modal");
    cierre.innerHTML = "Close";

    //Se insertan los elementos del MODAL en el HTML
    inicioModal.appendChild(modalFade);
    modalFade.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalContent.appendChild(modalBody);
    modalBody.appendChild(fotoPokemon);
    modalBody.appendChild(texto);
    modalBody.appendChild(description);
    modalContent.appendChild(modalFooter);
    modalFooter.appendChild(cierre);
}

for (var i = 0; i < pokemones.length; i++){
    pokedexGrid(pokemones[i]); //Se ejecuta la funcion pokedexGrid por cada elemento dentro del JSON
}

