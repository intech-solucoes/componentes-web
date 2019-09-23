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
import { Col, Row } from "..";
import classNames from "classnames";
import moment from "moment";
export var TipoCampoEstatico;
(function (TipoCampoEstatico) {
    TipoCampoEstatico[TipoCampoEstatico["texto"] = 0] = "texto";
    TipoCampoEstatico[TipoCampoEstatico["dinheiro"] = 1] = "dinheiro";
    TipoCampoEstatico[TipoCampoEstatico["data"] = 2] = "data";
})(TipoCampoEstatico || (TipoCampoEstatico = {}));
var CampoEstatico = /** @class */ (function (_super) {
    __extends(CampoEstatico, _super);
    function CampoEstatico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoEstatico.prototype.parseValue = function () {
        if (this.props.tipo === TipoCampoEstatico.data)
            return moment(this.props.valor).format("DD/MM/YYYY");
        if (this.props.tipo === TipoCampoEstatico.dinheiro) {
            if (typeof (this.props.valor) === "string")
                return "R$ " + Number.parseFloat(this.props.valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            else
                return "R$ " + this.props.valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return this.props.valor;
    };
    CampoEstatico.prototype.renderLabel = function () {
        var _a;
        var auxLabel = this.props.label || this.props.titulo;
        if (auxLabel) {
            var aux = this.props.tamanhoLabel || this.props.col;
            var labelClasses = classNames((_a = {
                    "col-lg-2": !aux
                },
                _a["col-" + aux] = aux,
                _a["col-md-12"] = !aux,
                _a["text-lg-right"] = true,
                _a["col-form-label"] = true,
                _a));
            return (React.createElement("div", { className: labelClasses },
                React.createElement("b", null,
                    React.createElement("label", null,
                        auxLabel,
                        this.props.obrigatorio && " *"))));
        }
        return null;
    };
    CampoEstatico.prototype.renderCampo = function () {
        var _a;
        var valor = this.parseValue();
        var campoClasses = classNames((_a = {
                "col": !this.props.tamanhoCampo
            },
            _a["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _a["align-self-center"] = true,
            _a));
        return (React.createElement(Col, { className: campoClasses }, valor));
    };
    CampoEstatico.prototype.render = function () {
        return (React.createElement(Row, { formGroup: true },
            this.renderLabel(),
            this.renderCampo()));
    };
    CampoEstatico.defaultProps = {
        tipo: TipoCampoEstatico.texto
    };
    return CampoEstatico;
}(React.Component));
export { CampoEstatico };
