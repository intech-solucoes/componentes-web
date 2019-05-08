import React from "react";
import { Rota } from "../SideMenu";
import { RouteProps } from "react-router-dom";

import { Dashboard } from "./paginas/Dashboard";
import { ButtonPage } from "./paginas/Button";

const rotas: Array<Rota> = [
    {
        id: "dashboard",
        titulo: "Dashboard",
        icone: "fas fa-home",
        caminho: "/",
        componente: (routeProps: RouteProps) => <Dashboard {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "button",
        titulo: "Button",
        icone: "fas fa-chevron-circle-right",
        caminho: "/button",
        componente: (routeProps: RouteProps) => <ButtonPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    }
];

export default rotas;