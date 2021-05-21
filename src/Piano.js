import { useState } from 'react';
import Tecla from './Tecla.js'

export default function Piano(props) {
    let [currentKeys, setCurrentKeys] = useState({});

    function onKeyDown(e) {
        let newCurrentKeys = {...currentKeys};
        newCurrentKeys[e.key] = true;
        setCurrentKeys(newCurrentKeys);
    }

    function onKeyUp(e) {
        let newCurrentKeys = {...currentKeys};
        delete newCurrentKeys[e.key];
        setCurrentKeys(newCurrentKeys);
    }

    function pulsada(boton) {
        return !!currentKeys[boton];
    }

    return <div className="Piano" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
        <Tecla nota="Do1" pulsada={pulsada("z")} />
        <Tecla nota="DoS1" pulsada={pulsada("s")} />
        <Tecla nota="Re1" pulsada={pulsada("x")} />
        <Tecla nota="ReS1" pulsada={pulsada("d")} />
        <Tecla nota="Mi1" pulsada={pulsada("c")} />
        <Tecla nota="Fa1" pulsada={pulsada("v")} />
        <Tecla nota="FaS1" pulsada={pulsada("g")} />
        <Tecla nota="Sol1" pulsada={pulsada("b")} />
        <Tecla nota="SolS1" pulsada={pulsada("h")} />
        <Tecla nota="La1" pulsada={pulsada("n")} />
        <Tecla nota="LaS1" pulsada={pulsada("j")} />
        <Tecla nota="Si1" pulsada={pulsada("m")} />
        <Tecla nota="Do2" pulsada={pulsada("q")} />
        <Tecla nota="DoS2" pulsada={pulsada("2")} />
        <Tecla nota="Re2" pulsada={pulsada("w")} />
        <Tecla nota="ReS2" pulsada={pulsada("3")} />
        <Tecla nota="Mi2" pulsada={pulsada("e")} />
        <Tecla nota="Fa2" pulsada={pulsada("r")} />
        <Tecla nota="FaS2" pulsada={pulsada("5")} />
        <Tecla nota="Sol2" pulsada={pulsada("t")} />
        <Tecla nota="SolS2" pulsada={pulsada("6")} />
        <Tecla nota="La2" pulsada={pulsada("y")} />
        <Tecla nota="LaS2" pulsada={pulsada("7")} />
        <Tecla nota="Si2" pulsada={pulsada("u")} />
        <Tecla nota="Do3" pulsada={pulsada("i")} />
    </div>
}
