import React, { ReactNode, ReactNodeArray } from "react";

interface Props {
    titulo: string;
    children: ReactNode | ReactNodeArray;
    textoBadge?: string;
    tipoBadge?: string;
}

export class Card extends React.Component<Props> {
    static defaultProps = {
        tipoBadge: "primary"
    }
    
    static TipoBadge = {
        primary : "primary",
        secondary : "secondary",
        success : "success",
        danger : "danger",
        warning : "warning",
        info : "info",
        light : "light",
        dark : "dark",
        link: "link"
    }

    render() {
        return (
            <div className={"card mb-3"}>
                <div className={"card-title"}>
                    {this.props.titulo}

                    {this.props.textoBadge &&
                        <span className={`badge badge-${this.props.tipoBadge}`}>{this.props.textoBadge}</span>
                    }
                </div>
                
                <div className={"card-content"}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}