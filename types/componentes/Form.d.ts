import React from 'react';
interface Props {
    children: Array<any> | any;
}
interface State {
    valido: boolean;
}
export declare class Form extends React.Component<Props, State> {
    erros: Array<string>;
    state: {
        valido: boolean;
    };
    isValido: () => boolean;
    filtroCampos(campo: any): boolean;
    validarRecursivo: (children: any) => void;
    validarCampo: (campo: any) => void;
    validar: () => Promise<void>;
    validarCampoTexto: (campo: any) => void;
    render(): JSX.Element;
}
export {};
