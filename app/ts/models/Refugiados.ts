class Refugiados {
    private _refugiados: Refugiado[] = [];

    adiciona(refugiado: Refugiado) {
        this._refugiados.push(refugiado);
    }

    retornaArray(): Refugiado[] {
        return [].concat(this._refugiados);
    }
}