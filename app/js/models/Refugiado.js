class Refugiado {
    constructor(foto, nome, sexo, data, pais, local) {
        this._foto = foto;
        this._nome = nome;
        this._sexo = sexo;
        this._data = data;
        this._pais = pais;
        this._local = local;
    }
    get foto() {
        return this._foto;
    }
    get nome() {
        return this._nome;
    }
    get sexo() {
        return this._sexo;
    }
    get data() {
        return this._data;
    }
    get pais() {
        return this._pais;
    }
    get local() {
        return this._local;
    }
}
