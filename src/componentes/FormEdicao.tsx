import React from "react";
import { Box, Botao } from "..";



export enum ModoFormEdicao {
    Edicao,
    Inclusao,
    Oculto
}

interface Props {
    item: any;
    onSalvar: Function;
    modo: ModoFormEdicao;
}

interface State {
    item: any;
}

export class FormEdicao extends React.Component<Props, State> {

    static defaultProps = {
        modo: ModoFormEdicao.Inclusao
    }

    state: State = {
        item: this.props.item
    }

    onSalvar = async() => {

    }

    render() {
        if(this.props.modo !== ModoFormEdicao.Oculto) {
            return (
                <Box titulo={this.props.modo === ModoFormEdicao.Inclusao ? "Inclusão" : "Edição"}>

                    {this.state.item && 
                        this.props.children
                    }

                    <Botao titulo={"Salvar"} onClick={() => {  }} className={"mr-2"} />
                    <Botao titulo={"Cancelar"} onClick={() => {  }}/>
                    
                </Box>
            );
        } else {
            return null;
        }
    }
}