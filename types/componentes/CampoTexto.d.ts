import React from 'react';
export declare enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}
interface Props {
    contexto: any;
    nome: string;
    valor: string;
    desabilitado?: boolean;
    label?: string;
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
    tamanhoLabel?: string;
    titulo?: string;
    tipo?: string;
    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    posicaoBotao?: PosicaoBotaoGrupo;
    tituloBotao?: string;
}
export declare class CampoTexto extends React.Component<Props> {
    static defaultProps: {
        posicao: PosicaoBotaoGrupo;
    };
    renderLabel(): JSX.Element;
    renderBotaoGrupo(): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
