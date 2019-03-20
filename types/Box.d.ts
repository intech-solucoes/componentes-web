import React from "react";
interface Props {
    titulo?: string;
    label?: string;
    renderRow: boolean;
    children: React.ReactNode;
}
export declare class Box extends React.Component<Props> {
    static defaultProps: {
        renderRow: boolean;
    };
    renderBox: () => any;
    render(): any;
}
export {};
