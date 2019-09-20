import React from "react";
import Rota from "./Rota";
interface Props {
    rotas: Array<Rota>;
}
export default class Roteador extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
