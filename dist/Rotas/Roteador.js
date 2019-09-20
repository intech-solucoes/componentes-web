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
import { HashRouter, Switch, Route } from "react-router-dom";
var Roteador = /** @class */ (function (_super) {
    __extends(Roteador, _super);
    function Roteador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Roteador.prototype.render = function () {
        return (React.createElement(HashRouter, null,
            React.createElement(Switch, null, this.props.rotas.map(function (rota, index) { return React.createElement(Route, { key: index, exact: rota.caminhoExato, path: rota.caminho, component: rota.componente }); }))));
    };
    return Roteador;
}(React.Component));
export default Roteador;
