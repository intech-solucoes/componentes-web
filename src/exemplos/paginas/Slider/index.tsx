import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, ISlider } from "../../..";

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

    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Uso padrão:</p>
                            <code>{"<ISlider valMin={0} valMax={20} step={5}/>"}</code>
                            <p>A cor é opcional, se não informar, a cor será verde por Default:</p>
                            <code>{"<ISlider cor={#FF4136} valMin={0} valMax={20} step={5}/>"}</code>

                            <Row>
                                <Col>
                                     <h5 className={"mt-5 mb-2"}>Beneficio de Risco - Invalizez Participante</h5>
                                     <div>
                                         <ISlider 
                                            id={"id1"}
                                            nome={"riscoInvalidez"}
                                            valMin={this.state.vlMinimoInvalidez} 
                                            valMax={this.state.vlMaximoInvalidez} 
                                            step={0.1} 
                                            formato={"%"} 
                                            valor={this.state.vlInvalidez}
                                            onChange={this.state.vlInvalidez}
                                        />
                                        {"Valor retorno: "}{this.state.vlInvalidez} { "%"}
                                     </div>
                               </Col>
                            </Row>

                            <Row>
                               <Col>
                                    <h5 className={"mt-5 mb-2"}>Beneficio de Risco - Morte Participante</h5>
                                    <div>
                                    <ISlider 
                                        id={"id1"}
                                        nome={"riscoMorte"}
                                        valMin={this.state.vlMinimoMorte} 
                                        valMax={this.state.vlMaximoMorte} 
                                        step={0.1} 
                                        formato={"%"} 
                                        valor={this.state.vlMorte}                                        
                                        onChange={this.state.vlMorte}                                        
                                    />
                                        {"Valor retorno: "}{this.state.vlMorte} { "%"}
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