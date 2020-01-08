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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: "card mb-3" },
            React.createElement("div", { className: "card-title" },
                this.props.titulo,
                this.props.textoBadge &&
                    React.createElement("span", { className: "badge badge-" + this.props.tipoBadge }, this.props.textoBadge)),
            React.createElement("div", { className: "card-content" }, this.props.children)));
    };
    Card.defaultProps = {
        tipoBadge: "primary"
    };
    Card.TipoBadge = {
        primary: "primary",
        secondary: "secondary",
        success: "success",
        danger: "danger",
        warning: "warning",
        info: "info",
        light: "light",
        dark: "dark",
        link: "link"
    };
    return Card;
}(React.Component));
export { Card };
