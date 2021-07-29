module.exports = function(uri) {
    var mongoose = require("mongoose");
    
    mongoose.connect("mongodb://" + uri);
    
    mongoose.connection.on("connected", function () {
        console.log("Conectado ao BD");
    });
    
    mongoose.connection.on("error", function (error) {
        console.log("Erro na conexão do BD: " + error);
    });
    
    mongoose.connection.on("disconnected", function () {
        console.log("Desconectado do BD");
    });
    
    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            console.log("Conexão fechada pelo término da aplicação");
            process.exit(0);
        });
    });
}