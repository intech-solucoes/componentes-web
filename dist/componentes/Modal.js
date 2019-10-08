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
// allow name giving
// edit label name
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.renderHeader = function () {
        return (React.createElement("div", { className: "modal-header" },
            React.createElement("h5", { className: "modal-title", id: "exampleModalLabel" }, this.props.titulo),
            React.createElement("button", { onClick: this.props.onClick, type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
    };
    Modal.prototype.renderBody = function () {
        return (React.createElement("div", { className: "modal-body" }, this.props.conteudo));
    };
    Modal.prototype.renderFooter = function () {
        return (React.createElement("div", { className: "modal-footer" },
            React.createElement("button", { onClick: this.props.onClick, type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Close")));
    };
    Modal.prototype.render = function () {
        return (React.createElement("div", { onClick: this.props.onClick, style: (this.props.status ? { display: "block" } : { display: "none" }), className: "modal fade " + (this.props.status ? "show" : "low-z-index"), id: this.props.nome, role: "dialog", "aria-labelledby": "exampleModalLabel" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    this.renderHeader(),
                    this.renderBody(),
                    this.renderFooter()))));
    };
    Modal.defaultProps = {
        nome: "somemodal"
    };
    return Modal;
}(React.Component));
export { Modal };
