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
import { Box, Botao } from "..";
var FormEdicao = /** @class */ (function (_super) {
    __extends(FormEdicao, _super);
    function FormEdicao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormEdicao.prototype.render = function () {
        return (React.createElement(Box, { titulo: "Edição" },
            this.props.children,
            React.createElement(Botao, { titulo: "Salvar", onClick: function () { }, className: "mr-2" }),
            React.createElement(Botao, { titulo: "Cancelar", onClick: function () { } })));
    };
    return FormEdicao;
}(React.Component));
export { FormEdicao };
