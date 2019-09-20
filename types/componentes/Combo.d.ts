import { Component } from "react";
interface Props {
    nome: string;
    contexto: any;
    nomeMembro: string;
    valorMembro: string;
    valor: string | number;
    obrigatorio?: boolean;
    desabilitado?: boolean;
    textoVazio?: string;
    padrao?: string;
    label?: string;
    opcoes?: Array<any>;
    onChange?: Function;
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
    render(): JSX.Element;
}
export {};
