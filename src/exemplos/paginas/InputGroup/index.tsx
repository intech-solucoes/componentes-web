import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, CampoTexto, Combo } from "../../..";

interface Props { }

interface State { }

export class InputGroupPage extends React.Component<Props, State> {
    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Para ativar o Input Group utiliza a props "grupo"</p>
                            <code>{"<CampoTexto grupo tituloBotao={\"Título\"} iconeBotao={\"fa-check\"} iconeBotaoDireita onBotaoClick={() => {}} {...info padrão do CampoTexto} />"}</code>
                            
                            <code>{"<Combo grupo tituloBotao={\"Título\"} iconeBotao={\"fa-check\"} iconeBotaoDireita onBotaoClick={() => {}} {...info padrão do Combo} />"}</code>
                            
                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                            />

                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                            />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Posição do Botão"}>

                            <p>O Botão pode ficar no lado esquerdo utilizando a props "botaoEsquerda"</p>

                            <h4 className={"mt-4"}>Direita (padrão):</h4>
                            <code>{"<CampoTexto />"}</code>
                            <code>{"<Combo />"}</code>

                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                            />

                            <h4 className={"mt-4"}>Esquerda:</h4>
                            <code>{"<CampoTexto botaoEsquerda />"}</code>
                            <code>{"<Combo botaoEsquerda />"}</code>

                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                botaoEsquerda
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                botaoEsquerda
                            />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Posição do Icone do Botão"}>
                            <p>O icone pode ficar no lado direito utilizando a props "iconeBotaoDireita"</p>
                            
                            <h4 className={"mt-4"}>Esquerda (padrão):</h4>
                            <code>{"<CampoTexto />"}</code>
                            <code>{"<Combo />"}</code>

                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                            />
                            
                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                iconeBotao={"fa-check"}
                                botaoEsquerda
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                botaoEsquerda
                            />
                            
                            <h4 className={"mt-4"}>Direita (iconeBotaoDireita):</h4>
                            <code>{"<CampoTexto iconeBotaoDireita />"}</code>
                            <code>{"<Combo iconeBotaoDireita />"}</code>

                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                iconeBotaoDireita
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                iconeBotaoDireita
                            />
                            
                            <CampoTexto
                                contexto={this}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                botaoEsquerda
                                iconeBotaoDireita
                            />
                            
                            <Combo
                                contexto={this}
                                textoVazio={"Opções"}
                                opcoes={[{value: "1", name: "Uma Opção"}, {value: "2", name: "Outra Opção"}]}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                grupo
                                onBotaoClick={() => {alert("woohoo!");}}
                                tituloBotao={"Ação Daora"}
                                iconeBotao={"fa-check"}
                                botaoEsquerda
                                iconeBotaoDireita
                            />
                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}