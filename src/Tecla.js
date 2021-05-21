import { useState } from 'react';

export default function Tecla({ nota, boton }) {
    let negra = ["DoS1", "ReS1", "FaS1", "SolS1", "LaS1", "DoS2", "ReS2", "FaS2", "SolS2", "LaS2"].indexOf(nota) >= 0;
    let clase = "Tecla " + nota + (negra ? " negra" : " blanca");
    const [pulsada, setPulsada] = useState(false);
    if (pulsada) {
        clase += " pulsada";
    }

    function onKeyDown(e) {
        if (!pulsada) {
            setPulsada(true);
            // TODO comenzar audio
        }
    }

    function onKeyUp(e) {
        if (pulsada) {
            setPulsada(false);
            // TODO terminar audio
        }
    }

    return <div className={clase} onKeyDown={onKeyDown} onKeyUp={onKeyUp} />
}
