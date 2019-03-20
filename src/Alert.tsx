import React from 'react';
import classNames from "classnames";

export enum TipoAlerta {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark"
}

interface Props {
    mensagem?: string;
    padraoFormulario: boolean;
    className?: string;
    tipo: TipoAlerta;
    tamanho: string;
}

interface State {
    mensagem: string;
}

export class Alert extends React.Component<Props, State> {
    static defaultProps = {
        mensagem: "",
        tamanho: "12",
        padraoFormulario: false
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            mensagem: ""
        }
    }

    adicionarErro = async (mensagemErro: string) => { 
        var temMensagem = (this.props.mensagem && this.props.mensagem.length > 0) || this.state.mensagem.length > 0;
        var espacamento = temMensagem ? "<br/>" : "";

        await this.setState({
            mensagem: this.state.mensagem + espacamento + mensagemErro
        });
    }

    limparErros = async () => { 
        await this.setState({
            mensagem: ""
        })
    }

    possuiErro = async () => this.state.mensagem.length === 0;

    render() {

        var classes = classNames(
            "alert",
            [`alert-${this.props.tipo}`],
            this.props.className);

        return (
            <div>
                {(this.state.mensagem || this.props.mensagem) &&
                    <div id="alerta" className={classes}
                        dangerouslySetInnerHTML={{ __html: this.props.mensagem + this.state.mensagem }}>
                    </div>
                }
            </div>
        );
    }
}