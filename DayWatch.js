
var img = window.document.getElementById('imagem')
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();

    const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    const hora = zeroFill(now.getHours())

    document.getElementById('data-hora').innerHTML = dataHora;

    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}, 1000);