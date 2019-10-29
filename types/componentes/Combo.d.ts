import { Component } from "react";
interface Props {
    contexto: any;
    nome: string;
    nomeMembro: string;
    valorMembro: string;
    valor: string;
    desabilitado?: boolean;
    label?: string;
    obrigatorio?: boolean;
    onChange?: Function;
    opcoes?: Array<any>;
    padrao?: string;
    tamanhoLabel?: string;
    tamanhoCampo?: string;
    textoVazio?: string;
    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;
    labelOculta?: boolean;
}
export declare class Combo extends Component<Props> {
    erros: Array<string>;
    possuiErros: boolean;
    static defaultProps: {
        padrao: string;
        opcoes: any[];
        labelOculta: boolean;
    };
    componentDidMount(): Promise<void>;
    validar: () => void;
    onChange: (e: Event) => Promise<void>;
    renderBotaoGrupo(): JSX.Element;
    mountCombo(): JSX.Element;
    renderCombo(): JSX.Element;
    renderLabel(): JSX.Element;
    render(): JSX.Element;
}
export {};
