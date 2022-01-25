"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    /* Agregar un usuario */
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('--------------Actualizando Usuario--------------');
        console.log(this.lista);
    }
    /* Obtener toda la Lista de Usuarios conextados */
    getLista() {
        return this.lista;
    }
    /* Obtener un Uusario */
    getUsuario(id) {
        return this.lista.find(usuario => {
            return usuario.id === id;
        });
    }
    /* Obtener usuario en una sala en particular */
    getUsuarioEnSala(sala) {
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        });
    }
    /* Borrar un usuario cuando sale del chat */
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        });
    }
}
exports.UsuariosLista = UsuariosLista;
