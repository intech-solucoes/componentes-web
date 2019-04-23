import React from 'react';

import { handleFieldChange } from "@intechprev/react-lib";

import { Col, Row } from ".";
import classNames from 'classnames';

var InputMask = require('react-input-mask');

interface Props {
    tamanhoLabel?: string;
    tamanhoCampo?: string;
    obrigatorio?: boolean;
    label?: string;
    nome: string;
    contexto: any;
    parent?: any;
    desabilitado?: boolean;
    max?: number;
    min?: number;
    valor: string;
    placeholder?: string;
    mascara?: string;
    tipo?: string;
    textarea?: boolean;
    rows?: number;
}

export class CampoTexto extends React.Component<Props> {
    render() {
        var labelClasses = classNames({
            "col-lg-2": !this.props.tamanhoLabel,
            [`col-${this.props.tamanhoLabel}`]: this.props.tamanhoLabel,
            "col-md-12": true,
            "text-lg-right": true,
            "col-form-label": true
        });

        var campoClasses = classNames({
            "col": !this.props.tamanhoCampo,
            [`col-${this.props.tamanhoCampo}`]: this.props.tamanhoCampo
        });
            
        return (
            <Row formGroup>
				
				{this.props.label &&
					<div className={labelClasses}>
						<b>
                            <label htmlFor={this.props.nome}>
                                {this.props.label}
                                {this.props.obrigatorio && " *"}
                            </label>
                        </b>
					</div>
				}

				<Col className={campoClasses}>
                    {this.props.textarea ? 
                        <textarea name={this.props.nome} id={this.props.nome} className={"form-control"} rows={this.props.rows} 
                            placeholder={this.props.placeholder} value={this.props.valor} maxLength={this.props.max}
                            onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)} />
                        :
                        <InputMask mask={this.props.mascara} name={this.props.nome} value={this.props.valor} maxLength={this.props.max} className={"form-control"}
                                type={this.props.tipo} placeholder={this.props.placeholder} id={this.props.nome} disabled={this.props.desabilitado}
                                onChange={(e: any) => handleFieldChange(this.props.contexto, e, this.props.parent)} />
                    }
				</Col>

			</Row>
        )
    }
}