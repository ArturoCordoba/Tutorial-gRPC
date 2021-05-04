// Cargar la lista de pokemones
const fs = require('fs');
const pokemons = JSON.parse(fs.readFileSync('./pokemon.json', 'utf8'));

// Ruta del contrato
const PROTO_PATH = "./pokemon.proto";

// Importar bibliotecas
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

// Cargar contrato de servicio
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

// Registrar contrato en gRPC
var pokemonProto = grpc.loadPackageDefinition(packageDefinition);

// Crear servidor
const server = new grpc.Server();


// Agregar servicio al servidor
server.addService(pokemonProto.PokemonService.service, {
    // Funcion para obtener todos los pokemones
    getAll: (_, callback) => {
        callback(null, { pokemons });
    },

    // Funcion para obtener un pokemon especifico
    get: (call, callback) => {
        let pokemon = pokemons.find(p => p.name == call.request.name);

        if (pokemon) {
            callback(null, pokemon);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'Not found'
            })
        }
    }
});


// Iniciar servidor gRPC
server.bind('127.0.0.1:30000', grpc.ServerCredentials.createInsecure());
console.log('Server running at 127.0.0.1:30000');
server.start();