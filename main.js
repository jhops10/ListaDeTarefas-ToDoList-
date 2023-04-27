//Variáveis Globais
const inputTarefa = document.querySelector('#inserir_tarefa');
const botaoAddTarefa = document.querySelector('#botao_submit');
const listaDeTarefa = document.querySelector('#listaTarefa');
const limparLista = document.querySelector('#limparLista');
const botaoRemoverSelecionadas = document.querySelector('#removerSelecionadas');
const botaoRemoverCompletas = document.querySelector('#removerCompletas');
const botaoUp = document.querySelector('#botaoUp');
const botaoDown = document.querySelector('#botaoDown');
const botaoSalvarTarefas = document.querySelector('#salvarTarefas');


//Eventos de 'Escuta'
botaoAddTarefa.addEventListener('click', addTarefa);
limparLista.addEventListener('click', limparListaTarefa);
botaoRemoverSelecionadas.addEventListener('click', removerSelecionados);
botaoRemoverCompletas.addEventListener('click', removerCompletas);




//Funções
function addTarefa() {

    if (inputTarefa.value == '') {

        alert('ERRO! Você deve preencher o campo "Adicionar Tarefa"');
    } else {

        
        const novaTarefa = document.createElement('li');

        
        novaTarefa.innerHTML += inputTarefa.value;

        
        novaTarefa.classList.add('item_tarefa');

        
        novaTarefa.addEventListener('dblclick', () => novaTarefa.classList.toggle('tarefaCompleta'));

        
        novaTarefa.addEventListener('click', () => novaTarefa.classList.toggle('itemSelecionado'));

        
        listaDeTarefa.appendChild(novaTarefa);

        
        inputTarefa.value = ``;

        
        inputTarefa.focus();
    }
}

function limparListaTarefa() {
    listaDeTarefa.innerHTML = ``;
}


function removerSelecionados() {
    const itensParaRemover = document.querySelectorAll('.itemSelecionado');
    for(let index = 0; index < itensParaRemover.length; index++){
        if (itensParaRemover[index].classList.contains('itemSelecionado')){
            listaDeTarefa.removeChild(itensParaRemover[index]);
        }

    }
}

function removerCompletas() {
    const itensParaRemover = document.querySelectorAll('.tarefaCompleta');
    for(let index = 0; index < itensParaRemover.length; index++){
        if (itensParaRemover[index].classList.contains('tarefaCompleta')){
            listaDeTarefa.removeChild(itensParaRemover[index]);
        }

    }
}
