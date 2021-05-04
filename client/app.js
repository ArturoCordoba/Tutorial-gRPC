const client = require('./client');

client.getAll(null, (err, data) => {
    if(!err) {
        console.log('Lista de pokemones recibida!');
        let pokemon_list = data.pokemons;

        // Realizar acciones con la informacion recibida
    }
    else {
        // Manejo de errores
        console.log('Error al realizar operacion getAll');
    }
});


const pokemon = {name: 'bulbasaur'};
client.get(pokemon, (err, data) => {
    if(!err) {
        console.log('Informacion de bulbasaur recibida!');
        let balbasaurData = data;

        // Realizar acciones con la informacion recibida
    }
    else {
        // Manejo de errores
        console.log('Error al realizar operacion get');
        console.log(err);
    }
});
