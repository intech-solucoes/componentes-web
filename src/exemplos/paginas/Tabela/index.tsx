import React from "react";
import MasterPage from "../../MasterPage";
import { Alerta, TipoAlerta, Row, Col, Box, Form, CampoTexto, Botao, Combo, Tabela, ColunaTabela } from "../../..";

interface Props { }

interface State {
    dados: Array<any>;
}

const dados = [
    {
        nome: "Fulano 1",
        cpf: "123"
    },
    {
        nome: "Fulano 2",
        cpf: "456"
    }
];

export class TabelaPage extends React.Component<Props, State> {
    
    state: State = {
        dados: dados
    }
    
    render() {
        return (
            <MasterPage {...this.props}>
                <Box titulo={"Tabela"}>
                    <Tabela dados={this.state.dados}>
                        <ColunaTabela titulo={"Nome"} propriedadeValor={"nome"} />
                        <ColunaTabela titulo={"CPF"} propriedadeValor={"cpf"} />
                    </Tabela>
                </Box>
            </MasterPage>
        );
    }
}