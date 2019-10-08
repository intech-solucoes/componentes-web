import React from "react";
interface Props {
    conteudo: any;
    nome?: string;
    onClick: any;
    status: boolean;
    titulo: string;
}
export declare class Modal extends React.Component<Props> {
    static defaultProps: {
        nome: string;
    };
    renderHeader(): JSX.Element;
    renderBody(): JSX.Element;
    renderFooter(): JSX.Element;
    render(): JSX.Element;
}
export {};
