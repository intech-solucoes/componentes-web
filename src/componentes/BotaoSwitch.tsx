import React from "react";
import classNames from "classnames";
import { TipoBotao } from "./Botao";

interface Props {
    checked?: boolean;
    icone?: string;
    iconeDireita?: boolean;
    tituloAtivo?: string;
    tituloInativo?: string;
    iconeAtivo?: string;
    iconeInativo?: string;
    tipoAtivo?: TipoBotao;
    tipoInativo?: TipoBotao;
    className?: string;

    onChange: Function;
}

export class BotaoSwitch extends React.Component<Props> {
    static defaultProps = {
        tipoAtivo: TipoBotao.primary,
        tipoInativo: TipoBotao.dark,
        checked: false,
        iconeAtivo: "fa-check",
        iconeInativo: "fa-times"
    }

    onChange = async () => {
        this.props.onChange();
    }

    render() {
        var tipo = this.props.checked ? this.props.tipoAtivo : this.props.tipoInativo;

        var classesContainer = classNames(
            "btn-group-toggle",
            this.props.className
        );

        var classesLabel = classNames(
            "btn",
            [`btn-${tipo}`],
            {"active": this.props.checked}
        );

        var classesIcone = classNames(
            "fas",
            {"mr-2": this.props.tituloAtivo && this.props.tituloInativo && !this.props.iconeDireita},
            {"ml-2": this.props.tituloAtivo && this.props.tituloInativo && this.props.iconeDireita},
            {[`${this.props.iconeAtivo}`]: this.props.iconeAtivo && this.props.checked },
            {[`${this.props.iconeInativo}`]: this.props.iconeInativo && !this.props.checked }
        );

        return (
            <div className={classesContainer}>
                <button className={classesLabel} onClick={() => this.props.onChange()}>
                    {this.props.iconeAtivo && this.props.checked && !this.props.iconeDireita 
                        && <i className={classesIcone}></i>}

                    {this.props.iconeInativo && !this.props.checked && !this.props.iconeDireita 
                        && <i className={classesIcone}></i>}

                    {this.props.checked ? this.props.tituloAtivo : this.props.tituloInativo}
                </button>
            </div>
        );
    }
}