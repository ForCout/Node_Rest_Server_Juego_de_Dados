const mongoose = require('mongoose');
const Jugador = require('../models/jugador');
const servicio = require('../services/auth');

// creating a fake user for authentication
const user = { nombre: 'Moncho', psw: '1234' };

function login(req, res) {
  Jugador.find(
    { nombre: req.body.nombre, psw: req.body.psw },
    (err, jugador) => {
      if (err) {
        res.status(500).json({ message: 'Error al logearse el jugador' });
      } else if (jugador.length === 0) {
        req.jugador = jugador;
        res.status(200).json({
          message: 'Te has logeado correctamente',
          token: servicio.createToken(jugador),
        });
      } else {
        res
          .status(404)
          .json({ message: 'Este usuario ya existe, utilice otro nombre' });
      }
    }
  );
}

module.exports = login;
