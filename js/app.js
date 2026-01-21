let valorTotal = 0;
limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value; 
  if (quantidade <= 0) {
    alert('Insira uma quantidade válida!');
    return;
  } 
  let preço = valorUnitario * quantidade;
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`
  valorTotal = valorTotal + preço;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${valorTotal}`;
  document.getElementById('quantidade').value = '';
  
} 



function limpar() {
  valorTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$0';
  document.getElementById('quantidade').value = '';

}