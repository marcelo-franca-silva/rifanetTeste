const numerosContainer = document.getElementById('numeros');
const pagamentoSection = document.getElementById('pagamento');
const numeroSelecionadoSpan = document.getElementById('numeroSelecionado');
const alerta = document.getElementById('alerta');
const paymentMethods = document.querySelectorAll('input[name="metodo-pagamento"]');
let numeroSelecionado = null;

function gerarNumerosRifa() {
    for (let i = 1; i <= 100; i++) {
        const botao = document.createElement('button');
        botao.textContent = i;
        botao.addEventListener('click', () => selecionarNumero(i, botao));
        numerosContainer.appendChild(botao);
    }
}

function selecionarNumero(numero, botao) {
    if (numeroSelecionado !== null) {
        const botaoAnterior = document.querySelector('.numeros button.selecionado');
        if (botaoAnterior) botaoAnterior.classList.remove('selecionado');
    }

    numeroSelecionado = numero;
    botao.classList.add('selecionado');
    numeroSelecionadoSpan.textContent = numeroSelecionado;
    pagamentoSection.style.display = 'block';
}

function showPaymentMethod() {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.style.display = 'none';
    });
    
    const selectedMethod = document.querySelector('input[name="metodo-pagamento"]:checked').value;
    document.getElementById(selectedMethod).style.display = 'block';
}

paymentMethods.forEach(method => {
    method.addEventListener('change', showPaymentMethod);
});

document.getElementById('confirmarPagamento').addEventListener('click', () => {
    if (numeroSelecionado) {
        const selectedMethod = document.querySelector('input[name="metodo-pagamento"]:checked').value;
        alerta.textContent = `Pagamento do número ${numeroSelecionado} foi confirmado com o método: ${selectedMethod}!`;
    } else {
        alerta.textContent = 'Por favor, selecione um número da rifa antes de confirmar o pagamento.';
    }
});

gerarNumerosRifa();
