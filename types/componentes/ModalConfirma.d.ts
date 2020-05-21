import React from "react";
interface Props {
    visivel: boolean;
    titulo: string;
    nome?: string;
    tituloBotaoFechar?: string;
    onClose?: any;
    onConfirm?: any;
}
export declare class ModalConfirma extends React.Component<Props> {
    static defaultProps: {
        tituloBotaoFechar: string;
    };
    renderHeader(): JSX.Element;
    renderBody(): JSX.Element;
    renderFooter(): JSX.Element;
    render(): JSX.Element;
}
export {};
