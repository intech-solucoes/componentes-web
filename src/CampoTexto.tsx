import React from 'react';

import { handleFieldChange } from "@intechprev/react-lib";

import { Col, Row } from ".";

var InputMask = require('react-input-mask');

interface Props {
    col?: string;
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
        var col = "col-lg-2";

		if(this.props.col)
            col = this.props.col;
            
        return (
            <Row formGroup>
				
				{this.props.label &&
					<div className={col + " col-md-12 text-lg-right col-form-label"}>
						<b>
                            <label htmlFor={this.props.nome}>
                                {this.props.label}
                                {this.props.obrigatorio && " *"}
                            </label>
                        </b>
					</div>
				}

				<Col>
                    {this.props.textarea ? 
                        <textarea name={this.props.nome} id={this.props.nome} className="form-control" rows={this.props.rows} 
                            placeholder={this.props.placeholder} value={this.props.valor} maxLength={this.props.max}
                            onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)} />
                        :
                        <InputMask mask={this.props.mascara} name={this.props.nome} value={this.props.valor} maxLength={this.props.max} className="form-control"
                                type={this.props.tipo} placeholder={this.props.placeholder} id={this.props.nome} disabled={this.props.desabilitado}
                                onChange={(e: any) => handleFieldChange(this.props.contexto, e, this.props.parent)} />
                    }
				</Col>

			</Row>
        )
    }
}