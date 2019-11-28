import { Col } from './componentes/Col';
import { Row } from './componentes/Row';
import { Box } from "./componentes/Box";
import { Alerta, TipoAlerta } from "./componentes/Alerta";
import { CampoTexto } from "./componentes/CampoTexto";
import { CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico } from "./componentes/CampoEstatico";
import { Combo } from "./componentes/Combo";
import { Dropdown } from "./componentes/Dropdown";
import { Form } from "./componentes/Form";
import { Botao, TipoBotao, TamanhoBotao } from "./componentes/Botao";
import { BotaoSwitch } from "./componentes/BotaoSwitch";
import { Modal } from "./componentes/Modal";
import { Pesquisa } from "./componentes/Pesquisa";
import { Tabela, ColunaTabela } from "./componentes/Tabela";
import { FormEdicao, ModoFormEdicao } from "./componentes/FormEdicao";

import { Roteador, Rota } from "./Rotas";

import { SideMenuPage } from "./SideMenu";

export {
    Col,
    Row,
    Box,
    Alerta, TipoAlerta,
    CampoTexto,
    CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico,
    Combo,
    Dropdown,
    Form, 
    Botao, TipoBotao, TamanhoBotao,
    BotaoSwitch,
    Modal,
    Pesquisa, Tabela, ColunaTabela, FormEdicao, ModoFormEdicao,

    Rota, Roteador,

    SideMenuPage
};

try {
    var React = require("react");
    var ReactDOM = require("react-dom");

    var Rotas = require("./exemplos/Rotas");
    
    if(Rotas) {
        Rotas = Rotas.default;
        ReactDOM.render(
            <Roteador rotas={Rotas} />, document.getElementById('root'));
    }
} catch(e) {}
