const form = document.getElementById('formPesquisa');
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const   
 escolaridade = document.getElementById('escolaridade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    // Exibe a mensagem de agradecimento
    mensagemDiv.style.display = 'block';
    form.style.display = 'none';

    // Aqui você pode enviar os dados para um servidor, armazenar em um banco de dados, etc.
    // Exemplo de envio para o console (substitua por sua lógica):
    console.log('Dados enviados:', { nome, telefone, escolaridade, cidade, sexo });

    // Limpa os campos do formulário (opcional, se quiser manter os dados)
    // form.reset();
});