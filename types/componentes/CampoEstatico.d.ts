import React from 'react';
export declare enum TipoCampoEstatico {
    texto = 0,
    dinheiro = 1,
    data = 2
}
export declare enum PosicaoTituloCampoEstatico {
    esquerda = 0,
    cima = 1
}
interface Props {
    valor: string | number;
    id?: string;
    obrigatorio?: boolean;
    tipo?: TipoCampoEstatico;
    titulo?: string;
    tamanhoTitulo?: string;
    posicaoTitulo?: PosicaoTituloCampoEstatico;
    tamanhoCampo?: string;
}
export declare class CampoEstatico extends React.Component<Props> {
    static defaultProps: {
        tipo: TipoCampoEstatico;
        posicao: PosicaoTituloCampoEstatico;
    };
    parseValue(): React.ReactText;
    renderLabel(): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
