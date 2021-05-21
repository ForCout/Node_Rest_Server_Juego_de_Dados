# Node_Rest_Server_Mysql

Arrancamos la aplicación con npm start

En la rama master está nivel 1 Mysql, en la carpeta scripts esta el fichero con la bd para lanzarla

En la rama mongo está Nivel 2 MongoDB

En la rama jwt está nivel 3 en este nivel he añadido a la clase jugador el campo password, he creado la ruta login
y he protegido todas las rutas menos: router.post('/players', controllerJugador.insertJugador); para poder crear un jugador,
una vez creado el jugador, para tener autorización para poder usar las rutas hay que logearse con nombre y password
se generará un token y con el se podran acceder al resto de rutas de la aplicación.
