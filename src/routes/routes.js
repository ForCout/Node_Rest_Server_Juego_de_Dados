const router = require('express').Router();
const controller = require('../controller/controller');
const controllerJugador = require('../controller/controllerJugador');
const controllerAuth = require('../controller/auth');
const auth = require('../middlewares/auth');

/* ROUTES */


//Crea un jugador
router.post('/players',auth, controllerJugador.insertJugador);

// Modifica el nom del jugador
router.put('/players', auth, controllerJugador.actualizaNombre);

// Un jugador específic realitza una tirada dels daus.
router.post('/players/:id/games', auth, controller.tiradaDados);

// Elimina les tirades del jugador
router.delete('/players/:id/games', auth, controller.deletePartidas);

//Retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
router.get('/players', auth, controller.player);

//Retorna el llistat de jugades per un jugador.
router.get('/players/:id/games', auth, controller.listaPartidas);

//Retorna el ranking mig de tots els jugadors del sistema.
router.get('/players/ranking', auth, controller.allRanking);

//Retorna el jugador amb pitjor percentatge d’èxit
router.get('/players/ranking/loser', auth, controller.loser);

//Retorna el jugador amb millor percentatge d’èxit
router.get('/players/ranking/winner', auth, controller.winner);

//Ruta para hacer login y generar token
router.post('/login', controllerAuth);

module.exports = router;
