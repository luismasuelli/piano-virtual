export default function Tecla({ nota, pulsada }) {
    let negra = ["DoS1", "ReS1", "FaS1", "SolS1", "LaS1", "DoS2", "ReS2", "FaS2", "SolS2", "LaS2"].indexOf(nota) >= 0;
    let clase = "Tecla " + nota + (negra ? " negra" : " blanca");
    if (pulsada) {
        clase += " pulsada";
        // TODO empezar audio
    } else {
        // TODO terminar audio
    }

    return <div className={clase} />
}
