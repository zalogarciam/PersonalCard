"use strict";

const documentReady = () => {
  const tBodyPokemons = document.getElementById("tBodyPokemons");
  const formPokemon = document.getElementById("formPokemon");

  tBodyPokemons.innerHTML += `

    <tr>
        <td> 1 </td>
        <td> Pikachu </td>
        <td>Electrico</td>
        <td>250 </td>
        <td>Trueno</td>
        <td>Impactrueno</td>
        <td>
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png"
                alt="Pikachu" class="img-fluid" style="max-width: 128px;" />
        </td>
        <td> 🗑️ | ✏️</td>
    </tr>
  `;

  const createPokemon = (e) => {
    e.preventDefault();
    console.log("Gon");
  };

  formPokemon.addEventListener("submit", createPokemon);
};

document.addEventListener("DOMContentLoaded", documentReady);
