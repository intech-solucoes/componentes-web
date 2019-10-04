import React from 'react';
import moment from "moment";

import { handleFieldChange } from "@intechprev/react-lib";

import { Botao, Col, Row } from "..";
import classNames from 'classnames';

var InputMask = require('react-input-mask');

export enum PosicaoBotaoGrupo {
    direita = "direita",
    esquerda = "esquerda"
}

interface Props {
    contexto: any;
    nome: string;
    valor: string;
    
    desabilitado?: boolean;
    label?: string;
    mascara?: string;
    max?: number;
    min?: number;
    obrigatorio?: boolean;
    onBlur?: any;
    parent?: any;
    placeholder?: string;
    rows?: number;
    textarea?: boolean;
    tamanhoCampo?: string;
    tamanhoLabel?: string;
    titulo?: string;
    tipo?: string;
    
    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;
}

export class CampoTexto extends React.Component<Props> {
    renderLabel(){
      if(this.props.label){
          const labelClasses = classNames({
              ["col-lg-2"]: !this.props.tamanhoLabel,
              [`col-${this.props.tamanhoLabel}`]: this.props.tamanhoLabel,
              "col-md-12": true,
              "text-lg-right": true,
              "col-form-label": true
          });
      
          return(
              <div className={labelClasses}>
                  <b>
                      <label htmlFor={this.props.nome}>
                          {this.props.label}
                          {this.props.obrigatorio && " *"}
                      </label>
                  </b>
              </div>
          );
      }
      return null;
    }
    
    renderBotaoGrupo(){
        if(this.props.grupo){
            return(
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
    
    mountCampo(valor: any){
        if(this.props.textarea){
            return(
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
        else{
            return(
                <InputMask
                    title={this.props.titulo}
                    mask={this.props.mascara}
                    name={this.props.nome}
                    value={valor}
                    maxLength={this.props.max}
                    className={"form-control"}
                    type={this.props.tipo}
                    placeholder={this.props.placeholder}
                    id={this.props.nome}
                    disabled={this.props.desabilitado}
                    onChange={(e: any) => handleFieldChange(this.props.contexto, e, this.props.parent)}
                    onBlur={this.props.onBlur}
                />
            );
        }
    }
    
    renderCampo(){
        const campoClasses = classNames({
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });
        
        let valor = "";

        if(this.props.valor)
            valor = this.props.valor.toString();

        if(typeof(valor) === typeof(Date))
            valor = moment(valor).format("dd/MM/yyyy");
        
        if(this.props.grupo){
            return(
                <Col className={campoClasses}>
                  <div className="input-group">
                    {this.props.botaoEsquerda ? this.renderBotaoGrupo() : null}
                    {this.mountCampo(valor)}
                    {this.props.botaoEsquerda ? null : this.renderBotaoGrupo()}
                  </div>
				        </Col>
            );
        }
        else{
            return(
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