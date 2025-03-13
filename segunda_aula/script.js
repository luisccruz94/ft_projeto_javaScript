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
        novaTarefa.textContent = tarefasLista[i]
        
        let botaoRemover = document.createElement('button')
        botaoRemover.className = " remover"
        botaoRemover.textContent = "remover"
        botaoRemover.onclick = () => removerTarefa(i)
        
        
        let botaoEditar = document.createElement('button')
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'editar'
        botaoEditar.onclick = () => editarTarefa(i)
        

      
      
      

        novaTarefa.appendChild(botaoRemover)

        novaTarefa.appendChild(botaoEditar)

        listaTarefas.appendChild(novaTarefa)
        
      }
}

function removerTarefa(i){
   tarefasLista.splice(i, 1)
   renderizarTarefas()
}
function editarTarefa (i){
   let tarefaEditada = prompt(" Edite a Tarefa: ")
   if (tarefaEditada.trim() !== ""){
      tarefasLista[i] = tarefaEditada
      renderizarTarefas()
   }
} 
function limparLista(){
   tarefasLista = 0
   renderizarTarefas()
   const mensagem = document.getElementById('mensagem')
   mensagem.textContent = "Lista Limpa com Sucesso "
}