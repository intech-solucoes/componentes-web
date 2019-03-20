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
interface Props {
    block?: boolean;
    pequeno?: boolean;
    submit?: boolean;
    titulo: string;
    className?: string;
    usaLoading?: boolean;
    desativado?: boolean;
    tipo?: TipoBotao;
    children?: React.ReactNode;
    onClick: Function;
}
interface State {
    carregando: boolean;
}
export declare class Button extends React.Component<Props, State> {
    constructor(props: Props);
    onClick: (e: any) => Promise<void>;
    render(): JSX.Element;
}
export {};
