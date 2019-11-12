import React from "react";
import { Box, Botao, TamanhoBotao } from "..";

import { ColunaTabela } from "./ColunaTabela";
import { TipoBotao } from "./Botao";
export { ColunaTabela };

interface Props {
    children?: React.ReactNode;
    dados: Array<any>
    onSelecionar?: Function;
    onExcluir?: Function;
    onPesquisar?: Function;
    paginacaoHabilitada?: boolean;
    edicaoHabilitada?: boolean;
    exclusaoHabilitada?: boolean;
    titulo?: string;
}

interface State {
    pagina: number;
}

export class Tabela extends React.Component<Props, State> {
    static defaultProps = {
        paginacaoHabilitada: true,
        edicaoHabilitada: true,
        exclusaoHabilitada: true,
        titulo: "Lista"
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            pagina: 0
        }
    }

    renderHeader = (): Array<any> => {
        var headers = new Array<any>();
        var children = React.Children.toArray(this.props.children);
        
        children.forEach((coluna: any, index: number) => {
            var header = <th key={index}>{coluna.props.titulo}</th>;
            headers.push(header);
        });

        return headers;
    }

    renderRow = (item: any): Array<any> => {
        var rowColumns = new Array<any>();
        var children = React.Children.toArray(this.props.children);

        children.forEach((coluna: any, index: number) => {
            var row = 
                <td key={index} className={"align-middle"}>
                    {`${coluna.props.prefixo}${item[coluna.props.propriedadeValor]}${coluna.props.sufixo}`}
                </td>;
            rowColumns.push(row);
        });

        return rowColumns;
    }

    render() {
        if(this.props.dados.length > 0) {
            return (
                <Box titulo={this.props.titulo}>
                    
                    <div className={"table-responsive"}>
                        <table className={"table table-sm table-striped table-bordered table-hover"}>
                            <thead>
                                <tr>
                                    {(this.props.edicaoHabilitada || this.props.exclusaoHabilitada) &&
                                        <th style={{ width: 66 }}></th>
                                    }

                                    {this.renderHeader()}
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.dados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            {(this.props.edicaoHabilitada || this.props.exclusaoHabilitada) &&
                                                <td className={"align-middle text-center"}>
                                                    {this.props.edicaoHabilitada &&
                                                        <Botao icone={"fa-pencil-alt"} 
                                                               tamanho={TamanhoBotao.pequeno} 
                                                               style={{ marginRight: this.props.exclusaoHabilitada ? 5 : 0 }}
                                                               onClick={() => this.props.onSelecionar(item)} />
                                                    }
                                                    {this.props.exclusaoHabilitada &&
                                                        <Botao icone={"fa-trash"} tipo={TipoBotao.danger} tamanho={TamanhoBotao.pequeno} onClick={() => this.props.onExcluir(item)} />
                                                    }
                                                </td>
                                            }
                                            
                                            {this.renderRow(item)}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        {this.props.paginacaoHabilitada &&
                            <div>
                                <div className="btn-group btn-group-sm">
                                    <button type="button" className="btn btn-light">
                                        <i className="fas fa-chevron-left mr-2"></i>
                                        Anterior
                                    </button>
                                    <button type="button" className="btn btn-light">
                                        Próxima
                                        <i className="fas fa-chevron-right ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    
                </Box>
            );
        } else {
            return null;
        }
    }
}