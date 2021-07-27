var api = require("../api/foto");

module.exports = function (app) {
    app.get("/v1/fotos", api.lista);
};