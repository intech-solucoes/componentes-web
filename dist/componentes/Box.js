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
import React from "react";
import { Col, Row } from "..";
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderBox = function () {
            return (React.createElement("div", { className: "box" },
                _this.props.titulo &&
                    React.createElement("div", { className: "box-title" },
                        _this.props.titulo,
                        _this.props.label &&
                            React.createElement("span", { className: "badge badge-secondary ml-2" }, _this.props.label)),
                React.createElement("div", { className: "box-content" }, _this.props.children)));
        };
        return _this;
    }
    Box.prototype.render = function () {
        if (this.props.renderRow) {
            return (React.createElement(Row, null,
                React.createElement(Col, null, this.renderBox())));
        }
        else {
            return this.renderBox();
        }
    };
    Box.defaultProps = {
        renderRow: true
    };
    return Box;
}(React.Component));
export { Box };
