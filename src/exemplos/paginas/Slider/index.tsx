import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Slider } from "../../..";

interface Props { }

interface State {
    vlMinimoInvalidez: number,
    vlMaximoInvalidez: number,
    vlInvalidez: number;

    vlMinimoMorte: number,
    vlMaximoMorte: number,
    vlMorte: number,

}

export class SliderPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            vlMinimoInvalidez: 0,
            vlMaximoInvalidez: 1,
            vlInvalidez: 0,

            vlMinimoMorte: 0,
            vlMaximoMorte: 1,
            vlMorte: 0,
        }
    }

    limitarCampos = async () => {
        console.log({
            vlInvalid: this.state.vlInvalidez,
            vlMorte: this.state.vlMorte,

            maxInvalid: this.state.vlMaximoInvalidez,
            maxMorte: this.state.vlMaximoMorte
        });

        await this.setState({
            vlMaximoMorte: 1 - this.state.vlInvalidez
        });
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
                                    <h5 className={"mt-5 mb-2"}>Beneficio de Risco - Invalizez Participante</h5>
                                    <div>
                                        <Slider
                                            contexto={this}
                                            nome={"vlInvalidez"}
                                            min={this.state.vlMinimoInvalidez}
                                            max={this.state.vlMaximoInvalidez}
                                            step={0.1}
                                            formato={"%"}
                                            valor={this.state.vlInvalidez}
                                            onChange={this.limitarCampos}
                                        />

                                        {"Valor: "}{this.state.vlInvalidez}<br />
                                        {"Min: "}{this.state.vlMinimoInvalidez}<br />
                                        {"Max: "}{this.state.vlMaximoInvalidez}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h5 className={"mt-5 mb-2"}>Beneficio de Risco - Morte Participante</h5>
                                    <div>
                                        <Slider
                                            contexto={this}
                                            nome={"vlMorte"}
                                            min={this.state.vlMinimoMorte}
                                            max={this.state.vlMaximoMorte}
                                            step={0.1}
                                            formato={"%"}
                                            valor={this.state.vlMorte}
                                            onChange={this.limitarCampos}
                                        />
                                        {"Valor: "}{this.state.vlMorte}<br />
                                        {"Min: "}{this.state.vlMinimoMorte}<br />
                                        {"Max: "}{this.state.vlMaximoMorte}
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