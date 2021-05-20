class RefugiadosView extends View<Refugiados>{

    template(modelo: Refugiados): string {

        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>NOME</th>
                    <th>SEXO</th>
                    <th>DATA NASCIMENTO</th>
                    <th>PAÍS DE ORIGEM</th>
                    <th>ESTADO DE ALOCAÇÃO</th>
                </tr>
            </thead>

            <tbody>
            ${modelo.retornaArray().map(refugiado =>
            `   <tr> 
                    <td>${refugiado.foto}</td> 
                    <td>${refugiado.nome}</td> 
                    <td>${refugiado.sexo}</td> 
                    <td>${refugiado.data.getDate()}/${refugiado.data.getMonth() + 1}/${refugiado.data.getFullYear()}</td> 
                    <td>${refugiado.pais}</td>                    
                    <td>${refugiado.local}</td>
                </tr> `
        ).join('')
            }
            </tbody>

            <tfoot>
            </tfoot>
        </table>`
    }
}