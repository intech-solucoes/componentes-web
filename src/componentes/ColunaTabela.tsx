import React from "react";

interface Props {
    titulo: string;
    propriedadeValor: string;
    prefixo?: string;
    sufixo?: string;
}

interface State { }

export class ColunaTabela extends React.Component<Props, State> {
    static defaultProps = {
        prefixo: "",
        sufixo: ""
    }

    render() {
        return "";
    }
}