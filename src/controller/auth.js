const mongoose = require("mongoose");
const Jugador = require("../models/jugador");
const servicio = require("../services/auth");

function login(req, res) {
  Jugador.find(
    { nombre: req.body.nombre, psw: req.body.psw },
    (err, jugador) => {
      if (err) {
        res.status(500).send({ message: "Error al logearse el jugador" });
      } else if (jugador.length === 0) {
        res
          .status(404)
          .send({ message: "No existe el usuario, registrese primero " });
      } else {
        req.jugador = jugador;
        res.status(200).send({
          message: " Te has logeado correctamente",
          token: servicio.createToken(jugador),
        });
      }
    }
  );
}

module.exports = login;
