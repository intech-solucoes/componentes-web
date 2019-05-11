import React from 'react';
export declare enum TipoBotao {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark",
    link = "link"
}
export declare enum TamanhoBotao {
    grande = "btn-lg",
    normal = "btn-md",
    pequeno = "btn-sm",
    mini = "btn-xs"
}
interface Props {
    block?: boolean;
    outline?: boolean;
    submit?: boolean;
    titulo?: string;
    icone?: string;
    className?: string;
    usaLoading?: boolean;
    desativado?: boolean;
    iconeDireita?: boolean;
    tipo?: TipoBotao;
    tamanho?: TamanhoBotao;
    children?: React.ReactNode;
    onClick: Function;
}
interface State {
    carregando: boolean;
}
export declare class Botao extends React.Component<Props, State> {
    static defaultProps: {
        tipo: TipoBotao;
        tamanho: TamanhoBotao;
    };
    constructor(props: Props);
    onClick: (e: any) => Promise<void>;
    render(): JSX.Element;
}
export {};
