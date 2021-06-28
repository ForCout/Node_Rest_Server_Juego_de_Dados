const servicio = require('../services/services');

// Insertamos Jugadores

const insertJugador = async (req, res) => {
  if (req.body.nombre === '') {
    await servicio.nuevoJugador('ANONIMO');
    res
      .status(201)
      .json({
        message: 'Jugador con nombre anonimo añadido',
        jugador: req.body,
      });
  } else {
    try {
      resultado = await servicio
        .checkJugadorNombre(req.body.nombre)
        .catch((e) => e);

      if (resultado === true) {
        await servicio.nuevoJugador(req.body.nombre);
        res.status(201).json({
          message: `Jugador con nombre:${req.body.nombre} añadido.`,
          jugador: req.body,
        });
      } else {
        res.status(200).json({
          message: `El jugador '${req.body.nombre}' ya existe.`,
        });
      }
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
};

//Actualizamos nombre
const actualizaNombre = async (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Debe introducir un id' });
  } else {
    try {
      checkId = await servicio.checkPlayerId(req.body.id).catch((e) => e);

      if (checkId === false) {
        res.status(400).json({ message: 'El id no es correcto' });
      }
      checkNombre = await servicio
        .checkJugadorNombre(req.body.nombre)
        .catch((e) => e);
      if (checkNombre === true) {
        await servicio.update(req.body.id, req.body.nombre);
        res.status(200).json({
          message: `Actualizado ${req.body.nombre}.`,
        });
      } else {
        res.status(200).json({
          message: `El nombre:${req.body.nombre} ya existe, introduzca otro.`,
        });
      }
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
};

module.exports = {
  insertJugador,
  actualizaNombre,
};
