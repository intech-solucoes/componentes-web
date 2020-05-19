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
import React from 'react';
import { validarEmail } from "@intechprev/react-lib";
import { CampoTexto, Combo, Alerta } from '..';
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.erros = [];
        //valido: boolean = true;
        _this.state = {
            valido: true
        };
        _this.isValido = function () { return _this.state.valido; };
        _this.validarRecursivo = function (children) {
            if (children.forEach) {
                children.forEach(function (campo) {
                    _this.validarCampo(campo);
                });
            }
            else {
                _this.validarCampo(children);
            }
        };
        _this.validarCampo = function (campo) {
            if (_this.filtroCampos(campo)) {
                // Valida cada campo
                if (campo.props.obrigatorio) {
                    if (typeof (campo.props.valor) === "undefined" || campo.props.valor === "")
                        _this.erros.push("Campo \"" + (campo.props.titulo || campo.props.placeholder) + "\" obrigat\u00F3rio.");
                }
                /*
                    Essa série de ifs existe mais para organização.
                    Como o Combo não tem props como "tipo" os ifs
                    internos do validarCampoTexto não são executados.
                    Em tese.
                */
                if (campo.type === CampoTexto) {
                    _this.validarCampoTexto(campo);
                }
            }
            else {
                if (campo.props && campo.props.children)
                    _this.validarRecursivo(campo.props.children);
            }
        };
        _this.validar = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //this.valido = true;
                        this.erros = [];
                        if (this.props.children.length > 0)
                            this.validarRecursivo(this.props.children);
                        //this.valido = this.erros.length === 0;
                        return [4 /*yield*/, this.setState({
                                valido: this.erros.length === 0
                            })];
                    case 1:
                        //this.valido = this.erros.length === 0;
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.validarCampoTexto = function (campo) {
            // Validações específicas de CampoTexto vão aqui
            if (campo.props.tipo === "email" && validarEmail(campo.props.valor))
                _this.erros.push("E-mail inválido.");
            var valorSemMascara = null;
            if (campo.props.valor !== undefined)
                valorSemMascara = campo.props.valor.split("_").join("");
            if (campo.props.min && valorSemMascara.length < campo.props.min)
                _this.erros.push("Campo \"" + (campo.props.titulo || campo.props.placeholder) + "\" inv\u00E1lido.");
        };
        return _this;
    }
    Form.prototype.filtroCampos = function (campo) {
        return (campo.type === CampoTexto || campo.type === Combo);
    };
    Form.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        var childrenWithProps = React.Children.map(children, function (child) {
            if (child && child.type === Alerta && child.props.padraoFormulario)
                return React.cloneElement(child, { mensagem: _this.erros[0] });
            else
                return child;
        });
        return (React.createElement("form", null, childrenWithProps));
    };
    return Form;
}(React.Component));
export { Form };
