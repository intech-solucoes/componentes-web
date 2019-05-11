import React from 'react';
export declare enum TipoAlerta {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark"
}
interface Props {
    mensagem?: string;
    padraoFormulario: boolean;
    className?: string;
    tipo: TipoAlerta;
    tamanho: string;
}
interface State {
    mensagem: string;
}
export declare class Alerta extends React.Component<Props, State> {
    static defaultProps: {
        mensagem: string;
        tamanho: string;
        padraoFormulario: boolean;
    };
    constructor(props: Props);
    adicionarErro: (mensagemErro: string) => Promise<void>;
    limparErros: () => Promise<void>;
    possuiErro: () => Promise<boolean>;
    render(): JSX.Element;
}
export {};
