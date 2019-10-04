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
import React from 'react';
import moment from "moment";
import { handleFieldChange } from "@intechprev/react-lib";
import { Botao, Col, Row } from "..";
import classNames from 'classnames';
var InputMask = require('react-input-mask');
export var PosicaoBotaoGrupo;
(function (PosicaoBotaoGrupo) {
    PosicaoBotaoGrupo["direita"] = "direita";
    PosicaoBotaoGrupo["esquerda"] = "esquerda";
})(PosicaoBotaoGrupo || (PosicaoBotaoGrupo = {}));
var CampoTexto = /** @class */ (function (_super) {
    __extends(CampoTexto, _super);
    function CampoTexto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoTexto.prototype.renderLabel = function () {
        var _a;
        if (this.props.label) {
            var labelClasses = classNames((_a = {},
                _a["col-lg-2"] = !this.props.tamanhoLabel,
                _a["col-" + this.props.tamanhoLabel] = this.props.tamanhoLabel,
                _a["col-md-12"] = true,
                _a["text-lg-right"] = true,
                _a["col-form-label"] = true,
                _a));
            return (React.createElement("div", { className: labelClasses },
                React.createElement("b", null,
                    React.createElement("label", { htmlFor: this.props.nome },
                        this.props.label,
                        this.props.obrigatorio && " *"))));
        }
        return null;
    };
    CampoTexto.prototype.renderBotaoGrupo = function () {
        if (this.props.grupo) {
            return (React.createElement("div", { className: "input-group-append" },
                React.createElement(Botao, { titulo: this.props.tituloBotao, onClick: this.props.onBotaoClick, icone: this.props.iconeBotao, iconeDireita: this.props.iconeBotaoDireita })));
        }
        return null;
    };
    CampoTexto.prototype.mountCampo = function (valor) {
        var _this = this;
        if (this.props.textarea) {
            return (React.createElement("textarea", { name: this.props.nome, id: this.props.nome, className: "form-control", rows: this.props.rows, placeholder: this.props.placeholder, value: valor, maxLength: this.props.max, onChange: function (e) { return handleFieldChange(_this.props.contexto, e, _this.props.parent); }, onBlur: this.props.onBlur }));
        }
        else {
            return (React.createElement(InputMask, { title: this.props.titulo, mask: this.props.mascara, name: this.props.nome, value: valor, maxLength: this.props.max, className: "form-control", type: this.props.tipo, placeholder: this.props.placeholder, id: this.props.nome, disabled: this.props.desabilitado, onChange: function (e) { return handleFieldChange(_this.props.contexto, e, _this.props.parent); }, onBlur: this.props.onBlur }));
        }
    };
    CampoTexto.prototype.renderCampo = function () {
        var _a;
        var campoClasses = classNames((_a = {
                "col": !this.props.tamanhoCampo
            },
            _a["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _a));
        var valor = "";
        if (this.props.valor)
            valor = this.props.valor.toString();
        if (typeof (valor) === typeof (Date))
            valor = moment(valor).format("dd/MM/yyyy");
        if (this.props.grupo) {
            return (React.createElement(Col, { className: campoClasses },
                React.createElement("div", { className: "input-group" },
                    this.props.botaoEsquerda ? this.renderBotaoGrupo() : null,
                    this.mountCampo(valor),
                    this.props.botaoEsquerda ? null : this.renderBotaoGrupo())));
        }
        else {
            return (React.createElement(Col, { className: campoClasses }, this.mountCampo(valor)));
        }
    };
    CampoTexto.prototype.render = function () {
        return (React.createElement(Row, { formGroup: true },
            this.renderLabel(),
            this.renderCampo()));
    };
    return CampoTexto;
}(React.Component));
export { CampoTexto };
