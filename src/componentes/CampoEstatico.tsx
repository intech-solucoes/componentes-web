import React from 'react';
import classNames from "classnames";
import moment from "moment";
import { Row } from '..';

export enum TipoCampoEstatico {
    texto,
    dinheiro,
    data
}

export enum PosicaoTituloCampoEstatico {
    esquerda,
    cima
}

interface Props {
    valor: string | number | Date;

    id?: string;
    obrigatorio?: boolean;
    tipo?: TipoCampoEstatico;

    titulo?: string;
    tamanhoTitulo?: string;
    posicaoTitulo?: PosicaoTituloCampoEstatico;

    tamanhoCampo?: string;
}

export class CampoEstatico extends React.Component<Props> {

    static defaultProps = {
        tipo: TipoCampoEstatico.texto,
        posicao: PosicaoTituloCampoEstatico.esquerda
    }

    parseValue() {
        if (this.props.tipo === TipoCampoEstatico.data)
            return moment(this.props.valor).format("DD/MM/YYYY");
        if (this.props.tipo === TipoCampoEstatico.dinheiro) {
            if (typeof (this.props.valor) === "string")
                return `R$ ${Number.parseFloat(this.props.valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            else
                return `R$ ${this.props.valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        return this.props.valor;
    }

    renderLabel() {
        if (this.props.titulo) {
            const cima = this.props.posicaoTitulo === PosicaoTituloCampoEstatico.cima;
            
            const labelClasses = classNames({
                "col-lg-2": !this.props.tamanhoTitulo && !cima,
                "col-lg-12": !this.props.tamanhoTitulo && cima,
                [`col-${this.props.tamanhoTitulo}`]: this.props.tamanhoTitulo && !cima,
                "col-md-12": !this.props.tamanhoTitulo,
                "text-lg-right": !cima,
                "col-form-label": true,
                //"text-primary": true
            });

            return (
                <label className={labelClasses}>
                    <b>
                        {this.props.titulo}
                        {this.props.obrigatorio && " *"}
                    </b>
                </label>
            );
        }
        return null;
    }

    renderCampo() {
        let valor: string | number | Date = this.parseValue();
            
        const labelClasses = classNames({
            "col": this.props.titulo,
            "form-control-plaintext": this.props.titulo,
            "align-self-center": this.props.titulo
        });

        return (
            <label className={labelClasses}>
                {valor}
            </label>
        );
    }

    render() {
        const classes = classNames({
            "form-group": true,
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });

        if(this.props.titulo) {
            return (
                <div className={classes}>
                    <Row>
                        {this.renderLabel()}
                        {this.renderCampo()}
                    </Row>
                </div>
            );
        } else {
            return this.renderCampo();
        }
    }
}