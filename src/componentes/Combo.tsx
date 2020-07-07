import React, { Component } from "react";
import { handleFieldChange } from "@intechprev/react-lib";

import { Botao, Col, Row } from "..";
import classNames from 'classnames';

export enum PosicaoTituloCombo {
    esquerda,
    cima
}

interface Props {
    contexto: any;
    nome: string;
    valor: string | number;

    nomeMembro?: string;
    valorMembro?: string;
    desabilitado?: boolean;
    titulo?: string;
    obrigatorio?: boolean;
    onChange?: Function;
    opcoes?: Array<any>;
    padrao?: any;
    tamanhoTitulo?: string;
    tamanhoCampo?: string;
    textoVazio?: string;
    parent?: any;

    grupo?: boolean;
    iconeBotao?: string;
    iconeBotaoDireita?: boolean;
    onBotaoClick?: any;
    botaoEsquerda?: boolean;
    tituloBotao?: string;
    tituloOculto?: boolean;
    posicaoTitulo?: PosicaoTituloCombo;
    tituloClassName?: any;
}

export class Combo extends Component<Props> {

    erros: Array<string> = [];
    possuiErros: boolean = false;

    static defaultProps = {
        padrao: "",
        opcoes: [],
        labelOculta: false,
        posicao: PosicaoTituloCombo.esquerda
    }

    componentDidMount = async () => {
        var nome = this.props.nome;

        // Atualiza o state do combo para o valor padrão selecionado via props.
        if (this.props.parent) {
            var parentObj = this.props.contexto.state[this.props.parent];
            parentObj[nome] = this.props.padrao;

            this.props.contexto.setState({
                [this.props.parent]: parentObj
            });
        } else {
            await this.props.contexto.setState({
                [nome]: this.props.padrao
            });
        }
    }

    validar = () => {
        this.possuiErros = false;
        this.erros = [];

        if (this.props.obrigatorio) {
            if (typeof this.props.valor === "undefined" || this.props.valor === "")
                this.erros.push(`Campo "${this.props.titulo}" obrigatório.`);
        }

        this.possuiErros = this.erros.length > 0;
    }

    onChange = async (e: Event) => {
        var target = e.target;

        await handleFieldChange(this.props.contexto, e, this.props.parent);

        if (this.props.onChange) {
            await this.props.onChange(target);
        }
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

    mountCombo() {
        if (this.props.opcoes.length > 0) {
            return (
                <select
                    id={this.props.nome}
                    name={this.props.nome}
                    className={"form-control"}
                    onChange={(e: any) => this.onChange(e)}
                    value={this.props.valor}
                    disabled={this.props.desabilitado}>

                    {this.props.textoVazio &&
                        <option value="">{this.props.textoVazio}</option>
                    }

                    {this.props.opcoes.map((opcao, index) => {
                        if (this.props.valorMembro && this.props.nomeMembro)
                            return <option key={index} value={opcao[this.props.valorMembro]}>{opcao[this.props.nomeMembro]}</option>
                        else
                            return <option key={index} value={opcao}>{opcao}</option>
                    })}
                </select>
            );
        } else {
            return null
        }
    }

    renderCombo() {
        const campoClasses = classNames({
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });

        if (this.props.grupo) {
            return (
                <Col className={campoClasses}>
                    <div className="input-group">
                        {this.props.botaoEsquerda ? this.renderBotaoGrupo() : null}
                        {this.mountCombo()}
                        {this.props.botaoEsquerda ? null : this.renderBotaoGrupo()}
                    </div>
                </Col>
            );
        }
        else {
            return (
                <Col className={campoClasses}>
                    {this.mountCombo()}
                </Col>
            );
        }


    }

    renderLabel() {

        if (this.props.titulo) {
            const cima = this.props.posicaoTitulo === PosicaoTituloCombo.cima;

            const labelClasses = classNames({
                "col-lg-2": !this.props.tamanhoTitulo && !cima,
                [`col-${this.props.tamanhoTitulo}`]: this.props.tamanhoTitulo && !cima,
                "col-md-12": !this.props.tamanhoTitulo,
                "text-lg-right": !cima,
                "col-form-label": true,
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

    render() {
        return (
            <Row formGroup>
                {!this.props.tituloOculto && this.renderLabel()}
                {this.renderCombo()}
            </Row>
        );
    }
}