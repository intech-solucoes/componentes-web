import React from 'react';
interface Props {
    tamanhoLabel?: string;
    tamanhoCampo?: string;
    obrigatorio?: boolean;
    label?: string;
    nome: string;
    contexto: any;
    parent?: any;
    desabilitado?: boolean;
    max?: number;
    min?: number;
    valor: string | Date;
    placeholder?: string;
    mascara?: string;
    tipo?: string;
    textarea?: boolean;
    rows?: number;
}
export declare class CampoTexto extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
