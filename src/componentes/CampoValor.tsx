import React from 'react';
import moment from "moment";

import { handleFieldChange } from "@intechprev/react-lib";

import { Botao, Col, Row } from "..";
import classNames from 'classnames';
import NumberFormat from 'react-number-format';

// var InputMask = require('react-input-mask');

export enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}

export enum PosicaoTituloCampoValor {
    esquerda,
    cima
}

interface Props {
    contexto: any;
    nome: string;
    valor: number;

    titulo?: string;
    desabilitado?: boolean;
    mascara?: string;
    max?: number;
    min?: number;
    obrigatorio?: boolean;
    onBlur?: any;
    onChange?: any;
    parent?: any;
    placeholder?: string;
    rows?: number;
    textarea?: boolean;
    tamanhoCampo?: string;
    tamanhoTitulo?: string;
    tipo?: string;

    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;

    posicaoTitulo?: PosicaoTituloCampoValor;
    tituloClassName?: any;
}

export class CampoValor extends React.Component<Props> {

    static defaultProps = {
        posicao: PosicaoTituloCampoValor.esquerda
    }

    renderLabel() {

        if (this.props.titulo) {

            const cima = this.props.posicaoTitulo === PosicaoTituloCampoValor.cima;

            const labelClasses = classNames({
                ["col-lg-2"]: !this.props.tamanhoTitulo && !cima,
                [`col-${this.props.tamanhoTitulo}`]: this.props.tamanhoTitulo && !cima,
                "col-md-12": true,
                "text-lg-right": !cima,
                "col-form-label": true
            }, this.props.tituloClassName);

            return (
                <div className={labelClasses}>
                    <b>
                        <label htmlFor={this.props.nome}>
                            {this.props.titulo}
                            {this.props.obrigatorio && " *"}
                        </label>
                    </b>
                </div>
            );
        }
        return null;
    }

    renderBotaoGrupo() {
        if (this.props.grupo) {
            return (
                <div className="input-group-append">
                    <Botao
                        titulo={this.props.tituloBotao}
                        onClick={this.props.onBotaoClick}
                        icone={this.props.iconeBotao}
                        iconeDireita={this.props.iconeBotaoDireita}
                    />
                </div>
            );
        }
        return null;
    }

    mountCampo(valor: any) {

        if (this.props.desabilitado){
            return (
                <input type="text"
                    name={this.props.nome}
                    value={valor}
                    // maxLength={this.props.max}
                    className={"form-control"}
                    placeholder={this.props.placeholder}
                    id={this.props.nome}
                    disabled={this.props.desabilitado}
                />
            );
        }
        else if (this.props.textarea) {
            return (
                <textarea
                    name={this.props.nome}
                    id={this.props.nome}
                    className={"form-control"}
                    rows={this.props.rows}
                    placeholder={this.props.placeholder}
                    value={valor}
                    maxLength={this.props.max}
                    onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}
                    onBlur={this.props.onBlur}
                />
            );
        }

        else if (this.props.tipo === 'dinheiro' ) {
            return (
                <NumberFormat 
                  thousandSeparator="."  
                  decimalSeparator=","  
                  decimalScale={2} prefix="R$" 
                  fixedDecimalScale={true} 
                  disabled={this.props.desabilitado} 
                  onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}
                  onBlur={this.props.onBlur}
                />
            );
        }
        else if (this.props.tipo === 'percentual' ) {
            return (
                <NumberFormat decimalSeparator=","  decimalScale={2} prefix="%" fixedDecimalScale={true} disabled={this.props.desabilitado} onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}
                />
            );
        }
        else if (this.props.tipo === 'data' ) {
            return (
                <NumberFormat format="##/##/####" mask="_" disabled={this.props.desabilitado} onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}              
                />
            );
        }
        else if (this.props.tipo === 'mesano' ) {
            return (
                <NumberFormat format="##/####" mask="_" disabled={this.props.desabilitado} onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}
                />
            );
        }
        else if (this.props.tipo === 'telefone' ) {
            return (
                <NumberFormat format="(###) #####-####" mask="_" disabled={this.props.desabilitado} onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}/>
            );
        }
        else {
            return (
                <NumberFormat 
                  thousandSeparator="."  
                  decimalSeparator=","  
                  decimalScale={2} prefix="R$" 
                  fixedDecimalScale={true} 
                  disabled={this.props.desabilitado} 
                  onValueChange={(this.props.contexto, this.props.parent)}
                  onBlur={this.props.onBlur}
                />

                // <NumberFormat thousandSeparator={true} prefix={'$'} onValueChange={(values) => {
                //     const {formattedValue} = values;
                //     // formattedValue = $2,223
                //     // value ie, 2223
                //     this.setState({formattedValue})
                //   }}/>
            );
        }
    }

    renderCampo() {
        const campoClasses = classNames({
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });

        let valor = "";

        if (this.props.valor)
            valor = this.props.valor.toString();

        if (typeof (valor) === typeof (Date))
            valor = moment(valor).format("dd/MM/yyyy");

        if (this.props.grupo) {
            return (
                <Col className={campoClasses}>
                    <div className="input-group">
                        {this.props.botaoEsquerda ? this.renderBotaoGrupo() : null}
                        {this.mountCampo(valor)}
                        {this.props.botaoEsquerda ? null : this.renderBotaoGrupo()}
                    </div>
                </Col>
            );
        }
        else {
            return (
                <Col className={campoClasses}>
                    {this.mountCampo(valor)}
                </Col>
            );
        }
    }

    render() {
        
        return (
            <Row formGroup>
                {this.renderLabel()}
                {this.renderCampo()}
            </Row>
        )
    }
}