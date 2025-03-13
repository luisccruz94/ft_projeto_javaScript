let tarefasLista = [];

function adicionarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (tarefa === '') {
        mensagem.textContent = "Digite uma tarefa para adicioná-la";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "green";

        tarefasLista.push(tarefa);
        renderizarTarefas();
    }

    inputTarefa.value = "";
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    for (let i = 0; i < tarefasLista.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefasLista[i];
        listaTarefas.appendChild(novaTarefa);
    }
}
