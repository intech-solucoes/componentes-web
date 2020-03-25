import React from "react";
import { Box, Botao, Form, Alerta, TipoAlerta } from "..";

interface Props {
    contexto: any;
    onPesquisar?: Function;
    service?: any;
    dados?: any;
}

interface State { }

export class Pesquisa extends React.Component<Props, State> {
    form = React.createRef<Form>();
    alerta = React.createRef<Alerta>();

    pesquisar = async () => {
        try {
            await this.form.current.validar();

            if (this.form.current.isValido()) {

                if (this.props.service) {
                    var result = await this.props.service["Pesquisar"](this.props.dados);
                    this.props.contexto.setState({
                        resultadoPesquisa: result,
                        pesquisado: true
                    });
                    //await this.props.onPesquisar(result);
                } else {
                    await this.props.onPesquisar();
                }

            }
        } catch (erro) {
            if (erro.response) {
                this.alerta.current.adicionarErro(erro.response.data);
                this.form.current.setState({ valido: false });
            } else {
                this.alerta.current.adicionarErro(erro);
                this.form.current.setState({ valido: false });
            }

            await this.props.contexto.setState({
                resultadoPesquisa: []
            });
        }
    }

    render() {
        return (
            <Box titulo={"Pesquisa"}>
                <Form ref={this.form}>
                    {this.props.children}

                    <Alerta ref={this.alerta} tipo={TipoAlerta.danger} padraoFormulario />

                    <Botao titulo={"Pesquisar"} onClick={this.pesquisar} />
                </Form>
            </Box>
        );
    }
}