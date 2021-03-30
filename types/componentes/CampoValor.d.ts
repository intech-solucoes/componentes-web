import React from "react";
export declare enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}
export declare enum PosicaoTituloCampoValor {
    esquerda = 0,
    cima = 1
}
interface Props {
    contexto: any;
    nome: string;
    valor: number | string;
    titulo?: string;
    desabilitado?: boolean;
    mascara?: string;
    max?: number;
    min?: number;
    obrigatorio?: boolean;
    onBlur?: any;
    onChange?: any;
    parent?: any;
    placeholder?: string;
    rows?: number;
    textarea?: boolean;
    tamanhoCampo?: string;
    tamanhoTitulo?: string;
    tipo?: string;
    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;
    posicaoTitulo?: PosicaoTituloCampoValor;
    tituloClassName?: any;
}
export declare class CampoValor extends React.Component<Props> {
    static defaultProps: {
        posicao: PosicaoTituloCampoValor;
    };
    renderLabel(): JSX.Element;
    renderBotaoGrupo(): JSX.Element;
    mountCampo(valor: any): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
