import React from 'react';
export declare enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}
interface Props {
    contexto: any;
    nome: string;
    valor: string | number;
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
    botaoEsquerda?: boolean;
    tituloBotao?: string;
}
export declare class CampoTexto extends React.Component<Props> {
    renderLabel(): JSX.Element;
    renderBotaoGrupo(): JSX.Element;
    mountCampo(valor: any): JSX.Element;
    renderCampo(): JSX.Element;
    render(): JSX.Element;
}
export {};
