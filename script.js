const onOff = document.getElementById('onOff');
const trocar = document.getElementById('trocar');
const lampada = document.getElementById('lampada');
const aviso = document.getElementById('aviso');

function lampadaOnOff () {
    if (onOff.textContent === "Ligar") {
        ligarLampada();
    } else {
        desligarLampada();
    }
}

function lampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

function ligarLampada () {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg';
        onOff.textContent = 'Desligar';
    } 
}

function desligarLampada () {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg';
        onOff.textContent = 'Ligar';
    } 
}


function quebrarLampada () {
    lampada.src = 'img/quebrada.jpg'
    onOff.textContent = 'Ligar';
    aviso.textContent = '';
}

function lampadalLigada() {
    return lampada.src.indexOf('ligada') > -1;
}

function trocarLampada () {
    if (!lampadalLigada()) {
        lampada.src = 'img/desligada.jpg';
    }
}

lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);

onOff.addEventListener('click', lampadaOnOff);
lampada.addEventListener('click', quebrarLampada);
trocar.addEventListener('click', trocarLampada);
