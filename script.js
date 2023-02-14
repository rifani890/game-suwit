function getPilihanComputer() {
    // menangkap pilihan computer
    // membangkitkan bilangan random
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    // menentukan rules
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}

function random() {
    const imgComputer = document.querySelector('.img-computer');
    const img = ['gajah', 'semut', 'orang'];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + img[i++] + '.png');
        if (i == img.length) {
            i = 0;
        }
    }, 100)
}

const pil = document.querySelectorAll('li img');
pil.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanGetComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanGetComputer, pilihanPlayer);
        random();
        setTimeout(function () {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanGetComputer + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)
    })
})