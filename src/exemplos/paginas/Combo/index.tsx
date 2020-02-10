import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Combo } from "../../..";

interface Props { }

interface State {
    data: number;
    objeto: number;
}

const datas = [
    2020,
    2019,
    2018
];

const objetos = [
    {
        texto: "Valor 1",
        valor: 1
    },
    {
        texto: "Valor 2",
        valor: 2
    },
    {
        texto: "Valor 3",
        valor: 3
    }
]

export class ComboPage extends React.Component<Props, State> {
    state: State = {
        data: datas[0],
        objeto: objetos[0].valor
    }

    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Uso padrão:</p>
                            <code>{""}</code>

                            <Combo
                                contexto={this}
                                label={"Data:"}
                                nome={"data"}
                                valor={this.state.data}
                                padrao={this.state.data}
                                opcoes={datas}
                            />
                            <br/>
                            Valor: {this.state.data}

                            <Combo
                                contexto={this}
                                label={"Objeto:"}
                                nome={"objeto"}
                                nomeMembro={"texto"}
                                valorMembro={"valor"}
                                valor={this.state.objeto}
                                padrao={this.state.objeto}
                                opcoes={objetos}
                            />
                            <br/>
                            Valor: {this.state.objeto}
                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}