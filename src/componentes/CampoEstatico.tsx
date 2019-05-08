import React from 'react';
import classNames from "classnames";

export enum TipoCampoEstatico {
    texto,
    dinheiro
}

interface Props {
    col?: string;
    id?: string;
    valor: string | number;
    titulo?: string;
    tipo?: TipoCampoEstatico;
}

export class CampoEstatico extends React.Component<Props> {

    static defaultProps = {
        tipo: TipoCampoEstatico.texto
    }

    render() {
        var valor: string | number = this.props.valor;

        if(this.props.tipo === TipoCampoEstatico.dinheiro) {
            if(typeof(this.props.valor) === "string")
                valor = `R$ ${Number.parseFloat(this.props.valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            else
                valor = `R$ ${this.props.valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }

        var classes = classNames({
            "form-group": true,
            "col": !this.props.col,
            [`col-${this.props.col}`]: this.props.col
        });
        
        if(this.props.titulo) {
            return (
                <div className={classes}>
                    <label className="text-primary">{this.props.titulo}</label>
                    <label id={this.props.id} className="form-control-plaintext">{valor}</label>
                </div>
            );
        } else {
            return (
                <label>{valor}</label>
            );
        }
    }

}