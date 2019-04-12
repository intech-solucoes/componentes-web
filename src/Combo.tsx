import React from "react";
import { handleFieldChange } from "@intechprev/react-lib";

interface Props {
    tamanho?: string;
    className?: string;
    children?: React.ReactNode;
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
    opcoes: any;
    onChange?: Function;
}

export class Combo extends React.Component<Props> {
    possuiErros: boolean = false;
    erros: any = []

    constructor(props: Props) {
        super(props);
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

	onChange = async (e: object) => {
        await handleFieldChange(this.props.contexto, e);
        
		if(this.props.onChange) {
			await this.props.onChange(e);
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

                <select id={this.props.nome} name={this.props.nome} className="form-control" onChange={this.onChange} 
                        value={this.props.valor} disabled={this.props.desabilitado}>

                    {this.props.textoVazio &&
                        <option value="">{this.props.textoVazio}</option>
                    }

                    {
                        this.props.opcoes.map((opcao: any, index: number) => {
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

