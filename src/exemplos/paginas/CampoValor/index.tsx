import React, { FormEvent } from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, CampoValor } from "../../../";
import { PosicaoTituloCampoValor } from "../../../componentes/CampoValor";

interface Props { }

interface State {
    valor1: number;
    valor2: number;
    valor3: number;
    valor4: number;
    valor5: number;
    valor6: number;
    valorStr: string;
    separadorDecimal: string;
    separadorMilhar: string;
    prefixo: string;

    valorFormatado: number;

    valorString: string;

}

export class CampoValorPage extends React.Component<Props, State> {

    state: State = {
        valor1: 6500.89,
        valor2: 65000.89,
        valor3: 100.00,
        valor4: 28022020,
        valor5: 282020,
        valor6: 61981045713,
        valorStr: '6500.89',

        valorFormatado: 0,

        separadorDecimal: ',',
        separadorMilhar: '.',
        prefixo: '',

        valorString: '',
    }

    mascaraValor= (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        var nome = ((e.target) as any).name;
        var valorMask = ((e.target) as any).value;

        var valorNovo = this.aplicarMascara(valorMask);

        if (valorNovo === '') {
            return;
         }
    
        // console.log(valorMask);
        // console.log(valorNovo);
        
        this.setState({
            //valor1: parseFloat(valorNovo.replace(/\D/g, '')),
            valor1: parseInt(valorNovo.replace(/\D/g, ''), 10),
            valorString: valorNovo
        }); 
        
    }


    aplicarMascara(valorConverter: string): string {
        let valorNum = parseInt(valorConverter.replace(/\D/g, ''), 10);
        let valorMask = '';
        let valor: string;
        
        if (isNaN(valorNum)) {
            return '';
        }

        valor = valorNum.toString();

        switch (valor.length) {
            case 1:
                valorMask = '0' + this.state.separadorDecimal + '0' + valor;
                break;
            case 2:
                valorMask = '0' + this.state.separadorDecimal + valor;
                break;
            case 3:
                valorMask = valor.substr(0, 1) + this.state.separadorDecimal + valor.substr(1, 2);
                break;
            default:
                break;
        }

        if (valorMask === '') {
            let sepMilhar = 0;
            for (let i = (valor.length - 3); i >= 0; i--) {
                if (sepMilhar === 3) {
                    valorMask = this.state.separadorMilhar + valorMask;
                    sepMilhar = 0;
                }
                valorMask = valor.charAt(i) + valorMask;
                sepMilhar++;
            }
            valorMask = valorMask + this.state.separadorDecimal +
                valor.substr(valor.length - 2, 2);
        }

        if (this.state.prefixo !== '') {
            valorMask = this.state.prefixo + ' ' + valorMask;
        }
        return valorMask;
    }


    render() {
        return (
            <MasterPage {...this.props}>

                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Meu Teste:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <input
                                type="Text"
                                value={this.state.valor1}
                                onChange={this.mascaraValor}
                            />

                            <br></br>
                            {this.state.valor1}
                            <br></br>
                            {this.state.valorString}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Padrão"}>

                            <p>Se não informar o tipo o defaut será dinheiro:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valorStr}
                                nome={"valorStr"}
                                posicaoTitulo={PosicaoTituloCampoValor.esquerda}
                            />

                            {this.state.valor1}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Dinheiro"}>

                            <p>Uso Dinheiro:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor
                                contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor2}
                                nome={"valor2"}
                                tipo={"dinheiro"}
                                posicaoTitulo={PosicaoTituloCampoValor.esquerda}
                            />
                            {this.state.valor2}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Percentual"}>

                            <p>Uso Percentual:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor
                                contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor3}
                                nome={"valor3"}
                                tipo={"percentual"}
                            />
                            {this.state.valor3}
                        </Box>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Box titulo={"Data"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor
                                contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor4}
                                nome={"valor4"}
                                tipo={"data"}
                            />
                            {this.state.valor4}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Data - Mês e Ano"}>

                            <p>Uso Data:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor
                                contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor5}
                                nome={"valor5"}
                                tipo={"mesano"}
                            />
                            {this.state.valor5}
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box titulo={"Número telefone"}>

                            <p>Uso Telefone:</p>
                            <code>{"<CampoValor titulo={\"Titulo\"} valor={\"Valor\"} />"}</code>
                            <CampoValor
                                contexto={this}
                                titulo={"Titulo"}
                                valor={this.state.valor6}
                                nome={"valor6"}
                                tipo={"telefone"}
                            />
                            {this.state.valor6}
                        </Box>
                    </Col>
                </Row>

            </MasterPage>
        );
    }
}