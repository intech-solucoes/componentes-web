import React from "react";
import { History } from 'history';
import { Rota } from "../Rotas";
export { Rota };
interface Props {
    logo: string;
    rotas: Array<Rota>;
    admin: boolean;
    nomeUsuario: string;
    history?: History;
    match?: any;
}
interface State {
    menuAberto: boolean;
    loading: boolean;
}
export declare class SideMenuPage extends React.Component<Props, State> {
    state: {
        menuAberto: boolean;
        loading: boolean;
    };
    logout: () => void;
    render(): JSX.Element;
}
