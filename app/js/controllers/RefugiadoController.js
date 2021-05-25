class RefugiadoController {
    constructor() {
        this._refugiados = new Refugiados();
        this._refugiadosView = new RefugiadosView('#refugiadosView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputFoto = $('#foto');
        this._inputNome = $('#nome');
        this._inputSexo = $('#sexo');
        this._inputDataNascimento = $('#dataNascimento');
        this._inputPais = $('#pais');
        this._inputLocal = $('#estado');
        this._refugiadosView.update(this._refugiados);
    }
    adiciona(event) {
        event.preventDefault();
        const refugiado = new Refugiado(this._inputFoto.val(), this._inputNome.val(), this._inputSexo.val(), new Date(this._inputDataNascimento.val().replace(/-/g, ',')), this._inputPais.val(), this._inputLocal.val());
        this._refugiados.adiciona(refugiado);
        this._refugiadosView.update(this._refugiados);
        this._mensagemView.update('Refugiado alocado com sucesso!');
    }
}
