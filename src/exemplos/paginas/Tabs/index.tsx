import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Abas, AbasLista, Card } from "../../..";

interface Props { }

interface State {


}

export class TabsPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Uso padrão:</p>
                            <code>{"<Slider valMin={0} valMax={20} step={5}/>"}</code>
                            <p>A cor é opcional, se não informar, a cor será verde por Default:</p>
                            <code>{"<Slider cor={#FF4136} valMin={0} valMax={20} step={5}/>"}</code>

                            <Row>
                                <Col>
                                    <div>
                                        <Abas>
                                            <AbasLista iconClassName="fa fa-plus" linkClassName="Dados Pessoais" >
                                                <div className="tab-content" >
                                                    <Card>
                                                        <h3>Dados Pessoais</h3>
                                                        <input type="text"></input>
                                                    </Card>
                                                </div>
                                            </AbasLista>

                                            <AbasLista iconClassName="" linkClassName="Dados Bancários">
                                                <div className="tab-content" >
                                                    <Card>
                                                        <h3>Dados Bancários</h3>
                                                        <input type="text"></input>
                                                    </Card>
                                                </div>
                                            </AbasLista>

                                            <AbasLista iconClassName="" linkClassName="Dependentes">
                                                <div className="tab-content" >
                                                    <Card>
                                                        <h3>Dependentes</h3>
                                                        <input type="text"></input>
                                                    </Card>
                                                </div>
                                            </AbasLista>
                                        </Abas>
                                    </div>
                                </Col>
                            </Row>
                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}
