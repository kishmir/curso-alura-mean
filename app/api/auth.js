var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

module.exports = function (app) {
    var api = {};
    var model = mongoose.model("Usuario");

    api.autentica = function (req, res) {
        model.findOne({ login: req.body.login, senha: req.body.senha }).then(
            function (usuario) {
                if (!usuario) {
                    console.log("Login ou senha inválido");
                    res.sendStatus(401);
                } else {
                    var token = jwt.sign(
                        { login: usuario.login },
                        app.get("secret"),
                        {
                            expiresIn: 84600,
                        }
                    );
                    console.log(
                        "Token criado e sendo enviado no header de requisição"
                    );

                    res.set("x-access-token", token);
                    res.end();
                }
            },
            function (error) {
                console.log("Login ou senha inválido");
                res.sendStatus(401);
            }
        );
    };

    api.verificaToken = function (req, res, next) {
        var token = req.headers["x-access-token"];
        if (token) {
            console.log("Token recebido, decodificando");
            jwt.verify(token, app.get("secret"), function (err, decoded) {
                if (err) {
                    console.log("Token rejeitado");
                    return res.sendStatus(401);
                } else {
                    console.log("Token aceito");
                    req.usuario = decoded;
                    next();
                }
            });
        } else {
            console.log("Nenhum token enviado");
            return res.sendStatus(401);
        }
    };

    return api;
};
