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
var ModalConfirma = /** @class */ (function (_super) {
    __extends(ModalConfirma, _super);
    function ModalConfirma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalConfirma.prototype.renderHeader = function () {
        return (React.createElement("div", { className: "modal-header" },
            React.createElement("h5", { className: "modal-title" }, this.props.titulo),
            React.createElement("button", { onClick: this.props.onClose, type: "button", className: "close" },
                React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
    };
    ModalConfirma.prototype.renderBody = function () {
        return (React.createElement("div", { className: "modal-body" }, this.props.children));
    };
    ModalConfirma.prototype.renderFooter = function () {
        return (React.createElement("div", { className: "modal-footer" },
            React.createElement("button", { onClick: this.props.onClose, type: "button", className: "btn btn-primary", "data-dismiss": "modal" },
                React.createElement("i", { className: "fas fa-thumbs-down" }),
                "\u00A0N\u00E3o"),
            React.createElement("button", { onClick: this.props.onConfirm, type: "button", className: "btn btn-warning", "data-dismiss": "modal" },
                React.createElement("i", { className: "fas fa-thumbs-up" }),
                "\u00A0Sim")));
    };
    ModalConfirma.prototype.render = function () {
        return (React.createElement("div", { style: {
                display: this.props.visivel ? "block" : "none"
            }, className: "modal" },
            React.createElement("div", { className: "modal-dialog modal-dialog-scrollable" },
                React.createElement("div", { className: "modal-content" },
                    this.renderHeader(),
                    this.renderBody(),
                    this.renderFooter()))));
    };
    ModalConfirma.defaultProps = {
        tituloBotaoFechar: "Fechar"
    };
    return ModalConfirma;
}(React.Component));
export { ModalConfirma };
