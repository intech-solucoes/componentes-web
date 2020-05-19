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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component } from "react";
import { handleFieldChange } from "@intechprev/react-lib";
import { Botao, Col, Row } from "..";
import classNames from 'classnames';
export var PosicaoTituloCombo;
(function (PosicaoTituloCombo) {
    PosicaoTituloCombo[PosicaoTituloCombo["esquerda"] = 0] = "esquerda";
    PosicaoTituloCombo[PosicaoTituloCombo["cima"] = 1] = "cima";
})(PosicaoTituloCombo || (PosicaoTituloCombo = {}));
var Combo = /** @class */ (function (_super) {
    __extends(Combo, _super);
    function Combo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.erros = [];
        _this.possuiErros = false;
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, nome, parentObj;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        nome = this.props.nome;
                        if (!this.props.parent) return [3 /*break*/, 1];
                        parentObj = this.props.contexto.state[this.props.parent];
                        parentObj[nome] = this.props.padrao;
                        this.props.contexto.setState((_a = {},
                            _a[this.props.parent] = parentObj,
                            _a));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.props.contexto.setState((_b = {},
                            _b[nome] = this.props.padrao,
                            _b))];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.validar = function () {
            _this.possuiErros = false;
            _this.erros = [];
            if (_this.props.obrigatorio) {
                if (typeof _this.props.valor === "undefined" || _this.props.valor === "")
                    _this.erros.push("Campo \"" + _this.props.titulo + "\" obrigat\u00F3rio.");
            }
            _this.possuiErros = _this.erros.length > 0;
        };
        _this.onChange = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var target;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = e.target;
                        return [4 /*yield*/, handleFieldChange(this.props.contexto, e, this.props.parent)];
                    case 1:
                        _a.sent();
                        if (!this.props.onChange) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.onChange(target)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Combo.prototype.renderBotaoGrupo = function () {
        if (this.props.grupo) {
            return (React.createElement("div", { className: "input-group-append" },
                React.createElement(Botao, { titulo: this.props.tituloBotao, onClick: this.props.onBotaoClick, icone: this.props.iconeBotao, iconeDireita: this.props.iconeBotaoDireita })));
        }
        return null;
    };
    Combo.prototype.mountCombo = function () {
        var _this = this;
        if (this.props.opcoes.length > 0) {
            return (React.createElement("select", { id: this.props.nome, name: this.props.nome, className: "form-control", onChange: function (e) { return _this.onChange(e); }, value: this.props.valor, disabled: this.props.desabilitado },
                this.props.textoVazio &&
                    React.createElement("option", { value: "" }, this.props.textoVazio),
                this.props.opcoes.map(function (opcao, index) {
                    if (_this.props.valorMembro && _this.props.nomeMembro)
                        return React.createElement("option", { key: index, value: opcao[_this.props.valorMembro] }, opcao[_this.props.nomeMembro]);
                    else
                        return React.createElement("option", { key: index, value: opcao }, opcao);
                })));
        }
        else {
            return null;
        }
    };
    Combo.prototype.renderCombo = function () {
        var _a;
        var campoClasses = classNames((_a = {
                "col": !this.props.tamanhoCampo
            },
            _a["col-" + this.props.tamanhoCampo] = this.props.tamanhoCampo,
            _a));
        if (this.props.grupo) {
            return (React.createElement(Col, { className: campoClasses },
                React.createElement("div", { className: "input-group" },
                    this.props.botaoEsquerda ? this.renderBotaoGrupo() : null,
                    this.mountCombo(),
                    this.props.botaoEsquerda ? null : this.renderBotaoGrupo())));
        }
        else {
            return (React.createElement(Col, { className: campoClasses }, this.mountCombo()));
        }
    };
    Combo.prototype.renderLabel = function () {
        var _a;
        if (this.props.titulo) {
            var cima = this.props.posicaoTitulo === PosicaoTituloCombo.cima;
            var labelClasses = classNames((_a = {
                    "col-lg-2": !this.props.tamanhoTitulo && !cima
                },
                _a["col-" + this.props.tamanhoTitulo] = this.props.tamanhoTitulo && !cima,
                _a["col-md-12"] = !this.props.tamanhoTitulo,
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
    Combo.prototype.render = function () {
        return (React.createElement(Row, { formGroup: true },
            !this.props.tituloOculto && this.renderLabel(),
            this.renderCombo()));
    };
    Combo.defaultProps = {
        padrao: "",
        opcoes: [],
        labelOculta: false,
        posicao: PosicaoTituloCombo.esquerda
    };
    return Combo;
}(Component));
export { Combo };
