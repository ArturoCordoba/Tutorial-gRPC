const PROTO_PATH = "./pokemon.proto";

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const PokemonService = grpc.loadPackageDefinition(packageDefinition).PokemonService;
const client = new PokemonService(
    'localhost:30000',
    grpc.credentials.createInsecure()
);

module.exports = client;