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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var TipoAlerta;
(function (TipoAlerta) {
    TipoAlerta["primary"] = "primary";
    TipoAlerta["secondary"] = "secondary";
    TipoAlerta["success"] = "success";
    TipoAlerta["danger"] = "danger";
    TipoAlerta["warning"] = "warning";
    TipoAlerta["info"] = "info";
    TipoAlerta["light"] = "light";
    TipoAlerta["dark"] = "dark";
})(TipoAlerta = exports.TipoAlerta || (exports.TipoAlerta = {}));
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        var _this = _super.call(this, props) || this;
        _this.adicionarErro = function (mensagemErro) { return __awaiter(_this, void 0, void 0, function () {
            var temMensagem, espacamento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temMensagem = (this.props.mensagem && this.props.mensagem.length > 0) || this.state.mensagem.length > 0;
                        espacamento = temMensagem ? "<br/>" : "";
                        return [4 /*yield*/, this.setState({
                                mensagem: this.state.mensagem + espacamento + mensagemErro
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.limparErros = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setState({
                            mensagem: ""
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.possuiErro = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.state.mensagem.length === 0];
        }); }); };
        _this.state = {
            mensagem: ""
        };
        return _this;
    }
    Alert.prototype.render = function () {
        var classes = classnames_1.default("alert", ["alert-" + this.props.tipo], this.props.className);
        return (react_1.default.createElement("div", null, (this.state.mensagem || this.props.mensagem) &&
            react_1.default.createElement("div", { id: "alerta", className: classes, dangerouslySetInnerHTML: { __html: this.props.mensagem + this.state.mensagem } })));
    };
    Alert.defaultProps = {
        mensagem: "",
        tamanho: "12",
        padraoFormulario: false
    };
    return Alert;
}(react_1.default.Component));
exports.Alert = Alert;
