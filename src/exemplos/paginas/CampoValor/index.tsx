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
    valor5: number;
    valor6: number;    

}

export class CampoValorPage extends React.Component<Props, State> {

    state: State = {
        valor1: 6500.89,
        valor2: 65000.89,
        valor3: 100.00,
        valor4: 28022020,
        valor5: 282020,
        valor6: 61981045713,        
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
                            <CampoValor contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor1}
                                nome={"valor1"} 
                                posicaoTitulo={PosicaoTituloCampoValor.esquerda}
                            />

                            {this.state.valor1}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Dinheiro"}>

                            <p>Uso Dinheiro:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor 
                              contexto={this} 
                              titulo={"Titulo"} 
                              valor={this.state.valor2} 
                              nome={"valor2"} 
                              tipo={"dinheiro"} 
                              posicaoTitulo={PosicaoTituloCampoValor.esquerda} 
                            />
                            {this.state.valor2}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Percentual"}>

                            <p>Uso Percentual:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor 
                               contexto={this} 
                               titulo={"Titulo"} 
                               valor={this.state.valor3} 
                               nome={"valor3"} 
                               tipo={"percentual"} 
                            />
                            {this.state.valor3}                        
                        </Box>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Box titulo={"Data"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor 
                               contexto={this} 
                               titulo={"Titulo"} 
                               valor={this.state.valor4} 
                               nome={"valor4"} 
                               tipo={"data"} 
                            />
                            {this.state.valor4}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Data - Mês e Ano"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor 
                               contexto={this} 
                               titulo={"Titulo"} 
                               valor={this.state.valor5} 
                               nome={"valor5"} 
                               tipo={"mesano"} 
                            />
                            {this.state.valor5}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Número telefone"}>

                            <p>Uso Telefone:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor 
                              contexto={this} 
                              titulo={"Titulo"} 
                              valor={this.state.valor6} 
                              nome={"valor6"} 
                              tipo={"telefone"} 
                            />
                            {this.state.valor6}                            
                        </Box>
                    </Col>
                </Row>

            </MasterPage>
        );
    }
}