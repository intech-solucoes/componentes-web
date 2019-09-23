import React from 'react';
export declare enum TipoCampoEstatico {
    texto = 0,
    dinheiro = 1,
    data = 2
}
interface Props {
    valor: string | number;
    col?: string;
    id?: string;
    label?: string;
    obrigatorio?: boolean;
    tamanhoCampo?: string;
    tamanhoLabel?: string;
    tipo?: TipoCampoEstatico;
    titulo?: string;
}
export declare class CampoEstatico extends React.Component<Props> {
    static defaultProps: {
        tipo: TipoCampoEstatico;
    };
    parseValue(): React.ReactText;
    renderLabel(): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
