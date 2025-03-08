function adicionarTarefa() {
   // Obtém o elemento de entrada (input) onde o usuário digita a tarefa
   const inputTarefa = document.getElementById('inputTarefa');

   // Obtém o valor digitado no input e remove espaços extras no início e no final
   let tarefa = inputTarefa.value.trim();

   // Obtém o elemento que exibirá mensagens para o usuário
   const mensagem = document.getElementById("mensagem");

   // Verifica se o campo de entrada está vazio
   if (tarefa == '') {
       // Define a mensagem de erro e a exibe no elemento de mensagem
       let mensagemErro = "Digite uma tarefa para adicioná-la";
       mensagem.textContent = mensagemErro;

       mensagem.style.color = "red"
   } else {
       // Define a mensagem de sucesso e a exibe no elemento de mensagem
       let mensagemSucesso = "Tarefa adicionada com sucesso!";
       mensagem.textContent = mensagemSucesso;
       
       mensagem.style.color = "green";
       
       // Obtém o elemento da lista de tarefas no HTML
       const listaTarefas = document.getElementById("listaTarefas");

       // Cria um novo elemento <li> para adicionar à lista
       let novaTarefa = document.createElement("li");

       // Define o texto do novo item da lista como a tarefa digitada pelo usuário
       novaTarefa.textContent = tarefa;

       // Adiciona o novo item (<li>) à lista de tarefas (<ul> ou <ol>)
       listaTarefas.appendChild(novaTarefa);
   }

   // Limpa o campo de entrada após adicionar a tarefa
   inputTarefa.value = "";
}
