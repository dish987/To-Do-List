const meuApp = {
    tarefas: JSON.parse(localStorage.getItem('minhasTarefas')) || [],
    
    input: document.getElementById('taskInput'),
    periodoSelect: document.getElementById('periodoInput'),
    contador: document.getElementById('contador'),
    modal: document.getElementById('modalErro'),

    adicionar(){
        const valorUsuario = this.input.value.trim();
        const periodo = this.periodoSelect.value;

        if(valorUsuario !== ''){
            this.tarefas.push({valorUsuario, periodo});
            this.input.value = ''
            this.renderizar();
        } else{
            this.abrirModal();
        }
    },

    remover(indice) {
        this.tarefas.splice(indice, 1);
        this.renderizar();
    },
    
    renderizar(){
        localStorage.setItem('minhasTarefas', JSON.stringify(this.tarefas));

        // Limpar listas
        const listaManha = document.getElementById('lista-manha');
        const listaTarde = document.getElementById('lista-tarde');
        const listaNoite = document.getElementById('lista-noite');

        listaManha.innerHTML = '';
        listaTarde.innerHTML = '';
        listaNoite.innerHTML = '';

        this.tarefas.forEach((item, indice) => {
            const htmlTarefa = 
            `
                <li>
                    <span>${item.valorUsuario}</span>
                    <button class="btn-del" onclick="meuApp.remover(${indice})">x</button>
                </li>
            `

            if(item.periodo === 'manha') listaManha.innerHTML += htmlTarefa;
            else if(item.periodo === 'tarde') listaTarde.innerHTML += htmlTarefa;
            else if(item.periodo === 'noite') listaNoite.innerHTML += htmlTarefa;
        });


        this.contador.innerHTML = this.tarefas.length;
    },

    // Funcoes do modal
    abrirModal() {
        this.modal.classList.add('mostrar-modal');
    },
    
    fecharModal() {
        this.modal.classList.remove('mostrar-modal');
    }
}

meuApp.renderizar();


meuApp.input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') meuApp.adicionar();
})