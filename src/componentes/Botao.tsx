import React from 'react';
import classNames from "classnames";

export enum TipoBotao {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark",
    link = "link"
}

export enum TamanhoBotao {
    grande = "btn-lg",
    normal = "btn-md",
    pequeno = "btn-sm",
    mini = "btn-xs"
}

interface Props {
    block?: boolean;
    outline?: boolean;
    submit?: boolean;
    titulo?: string;
    icone?: string;
    className?: string;
    usaLoading?: boolean;
    desativado?: boolean;
    iconeDireita?: boolean;
    tipo?: TipoBotao;
    tamanho?: TamanhoBotao;
    children?: React.ReactNode;
    style?: any;

    onClick: Function;
}

interface State {
    carregando: boolean;
}

export class Botao extends React.Component<Props, State> {

    static defaultProps = {
        tipo: TipoBotao.primary,
        tamanho: TamanhoBotao.normal
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            carregando: false
        }
    }

    onClick = async (e: any) => {
        e.preventDefault();

        if(this.props.usaLoading)
            await this.setState({ carregando: true });

        await this.props.onClick();

        if(this.props.usaLoading)
            await this.setState({ carregando: false });
    }

    render() {
        var type: any = this.props.submit ? "submit" : "button";

        var classes = classNames(
            "btn",
            {[`btn-${this.props.tipo}`]: !this.props.outline },
            {[`btn-outline-${this.props.tipo}`]: this.props.outline },
            { "btn-block": this.props.block },
            this.props.tamanho,
            this.props.className);

        var classesIcone = classNames(
            "fas",
            {"mr-2": this.props.titulo && !this.props.iconeDireita},
            {"ml-2": this.props.titulo && this.props.iconeDireita},
            this.props.icone
        );

        return (
            <button type={type} 
                className={classes} onClick={this.onClick} 
                style={this.props.style}
                disabled={this.props.desativado || this.state.carregando}
            >
                {!this.state.carregando && 
                    <span>
                        {this.props.icone && !this.props.iconeDireita && <i className={classesIcone}></i>}
                        {this.props.titulo}
                        {this.props.icone && this.props.iconeDireita && <i className={classesIcone}></i>}
                    </span>
                }

                {!this.props.titulo && this.state.carregando && 
                    this.props.children}

                {this.state.carregando &&
                    <i className="fas fa-spinner fa-pulse"></i>}
            </button>
        )
    }
}