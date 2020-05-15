import { Col } from './componentes/Col';
import { Row } from './componentes/Row';
import { Box } from "./componentes/Box";
import { Alerta, TipoAlerta } from "./componentes/Alerta";
import { Card } from "./componentes/Card";
import { CampoTexto, PosicaoTituloCampoTexto } from "./componentes/CampoTexto";
import { CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico } from "./componentes/CampoEstatico";
import { Combo, PosicaoTituloCombo } from "./componentes/Combo";
import { Dropdown } from "./componentes/Dropdown";
import { Form } from "./componentes/Form";
import { Botao, TipoBotao, TamanhoBotao } from "./componentes/Botao";
import { BotaoSwitch } from "./componentes/BotaoSwitch";
import { Modal } from "./componentes/Modal";
import { Pesquisa } from "./componentes/Pesquisa";
import { Tabela, ColunaTabela } from "./componentes/Tabela";
import { FormEdicao, ModoFormEdicao } from "./componentes/FormEdicao";
import { CampoValor, PosicaoTituloCampoValor } from "./componentes/CampoValor";

import { Slider } from "./componentes/Slider";
import Abas from './componentes/Abas/Abas';
import AbasLista from './componentes/Abas/AbasLista';

import { Roteador, Rota } from "./Rotas";

import { SideMenuPage } from "./SideMenu";

export {
    Col,
    Row,
    Box,
    Alerta, TipoAlerta,
    Card,
    CampoTexto, PosicaoTituloCampoTexto,
    CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico,
    Combo, PosicaoTituloCombo,
    Dropdown,
    Form,
    Botao, TipoBotao, TamanhoBotao,
    BotaoSwitch,
    Modal,
    Pesquisa, Tabela, ColunaTabela, FormEdicao, ModoFormEdicao,
    Rota, Roteador,
    SideMenuPage,
    Abas, AbasLista,
    CampoValor, PosicaoTituloCampoValor,
    Slider,
};

try {
    var React = require("react");
    var ReactDOM = require("react-dom");

    var Rotas = require("./exemplos/Rotas");

    if (Rotas) {
        Rotas = Rotas.default;
        ReactDOM.render(
            <Roteador rotas={Rotas} />, document.getElementById('root'));
    };
} catch (e) { }
