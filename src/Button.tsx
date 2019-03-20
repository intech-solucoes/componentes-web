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

interface Props {
    block?: boolean;
    pequeno?: boolean;
    submit?: boolean;
    titulo: string;
    className?: string;
    usaLoading?: boolean;
    desativado?: boolean;
    tipo?: TipoBotao;
    children?: React.ReactNode;

    onClick: Function;
}

interface State {
    carregando: boolean;
}

export class Button extends React.Component<Props, State> {

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
        var type = this.props.submit ? "submit" : "button";

        var classes = classNames(
            "btn",
            [`btn-${this.props.tipo}`],
            { "btn-block": this.props.block },
            { "btn-sm": this.props.pequeno },
            this.props.className);

        return (
            <button type={type} 
                className={classes} onClick={this.onClick} 
                disabled={this.props.desativado || this.state.carregando}
            >
                {!this.state.carregando && 
                    this.props.titulo}

                {this.props.children}

                {this.state.carregando &&
                    <i className="fas fa-spinner fa-pulse"></i>}
            </button>
        )
    }
}