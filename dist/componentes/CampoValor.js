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
import moment from "moment";
import { handleFieldChange } from "@intechprev/react-lib";
import { Botao, Col, Row } from "..";
import classNames from "classnames";
import NumberFormat from "react-number-format";
// var InputMask = require('react-input-mask');
export var PosicaoBotaoGrupo;
(function (PosicaoBotaoGrupo) {
    PosicaoBotaoGrupo["direita"] = "direita";
    PosicaoBotaoGrupo["esquerda"] = "esquerda";
})(PosicaoBotaoGrupo || (PosicaoBotaoGrupo = {}));
export var PosicaoTituloCampoValor;
(function (PosicaoTituloCampoValor) {
    PosicaoTituloCampoValor[PosicaoTituloCampoValor["esquerda"] = 0] = "esquerda";
    PosicaoTituloCampoValor[PosicaoTituloCampoValor["cima"] = 1] = "cima";
})(PosicaoTituloCampoValor || (PosicaoTituloCampoValor = {}));
var CampoValor = /** @class */ (function (_super) {
    __extends(CampoValor, _super);
    function CampoValor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoValor.prototype.renderLabel = function () {
        var _a;
        if (this.props.titulo) {
            var cima = this.props.posicaoTitulo === PosicaoTituloCampoValor.cima;
            var labelClasses = classNames((_a = {},
                _a["col-lg-2"] = !this.props.tamanhoTitulo && !cima,
                _a["col-" + this.props.tamanhoTitulo] = this.props.tamanhoTitulo && !cima,
                _a["col-md-12"] = true,
                _a["text-lg-right"] = !cima,
                _a["col-form-label"] = true,
                _a), this.props.tituloClassName);
            return (React.createElement("div", { className: labelClasses },
                React.createElement("b", null,
                    React.createElement("label", { htmlFor: this.props.nome },
                        this.props.titulo,
                        this.props.obrigatorio && " *"))));
        }
        return null;
    };
    CampoValor.prototype.renderBotaoGrupo = function () {
        if (this.props.grupo) {
            return (React.createElement("div", { className: "input-group-append" },
                React.createElement(Botao, { titulo: this.props.tituloBotao, onClick: this.props.onBotaoClick, icone: this.props.iconeBotao, iconeDireita: this.props.iconeBotaoDireita })));
        }
        return null;
    };
    CampoValor.prototype.mountCampo = function (valor) {
        var _this = this;
        if (this.props.textarea) {
            return (React.createElement("textarea", { name: this.props.nome, id: this.props.nome, className: "form-control", rows: this.props.rows, placeholder: this.props.placeholder, value: valor, maxLength: this.props.max, disabled: this.props.desabilitado, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, onBlur: this.props.onBlur }));
        }
        else if (this.props.tipo === "percentual") {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", decimalSeparator: ",", decimalScale: 2, 
                // prefix="%"
                fixedDecimalScale: true, disabled: this.props.desabilitado, value: valor, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, onBlur: this.props.onBlur }));
        }
        else if (this.props.tipo === "data") {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", format: "##/##/####", mask: "_", disabled: this.props.desabilitado, value: valor, onBlur: this.props.onBlur, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                } }));
        }
        else if (this.props.tipo === "mesano") {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", format: "##/####", mask: "_", disabled: this.props.desabilitado, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, value: valor, onBlur: this.props.onBlur }));
        }
        else if (this.props.tipo === "telefone") {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", format: "(###) #####-####", mask: "_", disabled: this.props.desabilitado, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, value: valor, onBlur: this.props.onBlur }));
        }
        else if (this.props.tipo === "dinheiro") {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", thousandSeparator: ".", decimalSeparator: ",", decimalScale: 2, allowedDecimalSeparators: [","], 
                //prefix="R$"
                fixedDecimalScale: true, disabled: this.props.desabilitado, value: Number(valor), onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, onBlur: this.props.onBlur }));
        }
        else {
            return (React.createElement(NumberFormat, { name: this.props.nome, id: this.props.nome, className: "form-control", thousandSeparator: ".", decimalSeparator: ",", allowedDecimalSeparators: ["."], 
                //prefix="R$"
                decimalScale: 2, fixedDecimalScale: true, disabled: this.props.desabilitado, value: valor, onChange: function (e) {
                    return handleFieldChange(_this.props.contexto, e, _this.props.parent);
                }, onBlur: this.props.onBlur }));
        }
    };
    CampoValor.prototype.renderCampo = function () {
        var _a;
        var campoClasses = classNames((_a = {
                col: !this.props.tamanhoCampo
            },
            _a["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _a));
        var valor = "";
        if (this.props.valor)
            valor = this.props.valor.toString();
        if (typeof valor === typeof Date)
            valor = moment(valor).format("dd/MM/yyyy");
        if (this.props.grupo) {
            return (React.createElement(Col, { className: campoClasses },
                React.createElement("div", { className: "input-group" },
                    this.props.botaoEsquerda ? this.renderBotaoGrupo() : null,
                    this.mountCampo(valor),
                    this.props.botaoEsquerda ? null : this.renderBotaoGrupo())));
        }
        else {
            return React.createElement(Col, { className: campoClasses }, this.mountCampo(valor));
        }
    };
    CampoValor.prototype.render = function () {
        return (React.createElement(Row, { formGroup: true },
            this.renderLabel(),
            this.renderCampo()));
    };
    CampoValor.defaultProps = {
        posicao: PosicaoTituloCampoValor.esquerda,
    };
    return CampoValor;
}(React.Component));
export { CampoValor };
