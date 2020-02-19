import React from "react";
export declare enum ModoFormEdicao {
    Edicao = 0,
    Inclusao = 1,
    Oculto = 2
}
interface Props {
    item: any;
    onSalvar: Function;
    onCancelar: Function;
    modo: ModoFormEdicao;
}
interface State {
    item: any;
}
export declare class FormEdicao extends React.Component<Props, State> {
    static defaultProps: {
        modo: ModoFormEdicao;
    };
    state: State;
    onSalvar: () => Promise<void>;
    onCancelar: () => Promise<void>;
    render(): JSX.Element;
}
export {};
