"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var TipoCampoEstatico;
(function (TipoCampoEstatico) {
    TipoCampoEstatico[TipoCampoEstatico["texto"] = 0] = "texto";
    TipoCampoEstatico[TipoCampoEstatico["dinheiro"] = 1] = "dinheiro";
})(TipoCampoEstatico = exports.TipoCampoEstatico || (exports.TipoCampoEstatico = {}));
var CampoEstatico = /** @class */ (function (_super) {
    __extends(CampoEstatico, _super);
    function CampoEstatico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoEstatico.prototype.render = function () {
        var _a;
        var valor = this.props.valor;
        if (this.props.tipo === TipoCampoEstatico.dinheiro) {
            if (typeof (this.props.valor) === "string")
                valor = "R$ " + Number.parseFloat(this.props.valor).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            else
                valor = "R$ " + this.props.valor.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        var classes = classnames_1.default((_a = {
                "form-group": true,
                "col": !this.props.col
            },
            _a["col-" + this.props.col] = this.props.col,
            _a));
        if (this.props.titulo) {
            return (react_1.default.createElement("div", { className: classes },
                react_1.default.createElement("label", { className: "text-primary" }, this.props.titulo),
                react_1.default.createElement("label", { id: this.props.id, className: "form-control-plaintext" }, valor)));
        }
        else {
            return (react_1.default.createElement("label", null, valor));
        }
    };
    CampoEstatico.defaultProps = {
        tipo: TipoCampoEstatico.texto
    };
    return CampoEstatico;
}(react_1.default.Component));
exports.CampoEstatico = CampoEstatico;
