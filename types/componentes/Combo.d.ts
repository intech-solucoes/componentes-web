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
}
export declare class Combo extends Component<Props> {
    erros: Array<string>;
    possuiErros: boolean;
    static defaultProps: {
        padrao: string;
        opcoes: any[];
    };
    componentDidMount(): Promise<void>;
    validar: () => void;
    onChange: (e: Event) => Promise<void>;
    renderCombo(): JSX.Element;
    renderLabel(): JSX.Element;
    render(): JSX.Element;
}
export {};
