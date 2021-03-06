import express from 'express';
import {SERVER_PORT} from '../global/environment'


import http from 'http';
import socketIO from 'socket.io';

import * as socket from './../sockets/sockets';

export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, {
            cors: {
                origin: true,
                credentials: true
            }
        });

        this.escucharSokets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private escucharSokets() {
        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            // console.log('Cliente conectado');
            // console.log(cliente.id);

            /* Conectar Cliente */
            socket.conectarCliente(cliente, this.io);

            /* Configurar Usuario */
            socket.configurarUsuario(cliente, this.io);

            /* Obtener Usuarios activos */
            socket.obtenerUsuarios(cliente, this.io);

            // Escuchar Mensajes
            socket.mensaje(cliente, this.io);

            // Desconectar socket
            socket.desconectar(cliente, this.io);

        });

    }

    start(callback: VoidFunction) {
        this.httpServer.listen(this.port, callback);
    }
}

