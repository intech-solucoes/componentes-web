import React from "react";

interface Props {
    formGroup?: boolean;
    className?: string;
    children: React.ReactNode;
}

export class Row extends React.Component<Props> {
    render() {
        var formGroup = this.props.formGroup ? "form-group" : "";

        return (
            <div className={this.props.className + " row " + formGroup}>
                {this.props.children}
            </div>
        )
    }
}