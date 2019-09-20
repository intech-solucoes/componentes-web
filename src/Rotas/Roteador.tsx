import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Rota from "./Rota";

interface Props {
    rotas: Array<Rota>;
}

export default class Roteador extends React.Component<Props> {
    render() {
        return (
            <HashRouter>
				<Switch>
					{ this.props.rotas.map((rota: Rota, index: number) => <Route key={index} exact={rota.caminhoExato} path={rota.caminho} component={rota.componente} />) }
				</Switch>
			</HashRouter>
        )
    }
}