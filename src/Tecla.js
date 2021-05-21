import { Piano } from '@tonejs/piano';

const piano = new Piano({
    velocities: 5
});

let loaded = false;

piano.toDestination();
piano.load().then(() => {
    loaded = true;
});

let keyMapping = {
    'Do1': 'C4',
    'DoS1': 'C#4',
    'Re1': 'D4',
    'ReS1': 'D#4',
    'Mi1': 'E4',
    'Fa1': 'F4',
    'FaS1': 'F#4',
    'Sol1': 'G4',
    'SolS1': 'G#4',
    'La1': 'A4',
    'LaS1': 'A#4',
    'Si1': 'B4',
    'Do2': 'C5',
    'DoS2': 'C#5',
    'Re2': 'D5',
    'ReS2': 'D#5',
    'Mi2': 'E5',
    'Fa2': 'F5',
    'FaS2': 'F#%',
    'Sol2': 'G5',
    'SolS2': 'G#5',
    'La2': 'A5',
    'LaS2': 'A#5',
    'Si2': 'B5',
    'Do3': 'C6',
}

export default function Tecla({ nota, pulsada }) {
    let negra = ["DoS1", "ReS1", "FaS1", "SolS1", "LaS1", "DoS2", "ReS2", "FaS2", "SolS2", "LaS2"].indexOf(nota) >= 0;
    let clase = "Tecla " + nota + (negra ? " negra" : " blanca");
    if (pulsada) {
        clase += " pulsada";
        if (loaded) {
            piano.keyDown(keyMapping[nota]);
        }
    } else {
        if (loaded) {
            piano.keyUp(keyMapping[nota]);
        }
    }

    return <div className={clase} />
}
