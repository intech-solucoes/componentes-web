import React from "react";
import MasterPage from "../../MasterPage";
import { Box, Row, Col, Button, TipoBotao, TamanhoBotao } from "../../..";
import { ToggleButton } from "../../../componentes/ToggleButton";

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class ButtonPage extends React.Component {


    render() {
        return (
            <MasterPage {...this.props}>
                
                <Row>
                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Cores"} renderRow={false}>

                            <p>Os botões de tipo <b>primary</b> e <b>secondary</b> sempre irão buscar a cor primária e secundária definidas nos estilos.</p>
                            <code>{"<Button tipo={TipoBotao.primary} />"}</code>

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

                            <Button className={"mr-1 mb-1"} titulo={"Primary"} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Secondary"} tipo={TipoBotao.secondary} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Success"} tipo={TipoBotao.success} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Danger"} tipo={TipoBotao.danger} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Warning"} tipo={TipoBotao.warning} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Info"} tipo={TipoBotao.info} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Light"} tipo={TipoBotao.light} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Dark"} tipo={TipoBotao.dark} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Link"} tipo={TipoBotao.link} onClick={() => {}} />
                        </Box>
                    </Col>

                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Desabilitado"}>

                        <code>{"<Button desabilitado />"}</code>

                        <Button className={"mr-1 mb-1"} titulo={"Primary"} desativado onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Secondary"} desativado tipo={TipoBotao.secondary} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Success"} desativado tipo={TipoBotao.success} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Danger"} desativado tipo={TipoBotao.danger} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Warning"} desativado tipo={TipoBotao.warning} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Info"} desativado tipo={TipoBotao.info} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Light"} desativado tipo={TipoBotao.light} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Dark"} desativado tipo={TipoBotao.dark} onClick={() => {}} />
                        <Button className={"mr-1 mb-1"} titulo={"Link"} desativado tipo={TipoBotao.link} onClick={() => {}} />

                        <h4 className={"mt-5"}>Block</h4>
                        <p><b>Block</b> irá preencher todo o espaço disponível com o botão</p>
                        <code>{"<Button block />"}</code>
                        <Button className={"mr-1 mb-1"} titulo={"Block"} block onClick={() => {}} />
                        </Box>
                    </Col>

                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Tamanhos"}>

                            <code>{"<Button tamanho={TamanhoBotao.grande} />"}</code>

                            <p>Tamanhos disponíveis:</p>

                            <ul>
                                <li>TamanhoBotao.grande</li>
                                <li>TipoBotao.normal <b>(padrão)</b></li>
                                <li>TipoBotao.pequeno</li>
                                <li>TipoBotao.mini</li>
                            </ul>

                            <Button className={"mr-1 mb-1"} titulo={"Grande"} tamanho={TamanhoBotao.grande} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Normal"} tamanho={TamanhoBotao.normal} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Pequeno"} tamanho={TamanhoBotao.pequeno} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Mini"} tamanho={TamanhoBotao.mini} onClick={() => {}} />
                            
                            <h4 className={"mt-5"}>Block</h4>
                            <p>A propriedade <b>block</b> fará com que o botão preencha todo o espaço disponível.</p>
                            <code>{"<Button block />"}</code>
                            <Button className={"mr-1 mb-1"} titulo={"Block"} block onClick={() => {}} />
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
                                    <code>{"<Button titulo={\"Botão com ícone\"} icone={\"fa-beer\"} />"}</code>
                                    <Button className={"mr-1 mb-1"} titulo={"Botão com ícone"} icone={"fa-beer"} onClick={() => {}} />

                                    <h4 className={"mt-5"}>Ícone na direita</h4>
                                    <code>{"<Button titulo={\"Botão com ícone\"} icone={\"fa-beer\"} iconeDireita />"}</code>
                                    <Button className={"mr-1 mb-1"} titulo={"Botão com ícone"} icone={"fa-beer"} iconeDireita onClick={() => {}} />
                                </Col>

                                <Col>
                                    <h4>Botão com ícone sem texto</h4>
                                    <p>Basta remover a propriedade <b>titulo</b> para que o botão seja apenas o ícone.</p>
                                    <code>{"<Button icone={\"fa-beer\"} />"}</code>
                                    <Button className={"mr-1 mb-1"} icone={"fa-beer"} onClick={() => {}} />

                                    <h4 className={"mt-5"}>Indicador de carregamento</h4>
                                    <p>A propriedade <b>usaLoading</b> irá trocar o conteúdo do botão para um indicador de carregamento. 
                                    O evento <b>onClick</b> deve ser uma função <b>async</b> para reconhecer quando terminar o carregamento.</p>
                                    <code>{"<Button usaLoading />"}</code>
                                    <Button className={"mr-1 mb-1"} titulo={"Botão com loading"} usaLoading onClick={async () => { await timeout(1000) }} />
                                </Col>
                            </Row>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Outline"}>
                            <code>{"<Button outline />"}</code>

                            <Button className={"mr-1 mb-1"} titulo={"Primary"} outline onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Secondary"} outline tipo={TipoBotao.secondary} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Success"} outline tipo={TipoBotao.success} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Danger"} outline tipo={TipoBotao.danger} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Warning"} outline tipo={TipoBotao.warning} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Info"} outline tipo={TipoBotao.info} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Light"} outline tipo={TipoBotao.light} onClick={() => {}} />
                            <Button className={"mr-1 mb-1"} titulo={"Dark"} outline tipo={TipoBotao.dark} onClick={() => {}} />
                        </Box>
                    </Col>

                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"ToggleButton e RadioButton"}>
                            
                            {/* <ToggleButton checked={this.state.toggle} /> */}

                        </Box>
                    </Col>
                </Row>

            </MasterPage>
        );
    }
}