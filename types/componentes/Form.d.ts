import React from 'react';
interface Props {
    children: Array<any> | any;
}
interface State {
    valido: boolean;
}
export declare class Form extends React.Component<Props, State> {
    erros: Array<string>;
    valido: boolean;
    constructor(props: Props);
    validarAux: () => Promise<void>;
    validarAlt: () => Promise<void>;
    validar: () => Promise<void>;
    render(): JSX.Element;
}
export {};
