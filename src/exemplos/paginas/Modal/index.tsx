import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Modal, Botao } from "../../..";

interface Props { }

interface State{
    modalStatus_1: boolean;
    modalStatus_2: boolean;
    modalStatus_3: boolean;
}

export class ModalPage extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            modalStatus_1: false,
            modalStatus_2: false,
            modalStatus_3: false
        }
    }
    
    toggleModal_1 = () => {
        const body = document.querySelector("body");
        if(!this.state.modalStatus_1){
            body.classList.add('modal-open');
        }
        else{
            body.classList.remove('modal-open');
        }
      
        this.setState({modalStatus_1: !this.state.modalStatus_1})
    }
    
    toggleModal_2 = () => {
        const body = document.querySelector("body");
        if(!this.state.modalStatus_2){
            body.classList.add('modal-open');
        }
        else{
            body.classList.remove('modal-open');
        }
        
        this.setState({modalStatus_2: !this.state.modalStatus_2})
    }
    
    toggleModal_3 = () => {
        const body = document.querySelector("body");
        if(!this.state.modalStatus_3){
            body.classList.add('modal-open');
        }
        else{
            body.classList.remove('modal-open');
        }
        
        this.setState({modalStatus_3: !this.state.modalStatus_3})
    }
    
    lots = () => {
        let lots = [];
        for(let l = 0; l < 50; l++){
            lots.push(
                <div>
                    {"WOOHOO!!!"}
                </div>
            );
        }
        return lots;
    }
    
    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Status do Modal"}>
                            <p>Ligue e desligue o modal utilizando a props "status"</p>
                            <code>{"toggleModal = () => {this.setState({modalStatus: !this.state.modalStatus})}"}</code>
                            <code>{"<Modal onClick={this.toggleModal} status={this.state.modalStatus}/>"}</code>
                            <p>Para o scroll do modal funcionar corretamente é preciso adicionar a class "modal-open" no body da página.</p>
                            <code>{"const body = document.querySelector(\"body\"); if(this.state.modalStatus){ body.classList.add('modal-open'); } else{ body.classList.remove('modal-open'); }"}</code>
                            <Modal
                                conteudo={"..."}
                                onClick={this.toggleModal_1}
                                status={this.state.modalStatus_1}
                                titulo={"some modal"}
                            />
                            
                            <Botao
                                titulo={"Mostrar Modal"}
                                onClick={this.toggleModal_1}
                            />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Título do Modal"}>
                            <p>Altere o título dentro do modal utilizando a props "titulo"</p>
                            
                            <code>{"<Modal titulo={\"Título muito criativo!\"}/>"}</code>
                            
                            <Modal
                                conteudo={"..."}
                                onClick={this.toggleModal_2}
                                status={this.state.modalStatus_2}
                                titulo={"Título muito criativo!"}
                            />
                            
                            <Botao
                                titulo={"Mostrar Modal"}
                                onClick={this.toggleModal_2}
                            />
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Conteúdo do Modal"}>
                            <p>Altere o conteúdo dentro do modal utilizando a props "conteudo"</p>
                            
                            <code>{"<Modal conteudo={...muito html aqui}/>"}</code>
                            
                            <Modal
                                conteudo={this.lots()}
                                onClick={this.toggleModal_3}
                                status={this.state.modalStatus_3}
                                titulo={"Título muito criativo!"}
                            />
                            
                            <Botao
                                titulo={"Mostrar Modal"}
                                onClick={this.toggleModal_3}
                            />
                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}