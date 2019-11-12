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
var ColunaTabela = /** @class */ (function (_super) {
    __extends(ColunaTabela, _super);
    function ColunaTabela() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColunaTabela.prototype.render = function () {
        return "";
    };
    ColunaTabela.defaultProps = {
        prefixo: "",
        sufixo: ""
    };
    return ColunaTabela;
}(React.Component));
export { ColunaTabela };
