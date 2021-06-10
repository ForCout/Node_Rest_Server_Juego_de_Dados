# Node_Rest_Server_Mysql
Exercicies sprint 4 Dice Game of the IT Academy course
Itinerary Nodejs

# Credentials
The project is structured as follows, in the main branch is the readme with the instructions and 3 branches that are mysql, mongo, jwt.
Each branch fulfills the requirements of the exercise.

# Initializa database
# MySql
Go to the mysql branch, in the scripts folder you will find the database.sql file.

You will find them in the config folder in the dbkeys.js file.

# MongoDB
Open a terminal and navigate  to the project folder<br>
-`mongod`(start mongob daemon, mongodb starts listening)<br>

You will find them in the config folder in the dbconexion.js file.

Exercise jwt has been performed with connection to mongodb

# Running the server 
Leave the previous terminal running and open a new one.<br>
-`npm install`(install all node dependencies)<br>
-`npm start` (start the app)<br>

# Endpoints 
URL’s:
- POST: /players : crea un jugador
- PUT /players : modifica el nom del jugador
- POST /players/{id}/games/ : un jugador específic realitza una tirada dels daus.
- DELETE /players/{id}/games: elimina les tirades del jugador
- GET /players/: retorna el llistat de tots els jugadors del sistema amb el seu   percentatge mig d’èxits
- GET /players/{id}/games: retorna el llistat de jugades per un jugador.
- GET /players/ranking: retorna el ranking mig de tots els jugadors del sistema. És a dir, el percentatge mig d’èxits.
- GET /players/ranking/loser: retorna el jugador amb pitjor percentatge d’èxit
- GET /players/ranking/winner: retorna el jugador amb pitjor percentatge d’èxit

