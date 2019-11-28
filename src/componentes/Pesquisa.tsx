import React from "react";
import { Box, Botao, Form, Alerta, TipoAlerta } from "..";

interface Props {
    onPesquisar: Function;
}

interface State { }

export class Pesquisa extends React.Component<Props, State> {
    form = React.createRef<Form>();

    pesquisar = async() => {
        await this.form.current.validar();

        if(this.form.current.valido)
            this.props.onPesquisar(0);
    }

    render() {
        return (
            <Box titulo={"Pesquisa"}>
                <Form ref={this.form}>
                    {this.props.children}
                    
                    <Alerta tipo={TipoAlerta.danger} padraoFormulario />
                    
                    <Botao titulo={"Pesquisar"} onClick={this.pesquisar}/>
                </Form>
            </Box>
        );
    }
}