var api = {};

var fotos = [
    {
        _id: 1,
        titulo: "Leão",
        url: "http://www.fundosanimais.com/Minis/leoes.jpg",
    },
    {
        _id: 2,
        titulo: "Leão 2",
        url: "http://www.fundosanimais.com/Minis/leoes.jpg",
    },
];

var contador = fotos.length;

api.lista = function (req, res) {
    res.json(fotos);
};

api.buscaPorId = function (req, res) {
    var foto = fotos.find(function (foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
};

api.removePorId = function(req, res) {
    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    res.sendStatus(204);
};

api.adiciona = function(req, res) {
    var foto = req.body;
    foto._id = ++contador;
    fotos.push(foto);

    res.json(foto);
}

module.exports = api;