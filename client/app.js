const client = require('./client');
const {performance} = require('perf_hooks');

var t0 = performance.now();

client.getAll(null, (err, data) => {
    if(!err) {
        //console.log('Lista de pokemones recibida!');
        let pokemon_list = data.pokemons;

        // Realizar acciones con la informacion recibida
        var t1 = performance.now();
        console.log("Call to getAll took " + (t1 - t0) + " milliseconds.")
    }
    else {
        // Manejo de errores
        console.log('Error al realizar operacion getAll');
    }
});
