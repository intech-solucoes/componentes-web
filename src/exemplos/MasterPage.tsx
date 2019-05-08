import React from "react";
import { History } from 'history';
import { SideMenuPage } from "../SideMenu";

import Rotas from "./Rotas";

interface Props {
    history?: History;
}

export default class MasterPage extends React.Component<Props> {
    render() {
        return (
            <SideMenuPage 
                logo={"imagens/logo.jpg"}
                rotas={Rotas}
                history={this.props.history}
                admin={true}
                nomeUsuario={"Teste"}
            >
                {this.props.children}
            </SideMenuPage>
        );
    }
}