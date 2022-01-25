"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.desconectar = desconectar;
// ESCUCHAR MENSAJES
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log("Mensaje recibido", payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
