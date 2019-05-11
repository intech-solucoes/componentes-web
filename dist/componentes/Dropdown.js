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
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown" },
            React.createElement("button", { className: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown button"),
            React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                React.createElement("a", { className: "dropdown-item", href: "#" }, "Action"),
                React.createElement("a", { className: "dropdown-item", href: "#" }, "Another action"),
                React.createElement("a", { className: "dropdown-item", href: "#" }, "Something else here"))));
    };
    return Dropdown;
}(React.Component));
export { Dropdown };
