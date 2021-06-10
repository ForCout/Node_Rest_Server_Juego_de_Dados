const mongoose = require('mongoose');
const Jugador = require('../models/jugador');
const servicio = require('../services/auth');

function login(req, res) {
  Jugador.find(
    { nombre: req.body.nombre, psw: req.body.psw },
    (err, jugador) => {
      if (err) {
        res.status(500).json({ message: 'Error al logearse el jugador' });
      } else if (jugador.length === 0) {
        res
          .status(404)
          .json({ message: 'No existe el usuario, registrese primero ' });
      } else {
        req.jugador = jugador;
        res.status(200).json({
          message: 'Te has logeado correctamente',
          token: servicio.createToken(jugador),
        });
      }
    }
  );
}

module.exports = login;
