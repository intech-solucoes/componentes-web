import React from "react";
import { Rota } from "../SideMenu";
import { RouteProps } from "react-router-dom";

import { Dashboard } from "./paginas/Dashboard";
import { BotaoPage } from "./paginas/Botao";
import { AlertaPage } from "./paginas/Alerta";
import { CardPage } from "./paginas/Card";
import { DropdownPage } from "./paginas/Dropdown";
import { CampoEstaticoPage } from "./paginas/CampoEstatico";
import { InputGroupPage } from "./paginas/InputGroup";
import { ModalPage } from "./paginas/Modal";
import { FormPage } from "./paginas/Form";
import { TabelaPage } from "./paginas/Tabela";
import { CrudPage } from "./paginas/Crud";
import { ComboPage } from "./paginas/Combo";
import { CampoTextoPage } from "./paginas/CampoTexto";
import { ExemploPassoaPasso } from "./paginas/PassoaPasso";
import { CampoValorPage } from "./paginas/CampoValor";
import { SliderPage } from "./paginas/Slider";
import { TabsPage } from "./paginas/Tabs";
import { ToasterPage } from "./paginas/Toaster";

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
        id: "card",
        titulo: "Card",
        icone: "fas fa-check-square",
        caminho: "/card",
        componente: (routeProps: RouteProps) => <CardPage {...routeProps} />,
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
    },
    {
        id: "campoEstatico",
        titulo: "Campo Estático",
        icone: "fas fa-font",
        caminho: "/campoEstatico",
        componente: (routeProps: RouteProps) => <CampoEstaticoPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "campoTexto",
        titulo: "Campo Texto",
        icone: "fas fa-edit",
        caminho: "/campoTexto",
        componente: (routeProps: RouteProps) => <CampoTextoPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "inputGroup",
        titulo: "Input Group",
        icone: "fas fa-object-group",
        caminho: "/inputGroup",
        componente: (routeProps: RouteProps) => <InputGroupPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "modal",
        titulo: "Modal",
        icone: "fas fa-layer-group",
        caminho: "/modal",
        componente: (routeProps: RouteProps) => <ModalPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "form",
        titulo: "Form",
        icone: "fas fa-layer-group",
        caminho: "/form",
        componente: (routeProps: RouteProps) => <FormPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "tabela",
        titulo: "Tabela",
        icone: "fas fa-layer-group",
        caminho: "/tabela",
        componente: (routeProps: RouteProps) => <TabelaPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "crud",
        titulo: "CRUD",
        icone: "fas fa-layer-group",
        caminho: "/crud",
        componente: (routeProps: RouteProps) => <CrudPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "combo",
        titulo: "Combo",
        icone: "fas fa-layer-group",
        caminho: "/combo",
        componente: (routeProps: RouteProps) => <ComboPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true        
    },
    {
        id: "passoapasso",
        titulo: "Passo a Passo",
        icone: "fas fa-layer-group",
        caminho: "/passoapasso",
        componente: (routeProps: RouteProps) => <ExemploPassoaPasso {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "campovalor",
        titulo: "Campo Valor",
        icone: "fas fa-layer-group",
        caminho: "/campovalor",
        componente: (routeProps: RouteProps) => <CampoValorPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "slider",
        titulo: "Slider",
        icone: "fas fa-layer-group",
        caminho: "/slider",
        componente: (routeProps: RouteProps) => <SliderPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },
    {
        id: "tabs",
        titulo: "Tabs",
        icone: "fas fa-layer-group",
        caminho: "/tab",
        componente: (routeProps: RouteProps) => <TabsPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    },

    {
        id: "toaster",
        titulo: "Toaster",
        icone: "fas fa-layer-group",
        caminho: "/toaster",
        componente: (routeProps: RouteProps) => <ToasterPage {...routeProps} />,
        mostrarMenu: true,
        caminhoExato: true
    }
];

export default rotas;