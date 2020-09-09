function pokedexGrid(pokemon){

    console.log(pokemon);

    var grid = document.getElementById("pokedex");

    var grilla = document.createElement("div");
    grilla.className = "col-3 mb-4";

    var tarjeta = document.createElement("div");
    tarjeta.className = "card text-center";
    tarjeta.setAttribute("data-toggle", "modal");
    tarjeta.setAttribute("data-target", "#pokemon" + pokemon.pkdx_id);
    tarjeta.id = pokemon.pkdx_id;

    var numero = document.createElement("h5");
    numero.className = "card-text text-left text-secondary ml-2";
    numero.innerHTML = "#" + pokemon.pkdx_id;

    var imagen = document.createElement("img");
    imagen.className = "card-img-top";
    imagen.src = pokemon.art_url;

    var cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

    var nombre = document.createElement("h4");
    nombre.className = "card-title text-center";
    nombre.innerHTML = pokemon.name;

    grid.appendChild(grilla);
    grilla.appendChild(tarjeta);
    tarjeta.appendChild(numero);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(cuerpo);
    cuerpo.appendChild(nombre);

    // INICIO DEL MODAL
    var inicioModal = document.getElementById("contenedorModal");

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
    pokedexGrid(pokemones[i]);
}

