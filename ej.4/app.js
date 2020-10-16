
const obtenerPokemon = require("./library");

obtenerPokemon("salamence").then(pokemon=>{
    console.log(pokemon.name);
    let i = 1;
    console.log("Habilidades: ")
    pokemon.abilities.forEach(e => {
        console.log(i+") "+ e.ability.name);
        i=i+1;
    });

}).catch((err)=>{
    console.log('Error');
});