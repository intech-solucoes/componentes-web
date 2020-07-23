import React, { Children } from "react";
import MasterPage from "../../MasterPage";
import {
    Alerta,
    TipoAlerta,
    Row,
    Col,
    Box,
    Form,
    CampoTexto,
    Botao,
    Combo,
    CampoValor,
} from "../../..";

interface Props {}

interface State {
    valorObrigatorio: number;
    campoNaoObrigatorio: string;
    campoObrigatorio: string;
    campoObrigatorioComponente: string;
    campoDataNaoObrigatoria: string;
    campoDataObrigatoria: string;
    comboNaoObrigatorio: string;
    comboObrigatorio: string;
    comboObrigatorioSemtitulo: string;
}

const opcoesSimNao = [
    {
        name: "Não",
        value: "false",
    },
    {
        name: "Sim",
        value: "true",
    },
];

const ComponenteTeste: React.FC = () => {
    return (
        <>
            <CampoTexto
                contexto={this}
                tamanhoTitulo={"lg-3"}
                titulo={"Campo Obrigatório dentro de componente"}
                nome={"campoObrigatorioComponente"}
                valor={this.state.campoObrigatorioComponente}
                obrigatorio
            />
        </>
    );
}

export class FormPage extends React.Component<Props, State> {
    private alert = React.createRef<Alerta>();
    private form = React.createRef<Form>();

    state: State = {
        valorObrigatorio: null,
        campoNaoObrigatorio: "",
        campoObrigatorio: "1",
        campoObrigatorioComponente: "",
        campoDataNaoObrigatoria: "",
        campoDataObrigatoria: "1991-01-01",
        comboNaoObrigatorio: "",
        comboObrigatorio: "false",
        comboObrigatorioSemtitulo: "",
    };

    validar = async () => {
        await this.alert.current.limparErros();
        await this.form.current.validar();

        if (this.form.current.state.valido) {
            alert("Campos válidos!");
        }
    };

    render() {
        return (
            <MasterPage {...this.props}>
                <Box titulo={"Form"}>
                    <Form ref={this.form}>
                        <div>
                            <p>
                                São consideradas pessoas politicamente expostas
                                detentores de mandatos eletivos, ocupantes de
                                cargo do Poder Executivo da União, Membros do
                                Conselho Nacional de Justiça/STF e dos Tribunais
                                Superiores (dentre outros).
                            </p>

                            <p>
                                Considera-se enquadrado como PESSOA
                                POLITICAMENTE EXPOSTA* (IN PREVIC 18/2014)?
                            </p>

                            <CampoValor
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                titulo={"Valor Obrigatório"}
                                nome={"valorObrigatorio"}
                                valor={this.state.valorObrigatorio}
                                obrigatorio
                            />

                            <CampoTexto
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                titulo={"Campo Não Obrigatório"}
                                nome={"campoNaoObrigatorio"}
                                valor={this.state.campoNaoObrigatorio}
                            />

                            <CampoTexto
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                titulo={"Campo Obrigatório"}
                                nome={"campoObrigatorio"}
                                valor={this.state.campoObrigatorio}
                                obrigatorio
                            />

                            <CampoTexto
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                tipo={"date"}
                                titulo={"Campo Data Não Obrigatória"}
                                nome={"campoDataNaoObrigatoria"}
                                valor={this.state.campoDataNaoObrigatoria}
                            />

                            <CampoTexto
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                tipo={"date"}
                                titulo={"Campo Data Obrigatória"}
                                nome={"campoDataObrigatoria"}
                                valor={this.state.campoDataObrigatoria}
                                obrigatorio
                            />

                            <Combo
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                titulo={"Combo Não Obrigatório"}
                                nome={"comboNaoObrigatorio"}
                                valor={this.state.comboNaoObrigatorio}
                                textoVazio={"Selecione uma opção..."}
                                opcoes={opcoesSimNao}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                            />

                            <Combo
                                contexto={this}
                                tamanhoTitulo={"lg-3"}
                                titulo={"Combo Obrigatório"}
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
                                titulo={"Combo obrigatório sem titulo"}
                                nome={"comboObrigatorioSemtitulo"}
                                valor={this.state.comboObrigatorioSemtitulo}
                                textoVazio={"Combo obrigatório sem titulo..."}
                                opcoes={opcoesSimNao}
                                nomeMembro={"name"}
                                valorMembro={"value"}
                                obrigatorio
                                tituloOculto
                            />

                            <ComponenteTeste />
                        </div>

                        <Alerta
                            ref={this.alert}
                            tipo={TipoAlerta.danger}
                            padraoFormulario
                        />
                        <Botao
                            onClick={this.validar}
                            titulo={"Continuar"}
                            submit
                        />
                    </Form>
                </Box>
            </MasterPage>
        );
    }
}
