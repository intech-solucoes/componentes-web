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
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Row, Col } from "../";
import { Rota } from "../Rotas";
export { Rota };
var SideMenuPage = /** @class */ (function (_super) {
    __extends(SideMenuPage, _super);
    function SideMenuPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            menuAberto: false,
            loading: false
        };
        _this.logout = function () {
            if (_this.props.onLogout) {
                _this.props.onLogout();
            }
            else {
                var tokens = {
                    "user": _this.props.appName ? "@" + _this.props.appName + ":token" : "token",
                    "admin": _this.props.appName ? "@" + _this.props.appName + ":token-admin" : "token-admin"
                };
                localStorage.removeItem(tokens.user);
                localStorage.removeItem(tokens.admin);
                _this.props.history.push("login");
            }
        };
        return _this;
    }
    SideMenuPage.prototype.render = function () {
        var _this = this;
        var classesNavbar = classNames([
            "navbar-default",
            { "nav-open": this.state.menuAberto }
        ]);
        var classesMenuButton = classNames([
            "btn",
            "btn-primary",
            "btn-menu-close",
            { "nav-open": this.state.menuAberto }
        ]);
        var classesPageWrapper = classNames([
            "page-wrapper",
            { "nav-open": this.state.menuAberto }
        ]);
        var Title = function () {
            var rota = _this.props.history.location.pathname;
            var titulo;
            for (var i = 0; i < _this.props.rotas.length; i++) {
                if (rota === _this.props.rotas[i].caminho || rota === _this.props.rotas[i].caminhoLink || rota.includes(_this.props.rotas[i].caminhoLink)) {
                    titulo = React.createElement("h2", { id: "titulo" }, _this.props.rotas[i].titulo);
                }
            }
            return titulo;
        };
        return (React.createElement("div", { className: "wrapper" },
            React.createElement("nav", { className: classesNavbar },
                React.createElement("ul", null,
                    React.createElement("li", { className: "navbar-header" },
                        React.createElement("img", { src: this.props.logo, alt: "logo" })),
                    this.props.rotas.map(function (rota, index) {
                        if (rota.mostrarMenu) {
                            return (React.createElement("li", { key: index },
                                React.createElement(Link, { to: rota.caminho },
                                    React.createElement("i", { className: rota.icone }),
                                    rota.titulo)));
                        }
                        else
                            return "";
                    }),
                    React.createElement("li", null,
                        React.createElement("a", { href: ".", onClick: this.logout },
                            React.createElement("i", { className: "fas fa-sign-out-alt" }),
                            "Sair")))),
            React.createElement("button", { className: classesMenuButton, onClick: function () { return _this.setState({ menuAberto: false }); } },
                React.createElement("i", { className: "fas fa-times fa-3x" })),
            React.createElement("div", { className: classesPageWrapper },
                React.createElement(Row, { className: "page-heading" },
                    React.createElement(Col, { tamanho: "1", className: "btn-menu" },
                        React.createElement("button", { className: "btn btn-primary", onClick: function () { return _this.setState({ menuAberto: !_this.state.menuAberto }); } },
                            React.createElement("i", { className: "fa fa-bars" }))),
                    React.createElement(Col, null,
                        React.createElement(Title, null)),
                    React.createElement(Col, { tamanho: "6", className: "text-right user-icon" },
                        React.createElement(Row, null,
                            React.createElement(Col, { className: "nome-usuario" },
                                this.props.nomeUsuario,
                                this.props.admin &&
                                    React.createElement("span", null,
                                        React.createElement(Link, { to: "/listarParticipantes", className: "icon", style: { marginLeft: 10, marginRight: 10 } },
                                            React.createElement("i", { className: "fas fa-user-friends" })),
                                        React.createElement(Link, { to: "/admin", className: "icon" },
                                            React.createElement("i", { className: "fas fa-lock" }))))))),
                React.createElement("div", { className: "wrapper-content" },
                    !this.state.loading && this.props.children,
                    this.state.loading &&
                        React.createElement("div", { className: "loader" },
                            React.createElement("img", { src: "./imagens/loading.gif", alt: "loading" }))))));
    };
    return SideMenuPage;
}(React.Component));
export { SideMenuPage };
