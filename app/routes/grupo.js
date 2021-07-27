var api = require("../api/grupo");

module.exports = function (app) {
    app.get("/v1/grupos", api.lista);
};