var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { Box, Botao, TamanhoBotao } from "..";
import { ColunaTabela } from "./ColunaTabela";
export { ColunaTabela };
var Tabela = /** @class */ (function (_super) {
    __extends(Tabela, _super);
    function Tabela(props) {
        var _this = _super.call(this, props) || this;
        _this.renderHeader = function () {
            var headers = new Array();
            var children = React.Children.toArray(_this.props.children);
            children.forEach(function (coluna, index) {
                var header = React.createElement("th", { key: index }, coluna.props.titulo);
                headers.push(header);
            });
            return headers;
        };
        _this.renderRow = function (item) {
            var rowColumns = new Array();
            var children = React.Children.toArray(_this.props.children);
            children.forEach(function (coluna, index) {
                var row = React.createElement("td", { key: index }, item[coluna.props.propriedadeValor]);
                rowColumns.push(row);
            });
            return rowColumns;
        };
        _this.state = {
            pagina: 0
        };
        return _this;
    }
    Tabela.prototype.render = function () {
        var _this = this;
        if (this.props.dados.length > 0) {
            return (React.createElement(Box, { titulo: "Lista" },
                React.createElement("div", { className: "table-responsive" },
                    React.createElement("table", { className: "table table-sm table-striped table-bordered table-hover" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                this.props.edicaoHabilitada &&
                                    React.createElement("th", { style: { width: 40 } }),
                                this.renderHeader())),
                        React.createElement("tbody", null, this.props.dados.map(function (item, index) {
                            return (React.createElement("tr", { key: index },
                                _this.props.edicaoHabilitada &&
                                    React.createElement("td", null,
                                        React.createElement(Botao, { icone: "fa-pencil-alt", tamanho: TamanhoBotao.pequeno, onClick: function () { return _this.props.onSelecionar(item); } })),
                                _this.renderRow(item)));
                        }))),
                    this.props.paginacaoHabilitada &&
                        React.createElement("div", null,
                            React.createElement("div", { className: "btn-group btn-group-sm" },
                                React.createElement("button", { type: "button", className: "btn btn-light" },
                                    React.createElement("i", { className: "fas fa-chevron-left mr-2" }),
                                    "Anterior"),
                                React.createElement("button", { type: "button", className: "btn btn-light" },
                                    "Pr\u00F3xima",
                                    React.createElement("i", { className: "fas fa-chevron-right ml-2" })))))));
        }
        else {
            return null;
        }
    };
    Tabela.defaultProps = {
        paginacaoHabilitada: true,
        edicaoHabilitada: true
    };
    return Tabela;
}(React.Component));
export { Tabela };
