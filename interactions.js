function aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function iniciarSurpresa(){
    var audio = document.getElementById("Mmamama");
    audio.voulme = 0.07
    audio.play()
    aguardar(800).then(() => {
        document.getElementById('todos-os-inutil').style.display = 'none';
        document.getElementById('butaum').style.display = 'none';
        document.getElementById('carta').style.display = 'flex';
    })
}
