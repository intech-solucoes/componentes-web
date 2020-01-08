import React, { ReactNode, ReactNodeArray } from "react";
interface Props {
    titulo: string;
    children: ReactNode | ReactNodeArray;
    textoBadge?: string;
    tipoBadge?: string;
}
export declare class Card extends React.Component<Props> {
    static defaultProps: {
        tipoBadge: string;
    };
    static TipoBadge: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        light: string;
        dark: string;
        link: string;
    };
    render(): JSX.Element;
}
export {};
