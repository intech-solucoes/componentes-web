import React, { Component } from 'react';

import styled from 'styled-components';

//import { handleFieldChange } from "@intechprev/react-lib";

interface Props {
    contexto: any;
    id: string;
    nome: string;
    valor: string | number;
    cor: string;
    valMin: number;
    valMax: number;
    step: number;
    formato: string;
    parent?: any;
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

export class ISlider extends Component<Props> {
    state = {
      value: 0,
    }

    static defaultProps = {
        cor: "#3D9970",
        step: 1,
        valor: 0,
    }
  
    handleOnChange = (e) => this.setState({ value: e.target.value })    

    // onChange = async (e: Event) => {
    //    var target = e.target;

    //     await handleFieldChange(this.props.contexto, e, this.props.parent);

    //     if (this.props.onChange) {
    //         await this.props.onChange(target);
    //     }
    // }


    render() {
      return (
        <Styles cor={this.props.cor}>
          <input 
             type="range" 
             id={this.props.id}
             name={this.props.nome}
             min={this.props.valMin} 
             max={this.props.valMax} 
             step={this.props.step}
             //value={this.props.valor} 
             value={this.state.value} 
             className="slider" 
             //onChange={(e) => handleFieldChange(this.props.contexto, e, this.props.parent)}
             //onChange={(e: any) => this.onChange(e)}
             onChange={this.handleOnChange}
          />

          <div className="value">&nbsp; {this.props.valor}{this.props.formato}</div>
          <div className="value">&nbsp; {this.state.value}{this.props.formato}</div>
        </Styles>

        
      )
    }
  }