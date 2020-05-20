import React from "react";
import MasterPage from "../../MasterPage";
import { Box, Row, Col, Botao, TipoBotao, TamanhoBotao, BotaoSwitch } from "../../..";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface Props { }

interface State {
    botaoSuccess: boolean;
    botaoWarning: boolean;
    botaoError: boolean;
    botaoInfo: boolean;
}

export class ToasterPage extends React.Component<Props, State> {
    state = {
        botaoSuccess: true,
        botaoWarning: true,
        botaoError: true,
        botaoInfo: true,
    }

    mensagemSucesso() {
        toast.success("Mensagem de sucesso")
    }

    mensagemAtencao() {
        toast.warning("Mensagem de Atenção")
    }

    mensagemErro() {
        toast.error("Mensagem de Erro")
    }

    mensagemInfo() {
        toast.info("Mensagem de Informação")
    }

    render() {
        return (
            <MasterPage {...this.props}>

                <Row>
                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Toaster"} renderRow={false}>

                            <p>Instalar a Biblioteca React-toastify</p>
                            <code>{"yarn add react-toastify -D"}</code>

                            <p>Tipos disponíveis:</p>

                            <Botao className={"mr-1 mb-1"} titulo={"Sucesso"} tipo={TipoBotao.success} onClick={this.mensagemSucesso} />
                            <Botao className={"mr-1 mb-1"} titulo={"Atenção"} tipo={TipoBotao.warning} onClick={this.mensagemAtencao} />
                            <Botao className={"mr-1 mb-1"} titulo={"Erro"}  tipo={TipoBotao.danger} onClick={this.mensagemErro} />
                            <Botao className={"mr-1 mb-1"} titulo={"Informação"} tipo={TipoBotao.info} onClick={this.mensagemAtencao} />
                        </Box>
                    </Col>

                    <ToastContainer />
                </Row>

            </MasterPage>
        );
    }
}