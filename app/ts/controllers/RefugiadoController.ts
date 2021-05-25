class RefugiadoController {

    private _inputFoto: JQuery;
    private _inputNome: JQuery;
    private _inputSexo: JQuery;
    private _inputDataNascimento: JQuery;
    private _inputPais: JQuery;
    private _inputLocal: JQuery;
    private _refugiados = new Refugiados();
    private _refugiadosView = new RefugiadosView('#refugiadosView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputFoto = $('#foto');
        this._inputNome = $('#nome');
        this._inputSexo = $('#sexo');
        this._inputDataNascimento = $('#dataNascimento');
        this._inputPais = $('#pais');
        this._inputLocal = $('#estado');
        this._refugiadosView.update(this._refugiados);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const refugiado = new Refugiado(
            this._inputFoto.val(),
            this._inputNome.val(),
            this._inputSexo.val(),
            new Date(this._inputDataNascimento.val().replace(/-/g, ',')),
            this._inputPais.val(),
            this._inputLocal.val()
        );

        this._refugiados.adiciona(refugiado);
        this._refugiadosView.update(this._refugiados);
        this._mensagemView.update('Refugiado alocado com sucesso!');
    }
}

