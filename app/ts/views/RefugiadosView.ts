class RefugiadosView extends View<Refugiados>{

    template(modelo: Refugiados): string {

        return `${modelo.retornaArray().map(refugiado => `
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                
                    <img src="${refugiado.foto}" alt="...">
                    <div class="caption">
                        <h3>${refugiado.nome}</h3>
                        <p><b>Sexo: </b>${refugiado.sexo}</p>
                        <p><b>País de Origem: </b>${refugiado.pais}</p>
                        <p><b>Local de alocação: </b>${refugiado.local}</p>
                    </div>
                </div>
            </div>`
        ).join('')
            }
            </tbody>

            <tfoot>
            </tfoot>
        </table>`
    }
}