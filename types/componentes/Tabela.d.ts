import React from "react";
import { ColunaTabela } from "./ColunaTabela";
export { ColunaTabela };
interface Props {
    children?: React.ReactNode;
    dados: Array<any>;
    onSelecionar?: Function;
    onPesquisar?: Function;
    paginacaoHabilitada?: boolean;
    edicaoHabilitada?: boolean;
}
interface State {
    pagina: number;
}
export declare class Tabela extends React.Component<Props, State> {
    static defaultProps: {
        paginacaoHabilitada: boolean;
        edicaoHabilitada: boolean;
    };
    constructor(props: Props);
    renderHeader: () => any[];
    renderRow: (item: any) => any[];
    render(): JSX.Element;
}
