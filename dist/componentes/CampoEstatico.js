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
import classNames from "classnames";
import moment from "moment";
import { Row } from '..';
export var TipoCampoEstatico;
(function (TipoCampoEstatico) {
    TipoCampoEstatico[TipoCampoEstatico["texto"] = 0] = "texto";
    TipoCampoEstatico[TipoCampoEstatico["dinheiro"] = 1] = "dinheiro";
    TipoCampoEstatico[TipoCampoEstatico["data"] = 2] = "data";
    TipoCampoEstatico[TipoCampoEstatico["percentual"] = 3] = "percentual";
})(TipoCampoEstatico || (TipoCampoEstatico = {}));
export var PosicaoTituloCampoEstatico;
(function (PosicaoTituloCampoEstatico) {
    PosicaoTituloCampoEstatico[PosicaoTituloCampoEstatico["esquerda"] = 0] = "esquerda";
    PosicaoTituloCampoEstatico[PosicaoTituloCampoEstatico["cima"] = 1] = "cima";
})(PosicaoTituloCampoEstatico || (PosicaoTituloCampoEstatico = {}));
var CampoEstatico = /** @class */ (function (_super) {
    __extends(CampoEstatico, _super);
    function CampoEstatico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoEstatico.prototype.parseValue = function () {
        var valor = "";
        if (this.props.valor && this.props.valor !== "")
            valor = this.props.valor;
        if (this.props.tipo === TipoCampoEstatico.data)
            return moment(valor).format("DD/MM/YYYY");
        if (this.props.tipo === TipoCampoEstatico.dinheiro) {
            if (valor === 'NaN' || valor === '')
                valor = '0,00';
            if (typeof (valor) === "string")
                return "R$ " + parseFloat(valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            else
                return "R$ " + valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        if (this.props.tipo === TipoCampoEstatico.percentual) {
            if (valor === 'NaN' || valor === '' || valor === undefined)
                valor = '0,00';
            if (typeof (valor) === "string")
                return "% " + parseFloat(valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            else
                return "% " + valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return valor;
    };
    CampoEstatico.prototype.renderLabel = function () {
        var _a;
        if (this.props.titulo) {
            var cima = this.props.posicaoTitulo === PosicaoTituloCampoEstatico.cima;
            var labelClasses = classNames((_a = {
                    "col-lg-2": !this.props.tamanhoTitulo && !cima,
                    "col-lg-12": !this.props.tamanhoTitulo && cima
                },
                _a["col-" + this.props.tamanhoTitulo] = this.props.tamanhoTitulo && !cima,
                _a["col-md-12"] = !this.props.tamanhoTitulo,
                _a["text-lg-right"] = !cima,
                _a["col-form-label"] = true,
                _a), this.props.tituloClassName);
            return (React.createElement("label", { className: labelClasses },
                React.createElement("b", null,
                    this.props.titulo,
                    this.props.obrigatorio && " *")));
        }
        return null;
    };
    CampoEstatico.prototype.renderCampo = function () {
        var valor = this.parseValue();
        var labelClasses = classNames({
            "col": this.props.titulo,
            "form-control-plaintext": this.props.titulo,
            "align-self-center": this.props.titulo,
        });
        return (React.createElement("label", { className: labelClasses }, valor));
    };
    CampoEstatico.prototype.render = function () {
        var _a;
        var classes = classNames((_a = {
                "form-group": true,
                "col": !this.props.tamanhoCampo
            },
            _a["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _a));
        if (this.props.titulo) {
            return (React.createElement("div", { className: classes },
                React.createElement(Row, null,
                    this.renderLabel(),
                    this.renderCampo())));
        }
        else {
            return this.renderCampo();
        }
    };
    CampoEstatico.defaultProps = {
        tipo: TipoCampoEstatico.texto,
        posicao: PosicaoTituloCampoEstatico.esquerda
    };
    return CampoEstatico;
}(React.Component));
export { CampoEstatico };
