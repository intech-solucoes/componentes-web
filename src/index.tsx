import { Col } from './componentes/Col';
import { Row } from './componentes/Row';
import { Box } from "./componentes/Box";
import { Alert, TipoAlerta } from "./componentes/Alert";
import { CampoTexto } from "./componentes/CampoTexto";
import { CampoEstatico, TipoCampoEstatico } from "./componentes/CampoEstatico";
import { Form } from "./componentes/Form";
import { Botao, TipoBotao, TamanhoBotao } from "./componentes/Botao";
import { BotaoSwitch } from "./componentes/BotaoSwitch";

export {
    Col,
    Row,
    Box,
    Alert, TipoAlerta,
    CampoTexto,
    CampoEstatico, TipoCampoEstatico,
    Form,
    Botao, TipoBotao, TamanhoBotao,
    BotaoSwitch
};

try {
    var React = require("react");
    var ReactDOM = require("react-dom");

    var Roteador = require("./Rotas/Roteador");
    var Rotas = require("./exemplos/Rotas");
    
    if(Rotas) {
        Roteador = Roteador.default;
        Rotas = Rotas.default;
        ReactDOM.render(
            <Roteador rotas={Rotas} />, document.getElementById('root'));
    }
} catch(e) {}