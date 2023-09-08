const http = require('http');
const data = require('./utils/data'); // Asegúrate de que la ruta sea correcta.

http.createServer((req, res) => {
    const { url } = req;

    res.setHeader("Access-Control-Allow-Origin", "*");

    if (url.includes("/rickandmorty/character/")) {
        // Extraer el ID de la URL
        const idString = url.split('/').pop();
        const id = parseInt(idString, 10); // Convertir el ID a número

        // Verificar si el ID es un número válido
        if (isNaN(id)) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('ID no válido');
            return;
        }

        // Buscar el personaje con el ID en data.js
        const character = data.find(character => character.id === id);

        if (character) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Personaje no encontrado');
        }
    } else {
        // Manejar otras rutas o enviar una respuesta por defecto
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
}).listen(3000);
