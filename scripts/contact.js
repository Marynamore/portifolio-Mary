document.getElementById('contato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;

  const mailtoLink = `mailto:marinaoliverbri674@gmail.com?subject=Contato de ${encodeURIComponent(nome)}&body=${encodeURIComponent(msg)}%0A%0ADe:${encodeURIComponent(email)}`;

  window.location.href = mailtoLink;

  // Mensagem de confirmação (opcional, já que o cliente de email será aberto)
  alert('Seu email será enviado em breve pelo seu cliente de email.');

  // Opcional: Resetar o formulário após o "envio"
  document.getElementById('contato').reset();
});