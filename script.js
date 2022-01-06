const ligar = document.getElementById('on');
const desligar = document.getElementById('off');
const trocar = document.getElementById('trocar');
const lampada = document.getElementById('lampada');
const aviso = document.getElementById('aviso');

function lampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

function ligarLampada () {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg';
    } 
}

function desligarLampada () {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
    } 
}

function quebrarLampada () {
    lampada.src = 'img/quebrada.jpg'
    aviso.textContent = '';
}

function trocarLampada () {
    lampada.src = 'img/desligada.jpg';
}

lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);
lampada.addEventListener('click', quebrarLampada);
trocar.addEventListener('click', trocarLampada);
