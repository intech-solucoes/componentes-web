import React from "react";
import MasterPage from "../../MasterPage";
import { Alerta, TipoAlerta, Row, Col, Box, Form, CampoTexto, Botao, Combo } from "../../..";

interface Props { }

interface State {
    campoNaoObrigatorio: string;
    campoObrigatorio: string;
    campoDataNaoObrigatoria: string;
    campoDataObrigatoria: string;
    comboNaoObrigatorio: string;
    comboObrigatorio: string;
    comboObrigatorioSemLabel: string;
}

const opcoesSimNao = [
    {
        name: "Não",
        value: "false"
    },
    {
        name: "Sim",
        value: "true"
    }
];

export class FormPage extends React.Component<Props, State> {

    private alert = React.createRef<Alerta>();
    private form = React.createRef<Form>();
    
    state: State = {
        campoNaoObrigatorio: "",
        campoObrigatorio: "1",
        campoDataNaoObrigatoria: "",
        campoDataObrigatoria: "1991-01-01",
        comboNaoObrigatorio: "",
        comboObrigatorio: "false",
        comboObrigatorioSemLabel: ""
    }

    validar = async() => {
        await this.alert.current.limparErros();
        await this.form.current.validar();

        if (this.form.current.state.valido) {
            alert("Campos válidos!");
        }
    }
    
    render() {
        return (
            <MasterPage {...this.props}>
                <Box titulo={"Form"}>
                    <Form ref={this.form}>
                        
                        <CampoTexto
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            label={"Campo Não Obrigatório"}
                            nome={"campoNaoObrigatorio"}
                            valor={this.state.campoNaoObrigatorio}
                        />
                        
                        <CampoTexto
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            label={"Campo Obrigatório"}
                            nome={"campoObrigatorio"}
                            valor={this.state.campoObrigatorio}
                            obrigatorio
                        />

                        <CampoTexto
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            tipo={"date"}
                            label={"Campo Data Não Obrigatória"}
                            nome={"campoDataNaoObrigatoria"}
                            valor={this.state.campoDataNaoObrigatoria}
                        />

                        <CampoTexto
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            tipo={"date"}
                            label={"Campo Data Obrigatória"}
                            nome={"campoDataObrigatoria"}
                            valor={this.state.campoDataObrigatoria}
                            obrigatorio
                        />

                        <Combo
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            label={"Combo Não Obrigatório"}
                            nome={"comboNaoObrigatorio"}
                            valor={this.state.comboNaoObrigatorio}
                            textoVazio={"Selecione uma opção..."}
                            opcoes={opcoesSimNao}
                            nomeMembro={"name"}
                            valorMembro={"value"}
                        />

                        <Combo
                            contexto={this}
                            tamanhoLabel={"lg-3"}
                            label={"Combo Obrigatório"}
                            nome={"comboObrigatorio"}
                            opcoes={opcoesSimNao}
                            valor={this.state.comboObrigatorio}
                            textoVazio={"Selecione uma opção..."}
                            nomeMembro={"name"}
                            valorMembro={"value"}
                            obrigatorio
                        />
                        
                        <Combo
                            contexto={this}
                            label={"Combo obrigatório sem label"}
                            nome={"comboObrigatorioSemLabel"}
                            valor={this.state.comboObrigatorioSemLabel}
                            textoVazio={"Combo obrigatório sem label..."}
                            opcoes={opcoesSimNao}
                            nomeMembro={"name"}
                            valorMembro={"value"}
                            obrigatorio
                            labelOculta
                        />

                        <Alerta ref={this.alert} tipo={TipoAlerta.danger} padraoFormulario />
                        <Botao onClick={this.validar} titulo={"Continuar"} submit />
                    </Form>
                </Box>
            </MasterPage>
        );
    }
}