import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, CampoEstatico, TipoCampoEstatico, PosicaoTituloCampoEstatico } from "../../..";

interface Props { }

interface State { }

export class CampoEstaticoPage extends React.Component<Props, State> {
    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Uso padrão:</p>
                            <code>{"<CampoEstatico titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} />
                            <CampoEstatico titulo={"Titulo de tamanho regular"} valor={"Valor 2"} />
                            <CampoEstatico titulo={"Titulo de tamanho absurdamente grande pra caralho"} valor={"Valor 3"} />
                            <CampoEstatico titulo={"Titulo 4"} valor={"Valor 4"} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Posição Titulo"}>

                            <p>Define o posicionamento do título.</p>

                            <h4 className={"mt-4"}>Esquerda (padrão):</h4>
                            <code>{"<CampoEstatico posicao={CampoEstaticoPosicao.esquerda} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} />

                            <h4 className={"mt-4"}>Cima:</h4>
                            <code>{"<CampoEstatico posicao={PosicaoTituloCampoEstatico.cima} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} posicaoTitulo={PosicaoTituloCampoEstatico.cima} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Tamanho Titulo"}>
                            <p><b>Tamanho padrão: col-lg-2 col-md-12.</b></p>
                            <p>É necessário colocar apenas a unidade de tamanho e o tamanho. Exemplo: <b>6</b>, <b>lg-6</b>, ou <b>md-6</b>.</p>
                            <p>Em resoluções grandes, irá ficar com col-lg-2 e em resoluções menores, o título irá ocupar a linha inteira.</p>
                            <code>{"<CampoEstatico tamanhoTitulo={\"4\"} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} tamanhoTitulo={"4"} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Mesma Linha"}>
                            <code>
                                {"<div className=\"form-row\">"}<br/>
                                {"    <CampoEstatico titulo={\"Titulo\"} valor={\"Valor\"} />"}<br/>
                                {"    <CampoEstatico titulo={\"Titulo 2\"} valor={\"Valor 2\"} />"}<br/>
                                {"</div>"}
                            </code>
                            
                            <div className="form-row">
                                <CampoEstatico titulo={"Titulo"} valor={"Valor"} />
                                <CampoEstatico titulo={"Titulo 2"} valor={"Valor 2"} />
                            </div>
                            
                            <div className="form-row">
                                <CampoEstatico titulo={"Titulo"} valor={"Valor"} posicaoTitulo={PosicaoTituloCampoEstatico.cima} />
                                <CampoEstatico titulo={"Titulo 2"} valor={"Valor 2"} posicaoTitulo={PosicaoTituloCampoEstatico.cima} />
                            </div>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Apenas Valor"}>
                            <code>
                                {"<CampoEstatico valor={\"Valor\"} />"}
                            </code>

                            <CampoEstatico valor={"Valor"} />
                        </Box>
                    </Col>

                    <Col>
                        <Box titulo={"Dinheiro"}>
                            <code>
                                {"<CampoEstatico valor={10.50} tipo={TipoCampoEstatico.dinheiro} />"}
                            </code>

                            <CampoEstatico valor={1576.50} tipo={TipoCampoEstatico.dinheiro} />
                        </Box>
                    </Col>
                    <Col>
                        <Box titulo={"Percentual"}>
                            <code>
                                {"<CampoEstatico valor={10.50} tipo={TipoCampoEstatico.percentual} />"}
                            </code>

                            <CampoEstatico valor={''} tipo={TipoCampoEstatico.percentual} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Cor do Titulo (Label)"}>
                            <code>
                                {"<div className=\"form-row\">"}<br />
                                {"    <CampoEstatico  valor={10.50} tipo={TipoCampo.dinheiro}"}<br />
                                {"</div>"}
                            </code>

                            <CampoEstatico valor={1576.50} tipo={TipoCampoEstatico.dinheiro} tituloClassName={"text-primary"} />

                        </Box>
                    </Col>
                </Row>   


                <Row>
                    <Col>
                        <Box titulo={"Cor do Titulo (Label)"}>

                            <p>Define a cor do Título.</p>

                            <h4 className={"mt-4"}>Esquerda (padrão):</h4>
                            <code>{"<CampoEstatico posicao={CampoEstaticoPosicao.esquerda} tituloClassName={\"text-primary\"} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} tituloClassName={"text-primary"} />

                            <h4 className={"mt-4"}>Cima:</h4>
                            <code>{"<CampoEstatico posicao={PosicaoTituloCampoEstatico.cima} />"}</code>

                            <CampoEstatico titulo={"Titulo"} valor={"Valor"} posicaoTitulo={PosicaoTituloCampoEstatico.cima} tituloClassName={"text-primary"} />
                        </Box>
                    </Col>
                </Row>                                 
            </MasterPage>
        );
    }
}