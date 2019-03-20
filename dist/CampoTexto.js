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
var react_lib_1 = require("@intechprev/react-lib");
var _1 = require(".");
var InputMask = require('react-input-mask');
var CampoTexto = /** @class */ (function (_super) {
    __extends(CampoTexto, _super);
    function CampoTexto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampoTexto.prototype.render = function () {
        var _this = this;
        var col = "col-lg-2";
        if (this.props.col)
            col = this.props.col;
        return (react_1.default.createElement(_1.Row, { formGroup: true },
            this.props.label &&
                react_1.default.createElement("div", { className: col + " col-md-12 text-lg-right col-form-label" },
                    react_1.default.createElement("b", null,
                        react_1.default.createElement("label", { htmlFor: this.props.nome },
                            this.props.label,
                            this.props.obrigatorio && " *"))),
            react_1.default.createElement(_1.Col, null, this.props.textarea ?
                react_1.default.createElement("textarea", { name: this.props.nome, id: this.props.nome, className: "form-control", rows: this.props.rows, placeholder: this.props.placeholder, value: this.props.valor, maxLength: this.props.max, onChange: function (e) { return react_lib_1.handleFieldChange(_this.props.contexto, e, _this.props.parent); } })
                :
                    react_1.default.createElement(InputMask, { mask: this.props.mascara, name: this.props.nome, value: this.props.valor, maxLength: this.props.max, className: "form-control", type: this.props.tipo, placeholder: this.props.placeholder, id: this.props.nome, disabled: this.props.desabilitado, onChange: function (e) { return react_lib_1.handleFieldChange(_this.props.contexto, e, _this.props.parent); } }))));
    };
    return CampoTexto;
}(react_1.default.Component));
exports.CampoTexto = CampoTexto;
