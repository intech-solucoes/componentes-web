import React from "react";

interface Props {
    tamanho?: string;
    className?: string;
    children: React.ReactNode;
}

export class Col extends React.Component<Props> {
    render() {
        var tamanho = this.props.tamanho;
        var className = tamanho ? `col-${tamanho}` : "col";

        if(this.props.className)
            className += " " + this.props.className;
    
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}