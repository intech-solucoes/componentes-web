import React from "react";
import { Form } from "..";
interface Props {
    onPesquisar: Function;
}
interface State {
}
export declare class Pesquisa extends React.Component<Props, State> {
    form: React.RefObject<Form>;
    pesquisar: () => Promise<void>;
    render(): JSX.Element;
}
export {};
