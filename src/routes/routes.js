const router = require('express').Router();
const controller = require('../controller/controllerPlayers');
const controllerGames = require('../controller/controllerGames')

/* ROUTES */

//Crea un jugador
router.post('/players', controller.insertJugador);

// Modifica el nom del jugador
router.put('/players', controller.actualizaNombre);

// Un jugador específic realitza una tirada dels daus.
router.post('/players/:id/games', controllerGames.tiradaDados);

// Elimina les tirades del jugador
router.delete('/players/:id/games', controllerGames.deletePartidas);

//Retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
router.get('/players', controllerGames.player);

//Retorna el llistat de jugades per un jugador.
router.get('/players/:id/games', controllerGames.listaPartidas);

//Retorna el ranking mig de tots els jugadors del sistema.
router.get('/players/ranking', controllerGames.allRanking);

//Retorna el jugador amb pitjor percentatge d’èxit
router.get('/players/ranking/loser', controllerGames.loser);

//Retorna el jugador amb millor percentatge d’èxit
router.get('/players/ranking/winner', controllerGames.winner);

module.exports = router;
