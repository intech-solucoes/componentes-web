import { Component } from "react";
export declare enum PosicaoTituloCombo {
    esquerda = 0,
    cima = 1
}
interface Props {
    contexto: any;
    nome: string;
    valor: string | number;
    nomeMembro?: string;
    valorMembro?: string;
    desabilitado?: boolean;
    titulo?: string;
    obrigatorio?: boolean;
    onChange?: Function;
    opcoes?: Array<any>;
    padrao?: any;
    tamanhoTitulo?: string;
    tamanhoCampo?: string;
    textoVazio?: string;
    parent?: any;
    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;
    tituloOculto?: boolean;
    posicaoTitulo?: PosicaoTituloCombo;
    tituloClassName?: any;
}
export declare class Combo extends Component<Props> {
    erros: Array<string>;
    possuiErros: boolean;
    static defaultProps: {
        padrao: string;
        opcoes: any[];
        labelOculta: boolean;
        posicao: PosicaoTituloCombo;
    };
    componentDidMount: () => Promise<void>;
    validar: () => void;
    onChange: (e: Event) => Promise<void>;
    renderBotaoGrupo(): JSX.Element;
    mountCombo(): JSX.Element;
    renderCombo(): JSX.Element;
    renderLabel(): JSX.Element;
    render(): JSX.Element;
}
export {};
