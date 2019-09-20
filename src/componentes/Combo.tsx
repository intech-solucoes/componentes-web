import React, { Component } from "react";
import { handleFieldChange } from "@intechprev/react-lib";

import { Col, Row } from "..";
import classNames from 'classnames';

interface Props {
    contexto: any;
    nome: string;
    nomeMembro: string;
    valorMembro: string;
    valor: string;
    
    desabilitado?: boolean;
    label?: string;
    obrigatorio?: boolean;
    onChange?: Function;
    opcoes?: Array<any>;
    padrao?: string;
    tamanhoLabel?: string;
    tamanhoCampo?: string;
    textoVazio?: string;
}

export class Combo extends Component<Props> {

    erros: Array<string> = [];
    possuiErros: boolean = false;

	static defaultProps = {
		padrao: "",
		opcoes: []
	}

	async componentDidMount() {
		var nome = this.props.nome;

		// Atualiza o state do combo para o valor padrão selecionado via props.
		await this.props.contexto.setState({
			[nome]: this.props.padrao
        });
	}

	validar = () => {
		this.possuiErros = false;
		this.erros = [];

		if(this.props.obrigatorio)
		{
			if(this.props.valor === "")
				this.erros.push(`Campo "${this.props.label}" obrigatório.`);
		}

		this.possuiErros = this.erros.length > 0;
	}

	onChange = async (e: Event) => {
        var target = e.target;

        await handleFieldChange(this.props.contexto, e);
        
		if(this.props.onChange) {
			await this.props.onChange(target);
		}
	}
  
    renderCombo(){
        const campoClasses = classNames({
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });
      
        return(
          <Col className={campoClasses}>
            <select
                id={this.props.nome}
                name={this.props.nome}
                className="form-control"
                onChange={(e: any) => this.onChange(e)} 
                value={this.props.valor} disabled={this.props.desabilitado}>

                    {this.props.textoVazio &&
                        <option value="">{this.props.textoVazio}</option>
                    }

                    {
                        this.props.opcoes!.map((opcao, index) => {
                            return (
                                <option key={index} value={opcao[this.props.valorMembro]}>{opcao[this.props.nomeMembro]}</option>
                            )
                        })
                    }
                    
                </select>
          </Col>
        );
    }
  
    renderLabel(){
      if(this.props.label){
        const labelClasses = classNames({
            "col-lg-2": !this.props.tamanhoLabel,
            [`col-${this.props.tamanhoLabel}`]: this.props.tamanhoLabel,
            "col-md-12": !this.props.tamanhoLabel,
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

    render() {
        return (
            <Row formGroup>
                {this.renderLabel()}
                {this.renderCombo()}
            </Row>
        );
    }
}