import React from "react";
import { Box, Botao, TamanhoBotao } from "..";

import { ColunaTabela } from "./ColunaTabela";
export { ColunaTabela };

interface Props {
    children?: React.ReactNode;
    dados: Array<any>
    onSelecionar: Function;
    onPesquisar: Function;
}

interface State {
    pagina: number;
}

export class Tabela extends React.Component<Props, State> {

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
            var row = <td key={index}>{item[coluna.props.propriedadeValor]}</td>;
            rowColumns.push(row);
        });

        return rowColumns;
    }

    render() {
        if(this.props.dados.length > 0) {
            return (
                <Box titulo={"Lista"}>
                    
                    <div className={"table-responsive"}>
                        <table className={"table table-sm table-striped table-bordered table-hover"}>
                            <thead>
                                <tr>
                                    <th style={{ width: 40 }}></th>

                                    {this.renderHeader()}
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.dados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <Botao icone={"fa-pencil-alt"} tamanho={TamanhoBotao.pequeno} onClick={() => this.props.onSelecionar(item)} />
                                            </td>
                                            
                                            {this.renderRow(item)}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

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
                    </div>
                    
                </Box>
            );
        } else {
            return null;
        }
    }
}