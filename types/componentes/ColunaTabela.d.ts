import React from "react";
interface Props {
    titulo: string;
    propriedadeValor: string;
    prefixo?: string;
    sufixo?: string;
}
interface State {
}
export declare class ColunaTabela extends React.Component<Props, State> {
    static defaultProps: {
        prefixo: string;
        sufixo: string;
    };
    render(): string;
}
export {};
