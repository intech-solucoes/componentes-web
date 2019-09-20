import React from 'react';
export declare enum TipoCampoEstatico {
    texto = 0,
    dinheiro = 1,
    data = 2
}
interface Props {
    col?: string;
    id?: string;
    valor: string | number | Date;
    titulo?: string;
    tipo?: TipoCampoEstatico;
}
export declare class CampoEstatico extends React.Component<Props> {
    static defaultProps: {
        tipo: TipoCampoEstatico;
    };
    render(): JSX.Element;
}
export {};
