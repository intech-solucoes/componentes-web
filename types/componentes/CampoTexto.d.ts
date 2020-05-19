import React from 'react';
export declare enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}
export declare enum PosicaoTituloCampoTexto {
    esquerda = 0,
    cima = 1
}
interface Props {
    contexto: any;
    nome: string;
    valor: string | number | Date;
    titulo?: string;
    desabilitado?: boolean;
    mascara?: string;
    max?: number;
    min?: number;
    obrigatorio?: boolean;
    onBlur?: any;
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
    posicaoTitulo?: PosicaoTituloCampoTexto;
    tituloClassName?: any;
}
export declare class CampoTexto extends React.Component<Props> {
    static defaultProps: {
        posicao: PosicaoTituloCampoTexto;
    };
    renderLabel(): JSX.Element;
    renderBotaoGrupo(): JSX.Element;
    mountCampo(valor: any): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
