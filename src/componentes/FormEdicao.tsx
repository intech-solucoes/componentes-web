import React from "react";
import { Box, Botao } from "..";

interface Props {
}

interface State { }

export class FormEdicao extends React.Component<Props, State> {
    render() {
        return (
            <Box titulo={"Edição"}>

                {this.props.children}
                
                <Botao titulo={"Salvar"} onClick={() => {  }} className={"mr-2"} />
                <Botao titulo={"Cancelar"} onClick={() => {  }}/>
                
            </Box>
        );
    }
}