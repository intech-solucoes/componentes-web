import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Modal, Botao, ModalConfirma } from "../../..";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

interface Props { }

interface State{
    modalStatus: boolean;
}

export class ModalConfirmaPage extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            modalStatus: false,
        }
    }
    
    toggleModal = () => {
        const body = document.querySelector("body");

        if(!this.state.modalStatus){
            body.classList.add('modal-open');
        }
        else{
            body.classList.remove('modal-open');
        }
      
        this.setState({modalStatus: !this.state.modalStatus})
    }

    confirmaModal = () => {
        toast.info("Modal Confirmada....");
        this.toggleModal();
    }
    
    cancelaModal = () => {
        toast.warning("Modal não Confirmada....");
        this.toggleModal();
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
                            <p>Modal para confirmação de alguma ação do Usuário.</p>
                            <ModalConfirma
                                onClose={this.cancelaModal}
                                onConfirm={this.confirmaModal}
                                visivel={this.state.modalStatus}
                                titulo={"Confirma"}
                            >
                                Confirma a Exclusão do Registro ?
                            </ModalConfirma>
                            
                            <Botao
                                titulo={"Mostrar Modal"}
                                onClick={this.toggleModal}
                            />
                        </Box>
                    </Col>
                </Row>
                <ToastContainer />
           </MasterPage>
        );
    }
}