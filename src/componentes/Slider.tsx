import React, { Component } from 'react';

import styled from 'styled-components';

interface Props {
    contexto: any;
    nome: string;
    valor: string | number;
    cor: string;
    min: number;
    max: number;
    step: number;
    formato: string;
    parent?: any;

    onChange?: any;
}

const sliderThumbStyles = (props) => (`
  width: 15px;
  height: 15px;
  background: ${props.cor};
  background-color: ${props.cor};
  cursor: pointer;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 10px;
`);

const Styles = styled.div`

display: flex;
align-items: center;
color: #888;
margin-top: 2rem;
margin-bottom: 2rem;

.slider {
    flex: 1;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}      
    }

  }
`;

export class Slider extends Component<Props> {
    static defaultProps = {
        cor: "#3D9970",
        step: 1,
        valor: 0,
    }

    onChange = async (e) => {
        // Pega o value de dentro do e.target
        var { value } = e.target;

        // usa o setState do pai (settado no contexto) para atualizar o valor
        await this.props.contexto.setState({
            [this.props.nome]: parseFloat(value)
        });

        if (this.props.onChange)
            await this.props.onChange(value);
    }


    render() {
        return (
            <Styles cor={this.props.cor}>
                <input
                    type="range"
                    id={this.props.nome}
                    name={this.props.nome}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.props.valor}
                    className="slider"
                    onChange={this.onChange}
                />

                <div className="value">&nbsp; {this.props.max}{this.props.formato}</div>
            </Styles>
        );
    }
}