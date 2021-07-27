var api = require("../api/foto");

module.exports = function (app) {
    var api = app.api.foto;
    app.get("/v1/fotos", api.lista);
};