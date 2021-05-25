class Refugiados {
    constructor() {
        this._refugiados = [];
    }
    adiciona(refugiado) {
        this._refugiados.push(refugiado);
    }
    retornaArray() {
        return [].concat(this._refugiados);
    }
}
