const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Servir el archivo HTML
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Responder a otras rutas con un 404
        res.writeHead(404);
        res.end('Página no encontrada');
    }
});

// Crear un servidor WebSocket utilizando el servidor HTTP
const wss = new WebSocket.Server({ server });

// Manejar conexiones WebSocket
wss.on('connection', ws => {
    console.log('Nuevo cliente conectado');
    ws.send('Hello, World!');

    ws.on('message', message => {
        console.log(`Mensaje recibido: ${message}`);
        ws.send(`Echo: ${message}`);
    });
});

// Iniciar el servidor en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor HTTP y WebSocket corriendo en http://127.0.0.1:8080');
});
