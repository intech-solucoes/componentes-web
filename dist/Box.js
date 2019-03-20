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
var _1 = require(".");
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderBox = function () {
            return (react_1.default.createElement("div", { className: "box" },
                _this.props.titulo &&
                    react_1.default.createElement("div", { className: "box-title" },
                        _this.props.titulo,
                        _this.props.label &&
                            react_1.default.createElement("span", { className: "badge badge-secondary" }, _this.props.label)),
                react_1.default.createElement("div", { className: "box-content" }, _this.props.children)));
        };
        return _this;
    }
    Box.prototype.render = function () {
        if (this.props.renderRow) {
            return (react_1.default.createElement(_1.Row, null,
                react_1.default.createElement(_1.Col, null, this.renderBox())));
        }
        else {
            return this.renderBox();
        }
    };
    Box.defaultProps = {
        renderRow: true
    };
    return Box;
}(react_1.default.Component));
exports.Box = Box;
