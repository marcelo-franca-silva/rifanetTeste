function processarLogin(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exibe os dados no console (pode ser útil para debugar)
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Aqui você pode adicionar lógica de validação ou autenticação, se necessário

    // Simula uma verificação bem-sucedida e redireciona o usuário
    window.location.href = "home.html"; // Altere para a página de destino
  }