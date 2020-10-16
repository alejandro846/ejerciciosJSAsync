
const obtenerPokemon = require("./library");

function funcionCallback(pokemon){
    console.log(pokemon.name);
    let i = 1;
    console.log("Habilidades: ")
    pokemon.abilities.forEach(e => {
        console.log(i+") "+ e.ability.name);
        i=i+1;
    });
}
obtenerPokemon("gengar", funcionCallback);
