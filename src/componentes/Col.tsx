import React from "react";
import classNames from "classnames";

interface Props {
    tamanho?: string;
    className?: string;
    children: React.ReactNode;
}

export class Col extends React.Component<Props> {
    render() {
        var classes = classNames(
            {"col": !this.props.tamanho},
            {[`col-${this.props.tamanho}`]: this.props.tamanho},
            this.props.className
        );
    
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}