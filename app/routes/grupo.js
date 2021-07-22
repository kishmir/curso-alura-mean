module.exports = function (app) {
    app.get("/v1/grupos", function (req, res) {
        var grupos = [
            { _id: 1, nome: "esportes" },
            { _id: 2, nome: "lugares" },
            { _id: 3, nome: "animais" },
        ];

        res.json(grupos);
    });
};