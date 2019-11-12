import React from "react";
import { ColunaTabela } from "./ColunaTabela";
export { ColunaTabela };
interface Props {
    children?: React.ReactNode;
    dados: Array<any>;
    onSelecionar?: Function;
    onExcluir?: Function;
    onPesquisar?: Function;
    paginacaoHabilitada?: boolean;
    edicaoHabilitada?: boolean;
    exclusaoHabilitada?: boolean;
    titulo?: string;
}
interface State {
    pagina: number;
}
export declare class Tabela extends React.Component<Props, State> {
    static defaultProps: {
        paginacaoHabilitada: boolean;
        edicaoHabilitada: boolean;
        exclusaoHabilitada: boolean;
        titulo: string;
    };
    constructor(props: Props);
    renderHeader: () => any[];
    renderRow: (item: any) => any[];
    render(): JSX.Element;
}
