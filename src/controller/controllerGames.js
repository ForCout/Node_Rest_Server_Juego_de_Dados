const servicio = require('../services/services');

//Jugamos una partida
const tiradaDados = async (req, res) => {
  let id = req.params.id;
  let existe = await servicio.checkPlayerId(id);

  if (existe === true) {
    result = await servicio.insertPartida(id);
    res.status(201).json({
      message: `Resultado partida:`,
      dado_1: result.resultado[0],
      dado_2: result.resultado[1],
      Resultado: result.result,
    });
  } else {
    res.status(404).json({
      message: 'El jugador introducido no exite',
    });
  }
};

//Eliminamos todas las partidas de un jugador por su id
const deletePartidas = async (req, res) => {
  let id = req.params.id;

  resultado = await servicio.checkPlayerId(id);
  partidas = await servicio.recuperaPartidas(id);
  if (resultado === true && partidas.length > 0) {
    await servicio.removePartidas(id);
    res.status(200).json({
      message: `Se han eliminado todas las tiradas del jugador con id ${id}`,
    });
  } else if (resultado === true && partidas.length === 0) {
    res.status(200).json({
      message: `El jugador con id ${id} no tiene partidas que borrar`,
    });
  } else {
    res.status(200).send({
      message: 'No existen jugadores con ese id ',
    });
  }
};
//Devuelve todos los jugadores y ratio partidas ganadas
const player = async (req, res) => {
  try {
    let jugadores = await servicio.ratioPartidasGanadas();
    res.status(201).json({
      Jugadores: jugadores,
    });
  } catch (error) {
    res.status(400).send({
      error: 'No existen jugadores, por favor cree un jugador',
    });
  }
};

// Lista las partidas de un jugador concreto
const listaPartidas = async (req, res) => {
  let id = req.params.id;
  let existe = await servicio.checkPlayerId(id);
  if (existe === true) {
    const resultado = await servicio.recuperaPartidas(id);
    res.status(200).json(resultado);
  } else {
    res.status(404).json({
      message: 'El jugador introducido no exite',
    });
  }
};
//Devuelve el ranking de todos los jugadores
const allRanking = async (req, res) => {
  try {
    const results = await servicio.allRanking();
    res.status(200).send(results);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
//Devuelve el mejor del ranking
const winner = async (req, res) => {
  try {
    const resultado = await servicio.allRanking();
    res.status(200).json(resultado[0]);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
//Devuelve el peor del ranking que haya jugado al menos una partida
const loser = async (req, res) => {
  try {
    const resultado = await servicio.allRanking();
    res.status(200).json(resultado[resultado.length - 1]);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = {
  player,
  deletePartidas,
  tiradaDados,
  listaPartidas,
  allRanking,
  winner,
  loser,
};
