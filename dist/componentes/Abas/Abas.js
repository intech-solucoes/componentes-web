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
import * as React from 'react';
//import './Abas.css'
var Abas = /** @class */ (function (_super) {
    __extends(Abas, _super);
    function Abas(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            activeTabIndex: 0,
        };
        _this.handleTabClick = _this.handleTabClick.bind(_this);
        return _this;
    }
    Abas.prototype.handleTabClick = function (tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.state.activeTabIndex : tabIndex
        });
    };
    Abas.prototype.renderChildrenWithTabsApiAsProps = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child, index) {
            return React.cloneElement(child, {
                onClick: _this.handleTabClick,
                tabIndex: index,
                isActive: index === _this.state.activeTabIndex
            });
        });
    };
    Abas.prototype.renderActiveTabContent = function () {
        if (this.state.activeTabIndex !== undefined) {
            var children = this.props.children;
            var activeTabIndex = this.state.activeTabIndex;
            if (children != null) {
                if (children[activeTabIndex]) {
                    return children[activeTabIndex].props.children;
                }
            }
            else {
                console.dir('Erro! Não contem filhos!');
            }
        }
    };
    Abas.prototype.render = function () {
        return (React.createElement("div", { className: "tabs" },
            React.createElement("ul", { className: "tabs-nav nav nav-tabs " }, this.renderChildrenWithTabsApiAsProps()),
            React.createElement("div", { className: "tabs-active-content" }, this.renderActiveTabContent())));
    };
    return Abas;
}(React.Component));
export default Abas;
