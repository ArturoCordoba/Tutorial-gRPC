// Ruta del contrato
const PROTO_PATH = "./pokemon.proto";

// Importar bibliotecas
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Cargar contrato de servicio
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

// Registrar contrato en gRPC
const PokemonService = grpc.loadPackageDefinition(packageDefinition).PokemonService;

// Crear cliente
const client = new PokemonService(
    'localhost:30000',
    grpc.credentials.createInsecure()
);

// Exportar cliente
module.exports = client;