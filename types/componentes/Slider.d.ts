import { Component } from 'react';
interface Props {
    contexto: any;
    nome: string;
    valor: string | number;
    cor: string;
    min: number;
    max: number;
    step: number;
    formato: string;
    parent?: any;
    onChange?: any;
}
export declare class Slider extends Component<Props> {
    static defaultProps: {
        cor: string;
        step: number;
        valor: number;
    };
    onChange: (e: any) => Promise<void>;
    render(): JSX.Element;
}
export {};
