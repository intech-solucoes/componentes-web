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
import { handleFieldChange } from "@intechprev/react-lib";
import moment from "moment";
import { Col, Row } from "..";
import classNames from 'classnames';
var InputMask = require('react-input-mask');
var CampoTexto = /** @class */ (function (_super) {
    __extends(CampoTexto, _super);
    function CampoTexto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoTexto.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var labelClasses = classNames((_a = {
                "col-lg-2": !this.props.tamanhoLabel
            },
            _a["col-" + this.props.tamanhoLabel] = this.props.tamanhoLabel,
            _a["col-md-12"] = true,
            _a["text-lg-right"] = true,
            _a["col-form-label"] = true,
            _a));
        var campoClasses = classNames((_b = {
                "col": !this.props.tamanhoCampo
            },
            _b["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _b));
        var valor = "";
        if (this.props.valor)
            valor = this.props.valor.toString();
        if (typeof (valor) === typeof (Date))
            valor = moment(valor).format("dd/MM/yyyy");
        return (React.createElement(Row, { formGroup: true },
            this.props.label &&
                React.createElement("div", { className: labelClasses },
                    React.createElement("b", null,
                        React.createElement("label", { htmlFor: this.props.nome },
                            this.props.label,
                            this.props.obrigatorio && " *"))),
            React.createElement(Col, { className: campoClasses }, this.props.textarea ?
                React.createElement("textarea", { name: this.props.nome, id: this.props.nome, className: "form-control", rows: this.props.rows, placeholder: this.props.placeholder, value: valor, maxLength: this.props.max, onChange: function (e) { return handleFieldChange(_this.props.contexto, e, _this.props.parent); } })
                :
                    React.createElement(InputMask, { mask: this.props.mascara, name: this.props.nome, value: valor, maxLength: this.props.max, className: "form-control", type: this.props.tipo, placeholder: this.props.placeholder, id: this.props.nome, disabled: this.props.desabilitado, onChange: function (e) { return handleFieldChange(_this.props.contexto, e, _this.props.parent); } }))));
    };
    return CampoTexto;
}(React.Component));
export { CampoTexto };
