import * as React from 'react';
function AbasLista(_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? function () { return; } : _b, _c = _a.tabIndex, tabIndex = _c === void 0 ? 0 : _c, _d = _a.isActive, isActive = _d === void 0 ? false : _d, _e = _a.iconClassName, iconClassName = _e === void 0 ? '' : _e, _f = _a.linkClassName, linkClassName = _f === void 0 ? '' : _f;
    return (React.createElement("li", { className: "tab nav-item" },
        React.createElement("a", { className: "tab-link " + linkClassName + " " + (isActive ? 'active' : ''), onClick: function (event) {
                event.preventDefault();
                onClick(tabIndex);
            } },
            React.createElement("i", { className: "tab-icon " + iconClassName }),
            "  ",
            linkClassName)));
}
export default AbasLista;
