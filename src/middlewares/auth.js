const servicio = require('../services/auth')

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        res.status(403).send({ message: 'No tiene autorización' })
    }
    
    const token = req.headers.authorization.split(' ')[1]
    
    servicio.decodeToken(token) 
        .then(response => {
            req.jugador = response
            next()
                
        })
        .catch(response => {
            res.status(response.status)
        })
    
   

}



module.exports = isAuth