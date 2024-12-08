const WebSocket = require('ws');

// Crear un servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

// Cuando un cliente se conecta
wss.on('connection', ws => {
  console.log('Nuevo cliente conectado');

  // Enviar un mensaje al cliente
  ws.send('Hello, World!');

  // Recibir mensajes del cliente
  ws.on('message', message => {
    console.log(`Mensaje recibido: ${message}`);
  });
});

console.log('Servidor WebSocket corriendo en ws://localhost:8080');
