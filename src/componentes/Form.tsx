import React from 'react';

import { validarEmail } from "@intechprev/react-lib";

import { CampoTexto, Combo, Alerta } from '..';

interface Props {
    children: Array<any> | any;
}

interface State {
    valido: boolean;
}

export class Form extends React.Component<Props, State> {

    erros: Array<string> = [];
    valido: boolean = true;

    state = {
        valido: true
    }
    
    filtroCampos(campo: any): boolean {
        return (campo.type === CampoTexto || campo.type === Combo);
    }

    validarRecursivo = (children: any) => {
        if(children.forEach) {
            children.forEach((campo: any) => {
                if(this.filtroCampos(campo)) {
                    // Valida cada campo
                    if (campo.props.obrigatorio) {
                        if (typeof (campo.props.valor) === "undefined" || campo.props.valor === "")
                            this.erros.push(`Campo "${campo.props.label || campo.props.placeholder}" obrigatório.`);
                    }

                    /*
                        Essa série de ifs existe mais para organização.
                        Como o Combo não tem props como "tipo" os ifs
                        internos do validarCampoTexto não são executados.
                        Em tese.
                    */
                    if (campo.type === CampoTexto) {
                        this.validarCampoTexto(campo);
                    }
                } else {
                    if(campo.props && campo.props.children && campo.props.children.length > 0)
                        this.validarRecursivo(campo.props.children);
                }
            });
        }
    }

    validar = async () => {
        this.valido = true;
        this.erros = [];

        if(this.props.children.length > 0)
            this.validarRecursivo(this.props.children);

        this.valido = this.erros.length === 0;
        await this.setState({
            valido: this.erros.length === 0
        });
    }

    validarCampoTexto = (campo: any) => {
        // Validações específicas de CampoTexto vão aqui
        if (campo.props.tipo === "email" && validarEmail(campo.props.valor))
            this.erros.push("E-mail inválido.");

        var valorSemMascara = null;

        if (campo.props.valor !== undefined)
            valorSemMascara = campo.props.valor.split("_").join("");

        if (campo.props.min && valorSemMascara.length < campo.props.min)
            this.erros.push(`Campo "${campo.props.label || campo.props.placeholder}" inválido.`);
    }

    render() {
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child => {
            if (child && child.type === Alerta && child.props.padraoFormulario)
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
