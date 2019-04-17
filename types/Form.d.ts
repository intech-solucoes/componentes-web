import React from 'react';
interface Props {
    children: Array<any> | any;
}
export declare class Form extends React.Component<Props> {
    erros: Array<string>;
    valido: boolean;
    constructor(props: Props);
    validar: () => Promise<void>;
    render(): JSX.Element;
}
export {};
