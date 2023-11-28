function Escolher(idioma) {
    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            document.getElementById('historia').innerHTML = texto.historia;
            document.getElementById('herois').innerHTML = texto.herois;
            document.getElementById('mapas').innerHTML = texto.mapas;
            document.getElementById('texto1').innerHTML = texto.texto1;
            document.getElementById('jogue').innerHTML = texto.jogue;
        })}