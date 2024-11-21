const dateDoEvento = new Date('Jun 21, 2025 19:00:00');
const timeStampDoEvento = dateDoEvento.getTime();

const contadorDeTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const DistanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteEvento = Math.floor(DistanciaAteEvento / diasEmMs); 
    const horasAteEvento = Math.floor((DistanciaAteEvento % diasEmMs) / horasEmMs); 
    const minutosAteEvento = Math.floor((DistanciaAteEvento % horasEmMs) / minutosEmMs); 
    const segundosAteEvento = Math.floor((DistanciaAteEvento % minutosEmMs) / segundosEmMs); 

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(DistanciaAteEvento < 0 ) {
        clearInterval(contadorDeTempo)
        document.getElementById('contador').innerHTML = 'Evento inspirado'
    }
}, 1000);
