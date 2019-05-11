import React from "react";
import { TipoBotao } from "./Botao";
interface Props {
    checked?: boolean;
    icone?: string;
    iconeDireita?: boolean;
    tituloAtivo?: string;
    tituloInativo?: string;
    iconeAtivo?: string;
    iconeInativo?: string;
    tipoAtivo?: TipoBotao;
    tipoInativo?: TipoBotao;
    className?: string;
    onChange: Function;
}
export declare class BotaoSwitch extends React.Component<Props> {
    static defaultProps: {
        tipoAtivo: TipoBotao;
        tipoInativo: TipoBotao;
        checked: boolean;
        iconeAtivo: string;
        iconeInativo: string;
    };
    onChange: () => Promise<void>;
    render(): JSX.Element;
}
export {};
