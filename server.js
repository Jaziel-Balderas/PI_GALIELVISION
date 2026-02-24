const express = require('express');
const os = require('os');
const app = express();

const PORT = 3000;

app.use(express.static(__dirname));

// Obtener tu IP local automáticamente
const interfaces = os.networkInterfaces();
let ipLocal = 'localhost';
for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            ipLocal = alias.address;
        }
    }
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`PC:      http://localhost:${PORT}/index.html`);
    console.log(`Celular: http://${ipLocal}:${PORT}/index.html`);
});