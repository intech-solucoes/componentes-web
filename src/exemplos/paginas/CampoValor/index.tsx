import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, CampoValor } from "../../../";
import { PosicaoTituloCampoValor } from "../../../componentes/CampoValor";

interface Props { }

interface State {
    valor1: number;
    valor2: number;
    valor3: number;
    valor4: number;

}

export class CampoValorPage extends React.Component<Props, State> {

    state: State = {
        valor1: 0,
        valor2: 0,
        valor3: 0,
        valor4: 0,
    }

    testeOnchange(valor: number) {
        alert('Teste Onchance botao: ' + valor)
    }

    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Se não informar o tipo o defaut será dinheiro:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor1} nome={"valor1"} posicaoTitulo={PosicaoTituloCampoValor.esquerda} />
                            {this.state.valor1}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Dinheiro"}>

                            <p>Uso padrão:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor2} nome={"valor2"} tipo={"dinheiro"} posicaoTitulo={PosicaoTituloCampoValor.esquerda} />
                            {/* <CampoTexto contexto={this} titulo={"Titulo"} valor={this.state.valor2} nome={"valor2"} posicaoTitulo={PosicaoTituloCampoTexto.esquerda} /> */}

                            {this.state.valor2}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Percentual"}>

                            <p>Uso Dinheiro:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor1} nome={"valor1"} tipo={"percentual"} />
                        </Box>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Box titulo={"Data"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor1} nome={"valor1"} tipo={"data"} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Data - Mês e Ano"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor1} nome={"valor1"} tipo={"mesano"} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Número telefone"}>

                            <p>Uso Telefone:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this} titulo={"Titulo"} valor={this.state.valor1} nome={"valor1"} tipo={"telefone"} />
                        </Box>
                    </Col>
                </Row>

            </MasterPage>
        );
    }
}