import React from "react";
import MasterPage from "../../MasterPage";
import { Box, Row, Col, Botao, TipoBotao, TamanhoBotao, BotaoSwitch } from "../../..";

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface Props {

}

interface State {
    botaoToggle1: boolean;
    botaoToggle2: boolean;
    botaoToggle3: boolean;
    botaoToggle4: boolean;
    botaoToggle5: boolean;
}

export class BotaoPage extends React.Component<Props, State> {
    state = {
        botaoToggle1: true,
        botaoToggle2: true,
        botaoToggle3: true,
        botaoToggle4: true,
        botaoToggle5: true
    }

    render() {
        return (
            <MasterPage {...this.props}>
                
                <Row>
                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Cores"} renderRow={false}>

                            <p>Os botões de tipo <b>primary</b> e <b>secondary</b> sempre irão buscar a cor primária e secundária definidas nos estilos.</p>
                            <code>{"<Botao tipo={TipoBotao.primary} />"}</code>

                            <p>Tipos disponíveis:</p>

                            <ul>
                                <li>TipoBotao.primary <b>(padrão)</b></li>
                                <li>TipoBotao.secondary</li>
                                <li>TipoBotao.success</li>
                                <li>TipoBotao.danger</li>
                                <li>TipoBotao.warning</li>
                                <li>TipoBotao.info</li>
                                <li>TipoBotao.light</li>
                                <li>TipoBotao.dark</li>
                                <li>TipoBotao.link</li>
                            </ul>

                            <Botao className={"mr-1 mb-1"} titulo={"Primary"} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Secondary"} tipo={TipoBotao.secondary} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Success"} tipo={TipoBotao.success} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Danger"} tipo={TipoBotao.danger} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Warning"} tipo={TipoBotao.warning} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Info"} tipo={TipoBotao.info} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Light"} tipo={TipoBotao.light} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Dark"} tipo={TipoBotao.dark} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Link"} tipo={TipoBotao.link} onClick={() => {}} />
                        </Box>
                    </Col>

                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Row>
                            <Col>
                                <Box titulo={"Outline"}>
                                    <code>{"<Botao outline />"}</code>

                                    <Botao className={"mr-1 mb-1"} titulo={"Primary"} outline onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Secondary"} outline tipo={TipoBotao.secondary} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Success"} outline tipo={TipoBotao.success} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Danger"} outline tipo={TipoBotao.danger} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Warning"} outline tipo={TipoBotao.warning} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Info"} outline tipo={TipoBotao.info} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Light"} outline tipo={TipoBotao.light} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Dark"} outline tipo={TipoBotao.dark} onClick={() => {}} />
                                </Box>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Box titulo={"Desabilitado"}>
                                    <code>{"<Botao desabilitado />"}</code>

                                    <Botao className={"mr-1 mb-1"} titulo={"Primary"} desativado onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Secondary"} desativado tipo={TipoBotao.secondary} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Success"} desativado tipo={TipoBotao.success} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Danger"} desativado tipo={TipoBotao.danger} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Warning"} desativado tipo={TipoBotao.warning} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Info"} desativado tipo={TipoBotao.info} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Light"} desativado tipo={TipoBotao.light} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Dark"} desativado tipo={TipoBotao.dark} onClick={() => {}} />
                                    <Botao className={"mr-1 mb-1"} titulo={"Link"} desativado tipo={TipoBotao.link} onClick={() => {}} />
                                </Box>
                            </Col>
                        </Row>
                    </Col>

                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Tamanhos"}>

                            <code>{"<Botao tamanho={TamanhoBotao.grande} />"}</code>

                            <p>Tamanhos disponíveis:</p>

                            <ul>
                                <li>TamanhoBotao.grande</li>
                                <li>TipoBotao.normal <b>(padrão)</b></li>
                                <li>TipoBotao.pequeno</li>
                                <li>TipoBotao.mini</li>
                            </ul>

                            <Botao className={"mr-1 mb-1"} titulo={"Grande"} tamanho={TamanhoBotao.grande} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Normal"} tamanho={TamanhoBotao.normal} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Pequeno"} tamanho={TamanhoBotao.pequeno} onClick={() => {}} />
                            <Botao className={"mr-1 mb-1"} titulo={"Mini"} tamanho={TamanhoBotao.mini} onClick={() => {}} />
                            
                            <h4 className={"mt-5"}>Block</h4>
                            <p>A propriedade <b>block</b> fará com que o botão preencha todo o espaço disponível.</p>
                            <code>{"<Botao block />"}</code>
                            <Botao className={"mr-1 mb-1"} titulo={"Block"} block onClick={() => {}} />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Ícones"}>
                            <p className={"alert alert-warning"}>
                                Os botões utilizam a biblioteca de ícones <a target="_blank" href="https://fontawesome.com/icons?d=gallery&m=free">FontAwesome <i className={"fas fa-external-link-alt"}></i></a>.
                            </p>
                                
                            <Row>
                                <Col>
                                    <code>{"<Botao titulo={\"Botão com ícone\"} icone={\"fa-beer\"} />"}</code>
                                    <Botao className={"mr-1 mb-1"} titulo={"Botão com ícone"} icone={"fa-beer"} onClick={() => {}} />

                                    <h4 className={"mt-5"}>Ícone na direita</h4>
                                    <code>{"<Botao titulo={\"Botão com ícone\"} icone={\"fa-beer\"} iconeDireita />"}</code>
                                    <Botao className={"mr-1 mb-1"} titulo={"Botão com ícone"} icone={"fa-beer"} iconeDireita onClick={() => {}} />
                                </Col>

                                <Col>
                                    <h4>Botão com ícone sem texto</h4>
                                    <p>Basta remover a propriedade <b>titulo</b> para que o botão seja apenas o ícone.</p>
                                    <code>{"<Botao icone={\"fa-beer\"} />"}</code>
                                    <Botao className={"mr-1 mb-1"} icone={"fa-beer"} onClick={() => {}} />

                                    <h4 className={"mt-5"}>Indicador de carregamento</h4>
                                    <p>A propriedade <b>usaLoading</b> irá trocar o conteúdo do botão para um indicador de carregamento. 
                                    O evento <b>onClick</b> deve ser uma função <b>async</b> para reconhecer quando terminar o carregamento.</p>
                                    <code>{"<Botao usaLoading />"}</code>
                                    <Botao className={"mr-1 mb-1"} titulo={"Botão com loading"} usaLoading onClick={async () => { await timeout(1000) }} />
                                </Col>
                            </Row>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col tamanho={"12"}>
                        <Box titulo={"Switch"}>

                            <p>Os switchs são botões que possuem dois estados: ativo e inativo.</p>
                                
                            <Row>
                                <Col>
                                    <h4>Padrão</h4>
                                    <code>{"<BotaoSwitch checked={this.state.botaoToggle1} onChange={() => this.setState({ botaoToggle1: !this.state.botaoToggle1 })} />"}</code>
                                    <BotaoSwitch checked={this.state.botaoToggle1} onChange={() => this.setState({ botaoToggle1: !this.state.botaoToggle1 })}
                                        className={"mb-3"} />
                                    
                                    <h4 className={"mt-5"}>Com títulos</h4>
                                    <code>{"<BotaoSwitch tituloAtivo={\"Sim\"} tituloInativo={\"Não\"} />"}</code>
                                    <BotaoSwitch checked={this.state.botaoToggle2} onChange={() => this.setState({ botaoToggle2: !this.state.botaoToggle2 })}
                                        className={"mb-2"}
                                        tituloAtivo={"Sim"} tituloInativo={"Não"} />
                                </Col>
                                
                                <Col>
                                    <h4>Ícones</h4>
                                    <code>{"<BotaoSwitch tituloAtivo={\"Sim\"} tituloInativo={\"Não\"} iconeAtivo={\"fa-beer\"} iconeInativo={\"fa-hand-paper\"} />"}</code>
                                    <BotaoSwitch checked={this.state.botaoToggle3} onChange={() => this.setState({ botaoToggle3: !this.state.botaoToggle3 })}
                                        className={"mb-2"}
                                        tituloAtivo={"Sim"} tituloInativo={"Não"}
                                        iconeAtivo={"fa-beer"} iconeInativo={"fa-hand-paper"} />
                                
                                    <h4 className={"mt-5"}>Cores</h4>
                                    <code>{"<BotaoSwitch tituloAtivo={\"Sim\"} tituloInativo={\"Não\"} tipoAtivo={TipoBotao.success} tipoInativo={TipoBotao.danger} />"}</code>
                                    <BotaoSwitch checked={this.state.botaoToggle4} onChange={() => this.setState({ botaoToggle4: !this.state.botaoToggle4 })}
                                        className={"mb-2"}
                                        tituloAtivo={"Sim"} tituloInativo={"Não"}
                                        tipoAtivo={TipoBotao.success} tipoInativo={TipoBotao.danger} />
                                </Col>
                            </Row>

                        </Box>
                    </Col>
                </Row>

            </MasterPage>
        );
    }
}