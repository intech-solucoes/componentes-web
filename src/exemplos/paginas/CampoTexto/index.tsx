import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico, CampoTexto } from "../../..";

interface Props { }

interface State {
    valor1: string;
    valor2: number;
}

export class CampoTextoPage extends React.Component<Props, State> {
    state: State = {
        valor1: "123",
        valor2: 0
    }

    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Uso padrão:</p>
                            <code>{"<CampoEstatico titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>

                            <CampoTexto contexto={this} nome={"valor1"} titulo={"String"} valor={this.state.valor1} />
                            <CampoTexto contexto={this} tipo={"number"} nome={"valor2"} titulo={"Numero"} valor={this.state.valor2} />
                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}