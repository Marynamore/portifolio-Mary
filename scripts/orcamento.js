document.addEventListener('DOMContentLoaded', function() {
  const formOrca = document.querySelector('.form-orca');

  formOrca.addEventListener('submit', function(event) {
    event.preventDefault();

    const qtd = document.getElementById('qtd').value;
    const js = document.getElementById('js').checked;
    const layoutSim = document.getElementById('layout-sim').checked;
    const layoutNao = document.getElementById('layout-nao').checked;
    const prazo = document.getElementById('prazo').value;

    let layout = '';
    if (layoutSim) {
      layout = 'Precisa de Layout';
    } else if (layoutNao) {
      layout = 'Já tem Layout';
    } else {
      layout = 'Não Especificado';
    }

    const subjectOrcamento = 'Pedido de Orçamento';
    const bodyOrcamento = `Pedido de Orçamento:\n\nQuantidade de Páginas: ${qtd}\nPrecisa de Script JS: ${js ? 'Sim' : 'Não'}\nLayout: ${layout}\nPrazo (aproximado): ${prazo}`;

    const mailtoLinkOrcamento = `mailto:marinaoliverbri674@gmail.com?subject=${encodeURIComponent(subjectOrcamento)}&body=${encodeURIComponent(bodyOrcamento)}`;

    window.location.href = mailtoLinkOrcamento;

    alert('Seu pedido de orçamento será enviado em breve pelo seu cliente de email.');

    // Opcional: Resetar o formulário de orçamento após o "envio"
    formOrca.reset();
  });
});