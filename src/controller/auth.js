const mongoose = require('mongoose');
const Jugador = require('../models/jugador');
const servicio = require('../services/services');


// function singUp(req, res ) {
//     const jugador  = new Jugador({
//         nombre : req.body.nombre,
//         psw : req.body.psw
//     })

//     jugador.save((err) => {
        
//         if (err) res.status(500).send({ message: 'Error al crear el jugador' })
        
//         return res.status(200).send({ token: servicio.createToken(jugador) })
//     })

// }

function login(req, res) {

    Jugador.find({nombre: req.body.nombre, psw: req.body.psw }, (err, jugador) => {
        if (err) res.status(500).send({ message: 'Error al logearse el jugador' })
        if (!jugador) res.status(404).send({ message: 'No existe el usuario ' })
        
        req.jugador = jugador
        res.status(200).send({
            message: ' Te has logeado correctamente',
            token: servicio.createToken(jugador)
        }) 
    })
    
}

module.exports =  login


