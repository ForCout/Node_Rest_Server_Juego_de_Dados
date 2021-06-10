const Jugador = require('../models/jugador.js');
const servicio = require('../services/services.js');
const authservicio = require('../services/auth');
// Insertamos Jugadores
const insertJugador = async (req, res) => {
  let jugador = new Jugador();

  if (req.body.nombre === '') {
    jugador.nombre = req.body.nombre = 'ANONIMO';
    jugador.psw = req.body.psw;
    jugador.save((err, jugadorSave) => {
      if (err)
        res
          .status(500)
          .json({ message: `Error al intentar guardar en BD:${err}` });
      res.status(200).json({ jugador: jugadorSave });
    });
  } else {
    Jugador.countDocuments({ nombre: req.body.nombre }, (err, count) => {
      if (count === 0) {
        jugador.nombre = req.body.nombre;
        jugador.psw = req.body.psw;
        jugador.save((err, jugadorSave) => {
          if (err)
            res
              .status(500)
              .json({ message: `Error al intentar guardar en BD:${err}` });
          res.status(200).send({ jugador: jugadorSave });
        });
      } else {
        res.status(501).json({
          message: `El jugador '${req.body.nombre}' ya existe.`,
        });
      }
    });
  }
};

//Actualizamos nombre
const actualizaNombre = async (req, res) => {
  let id = req.body.id;
  let update = req.body;
  let jugador = new Jugador();
  if (!req.body.id) {
    res.status(400).json({ message: 'Debe introducir un id' });
  } else if (
    Jugador.countDocuments({ nombre: req.body.nombre }, (err, count) => {
      if (count === 0) {
        Jugador.findByIdAndUpdate(id, update, (err, jugadorUpdate) => {
          if (err)
            res
              .status(500)
              .json({ message: `Error al actualizar usuario:${err}` });

          jugador.save(jugadorUpdate);
          res.status(200).json({
            message: `El nuevo nombre del id: ${jugadorUpdate.id} es ${req.body.nombre}`,
          });
        });
      } else {
        res.status(501).json({
          message: `El nombre:${req.body.nombre} ya existe, introduzca otro.`,
        });
      }
    })
  );
};

module.exports = { insertJugador, actualizaNombre };
