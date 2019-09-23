import React from 'react';
import { Col, Row } from "..";
import classNames from "classnames";
import moment from "moment";

export enum TipoCampoEstatico {
    texto,
    dinheiro,
    data
}

interface Props {
    valor: string | number;
    
    col?: string; //rename to tamanhoCampo?
    id?: string;
    label?: string;
    obrigatorio?: boolean;
    tamanhoCampo?: string;
    tamanhoLabel?: string;
    tipo?: TipoCampoEstatico;
    titulo?: string; //rename to label?
}

export class CampoEstatico extends React.Component<Props> {

    static defaultProps = {
        tipo: TipoCampoEstatico.texto
    }
    
    parseValue(){
        if(this.props.tipo === TipoCampoEstatico.data)
            return moment(this.props.valor).format("DD/MM/YYYY");
        if(this.props.tipo === TipoCampoEstatico.dinheiro){
            if(typeof(this.props.valor) === "string")
                return `R$ ${Number.parseFloat(this.props.valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            else
                return `R$ ${this.props.valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }
        return this.props.valor;
    }
    
    renderLabel(){
      const auxLabel = this.props.label || this.props.titulo;
      if(auxLabel){
        
        const aux = this.props.tamanhoLabel || this.props.col;
        
        const labelClasses = classNames({
            "col-lg-2": !aux,
            [`col-${aux}`]: aux,
            "col-md-12": !aux,
            "text-lg-right": true,
            "col-form-label": true
        });
        
        return(
            <div className={labelClasses}>
						    <b>
                    <label >
                        {auxLabel}
                        {this.props.obrigatorio && " *"}
                    </label>
                </b>
				  	</div>
        );
      }
      return null;
    }
    
    renderCampo(){
      let valor: string | number | Date = this.parseValue();
      
      const campoClasses = classNames({
          "col": !this.props.tamanhoCampo,
          [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo,
          "align-self-center": true
      });
      
      return(
        <Col className={campoClasses}>
          {valor}
        </Col>
      );
    }

    render() {
        return (
            <Row formGroup>
                {this.renderLabel()}
                {this.renderCampo()}
            </Row>
        );
    }
}