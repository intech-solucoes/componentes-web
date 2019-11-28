import React from "react";
import MasterPage from "../../MasterPage";
import { Alerta, TipoAlerta, Row, Col, Box, Form, CampoTexto, Botao, Combo, Pesquisa, Tabela, ColunaTabela, FormEdicao, ModoFormEdicao } from "../../..";
import { timingSafeEqual } from "crypto";

interface Props {

}

interface State {
    listaUsuarios: Array<UsuarioEntidade>;
    usuarioPesquisa: UsuarioEntidade;
    usuarioEdicao: UsuarioEntidade;
    resultadoPesquisa: Array<UsuarioEntidade>;
    modoForm: ModoFormEdicao;
}

class UsuarioEntidade {
    public OID_USUARIO: number;
    public NOM_LOGIN: string;
    public NOM_USUARIO: string;

    constructor(oid: number, login: string, nome: string) {
        this.OID_USUARIO = oid;
        this.NOM_LOGIN = login;
        this.NOM_USUARIO = nome;
    }
}

var listaUsuarios = [
    new UsuarioEntidade(1, "1", "Usuário 1"),
    new UsuarioEntidade(2, "2", "Usuário 2"),
    new UsuarioEntidade(3, "3", "Usuário 3"),
    new UsuarioEntidade(4, "4", "Usuário 4"),
    new UsuarioEntidade(5, "5", "Usuário 5"),
    new UsuarioEntidade(6, "6", "Usuário 6"),
    new UsuarioEntidade(7, "7", "Usuário 7"),
    new UsuarioEntidade(8, "8", "Usuário 8"),
    new UsuarioEntidade(9, "9", "Usuário 9"),
    new UsuarioEntidade(10, "10", "Usuário 10"),
    new UsuarioEntidade(11, "11", "Usuário 11"),
    new UsuarioEntidade(12, "12", "Usuário 12"),
    new UsuarioEntidade(13, "13", "Usuário 13")
];

export class CrudPage extends React.Component<Props, State> {
    
    state: State = {
        listaUsuarios,
        usuarioPesquisa: new UsuarioEntidade(0, "", ""),
        usuarioEdicao: new UsuarioEntidade(0, "", ""),
        resultadoPesquisa: [],
        modoForm: ModoFormEdicao.Inclusao
    }

    pesquisar = async() => {

    }

    editar = async(usuario: UsuarioEntidade) => {
        this.setState({
            modoForm: ModoFormEdicao.Edicao
        });
    }

    salvar = async() => {
        
    }
    
    render() {
        return (
            <MasterPage {...this.props}>
                <Pesquisa onPesquisar={this.pesquisar}>
                    <CampoTexto contexto={this} parent={"usuarioPesquisa"} label={"Login"} nome={"NOM_LOGIN"} valor={this.state.usuarioPesquisa.NOM_LOGIN} />
                    <CampoTexto contexto={this} parent={"usuarioPesquisa"} label={"Nome"} nome={"NOM_USUARIO"} valor={this.state.usuarioPesquisa.NOM_USUARIO} />
                </Pesquisa>

                <Tabela dados={this.state.resultadoPesquisa}
                        onSelecionar={(usuario: UsuarioEntidade) => this.editar(usuario)} 
                        onPesquisar={this.pesquisar}
                >
                    <ColunaTabela titulo={"Login"} propriedadeValor={"NOM_LOGIN"} />
                    <ColunaTabela titulo={"Nome"} propriedadeValor={"NOM_USUARIO"} />
                </Tabela>

                <FormEdicao item={this.state.usuarioEdicao} onSalvar={this.salvar} modo={this.state.modoForm}>
                    <CampoTexto contexto={this} parent={"usuarioEdicao"} label={"Login"} nome={"NOM_LOGIN"} valor={this.state.usuarioEdicao.NOM_LOGIN} />
                    <CampoTexto contexto={this} parent={"usuarioEdicao"} label={"Nome"} nome={"NOM_USUARIO"} valor={this.state.usuarioEdicao.NOM_USUARIO} />
                </FormEdicao>
            </MasterPage>
        );
    }
}