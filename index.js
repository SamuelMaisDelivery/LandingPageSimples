    // Ao clicar no botão comprar, exibe uma mensagem simpática
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const produto = card.getAttribute('data-product');
        alert(`Obrigado por escolher o produto: ${produto}! Em breve entraremos em contato.`);
      });
    });

    // Efeito sutil de brilho ao passar o mouse no botão
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 8px 2px rgba(37, 117, 252, 0.8)';
        button.style.transition = 'box-shadow 0.3s ease';
      });
      button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none';
      });
    });