import React from 'react';

import { validarEmail } from "@intechprev/react-lib";

import { CampoTexto, Alerta } from '..';

interface Props {
    children: Array<any> | any;
}

interface State {
    valido: boolean;
}

export class Form extends React.Component<Props, State> {

    erros: Array<string> = [];
    valido: boolean = true;

	constructor(props: Props) {
		super(props);

        this.state = {
            valido: true
        }
    }
    
    validar = async () => {
        this.valido = true;
        this.erros = [];

        await this.props.children
            .filter((campo: any) => campo.type === CampoTexto) // Filtra os tipos de campo apenas para CampoTexto
            .forEach((campo: any) => {

                // Valida cada campo
                if(campo.props.obrigatorio)
                {
                    if(typeof(campo.props.valor) === "undefined" || campo.props.valor === "")
                        this.erros.push(`Campo "${campo.props.label || campo.props.placeholder}" obrigatório.`);
                }

                else if(campo.props.tipo === "email" && typeof(campo.props.valor) === "undefined" && validarEmail(campo.props.valor))
                    this.erros.push("E-mail inválido.");

                var valorSemMascara = null;

                if(campo.props.valor !== undefined)
                    valorSemMascara = campo.props.valor.split("_").join("");

                if(campo.props.min && valorSemMascara.length < campo.props.min)
                    this.erros.push(`Campo "${campo.props.label || campo.props.placeholder}" inválido.`);
            });

        this.valido = this.erros.length === 0;
        await this.setState({
            valido: this.erros.length === 0
        });
    }

    render() {
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child => {
            if(child && child.type === Alerta && child.props.padraoFormulario)
                return React.cloneElement(child, { mensagem: this.erros[0] });
            else
                return child;
        });

        return (
            <form>
                {childrenWithProps}
            </form>
        );
    }
}