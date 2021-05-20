class Refugiado {

    private _foto: string;
    private _nome: string;
    private _sexo: string;
    private _data: Date;
    private _pais: string;
    private _local: string;

    constructor(foto: string, nome: string, sexo: string, data: Date, pais: string, local: string) {
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