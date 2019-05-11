import React, { Component } from "react";
import { handleFieldChange } from "@intechprev/react-lib";

interface Props {
    nome: string;
    contexto: any;
    nomeMembro: string;
    valorMembro: string;
    valor: string;
    obrigatorio?: boolean;
    desabilitado?: boolean;
    textoVazio?: string;
    padrao?: string;
    label?: string;
    opcoes?: Array<any>;
    onChange?: Function;
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

    render() {
        return (
			<div className="form-group">
				{this.props.label &&
                    <b><label htmlFor={this.props.nome}>
                        {this.props.label}
                    </label></b>
				}

                <select id={this.props.nome} name={this.props.nome} className="form-control" onChange={(e: any) => this.onChange(e)} 
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
            </div>
        )
    }
}