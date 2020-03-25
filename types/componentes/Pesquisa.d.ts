import React from "react";
import { Form, Alerta } from "..";
interface Props {
    contexto: any;
    onPesquisar?: Function;
    service?: any;
    dados?: any;
}
interface State {
}
export declare class Pesquisa extends React.Component<Props, State> {
    form: React.RefObject<Form>;
    alerta: React.RefObject<Alerta>;
    pesquisar: () => Promise<void>;
    render(): JSX.Element;
}
export {};
