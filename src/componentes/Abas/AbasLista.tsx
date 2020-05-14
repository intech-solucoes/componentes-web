import * as React from 'react';
//import './Abas.css'

interface Props {
    onClick?: Function;
    tabIndex?: Number;
    isActive?: Boolean;
    iconClassName: String;
    linkClassName: String;
}



function AbasLista({
    onClick = function () { return; },
    tabIndex = 0,
    isActive = false,
    iconClassName = '',
    linkClassName = ''
}: Props) {
    return (
            <li className="tab nav-item">
                <a
                    className={`tab-link ${linkClassName} ${isActive ? 'active' : ''}`}
                    onClick={(event) => {
                        event.preventDefault();
                        onClick(tabIndex);
                    }}
                >
                    <i className={`tab-icon ${iconClassName}`} />
                    {"  "}
                    {linkClassName}
                </a>
            </li>
    );
}

export default AbasLista;