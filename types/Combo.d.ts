import React from "react";
interface Props {
    tamanho?: string;
    className?: string;
    children?: React.ReactNode;
    nome: string;
    contexto: any;
    nomeMembro: string;
    valorMembro: string;
    valor: string;
    obrigatorio?: boolean;
    desabilitado?: boolean;
    textoVazio?: string;
    padrao?: string;
    label?: string;
    opcoes: any;
    onChange?: Function;
}
export declare class Combo extends React.Component<Props> {
    possuiErros: boolean;
    erros: any;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    validar: () => void;
    onChange: (e: object) => Promise<void>;
    render(): JSX.Element;
}
export {};
