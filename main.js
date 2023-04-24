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

        //Cria um novo elemento "li"
        const novaTarefa = document.createElement('li');

        //Adiciona o valor de 'inputTarefa' ao 'li'
        novaTarefa.innerHTML += inputTarefa.value;

        //Adiciona a classe 'item_tarefa'
        novaTarefa.classList.add('item_tarefa');

        //Adiciona o evento de escuta no novo 'item_tarefa' e uma função que adiciona uma nova classe 'tarefaCompleta'
        novaTarefa.addEventListener('dblclick', () => novaTarefa.classList.toggle('tarefaCompleta'));

        //Adiciona o evento de escuta e a função 'itemSelecionado'
        novaTarefa.addEventListener('click', () => novaTarefa.classList.toggle('itemSelecionado'));

        //'listaDeTarefa' "adota" 'novaTarefa'
        listaDeTarefa.appendChild(novaTarefa);

        //Limpa o campo 'inputTarefa'
        inputTarefa.value = ``;

        //'inputTarefa' ganha o foco para adicionar novas tarefas.
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
