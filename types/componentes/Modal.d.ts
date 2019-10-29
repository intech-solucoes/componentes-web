import React from "react";
interface Props {
    onClose: any;
    visivel: boolean;
    titulo: string;
    nome?: string;
    tituloBotaoFechar?: string;
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
