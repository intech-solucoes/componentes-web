import React from "react";
import { Rota } from "../SideMenu";
import { RouteProps } from "react-router-dom";

import { Dashboard } from "./paginas/Dashboard";
import { BotaoPage } from "./paginas/Botao";
import { AlertaPage } from "./paginas/Alerta";
import { DropdownPage } from "./paginas/Dropdown";

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
        id: "alerta",
        titulo: "Alerta",
        icone: "fas fa-exclamation-triangle",
        caminho: "/alerta",
        componente: (routeProps: RouteProps) => <AlertaPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "botao",
        titulo: "Botão",
        icone: "fas fa-chevron-circle-right",
        caminho: "/botao",
        componente: (routeProps: RouteProps) => <BotaoPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "dropdown",
        titulo: "Dropdown",
        icone: "fas fa-caret-down",
        caminho: "/dropdown",
        componente: (routeProps: RouteProps) => <DropdownPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    }
];

export default rotas;