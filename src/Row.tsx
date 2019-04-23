import React from "react";
import classNames from "classnames";

interface Props {
    formGroup?: boolean;
    className?: string;
    children: React.ReactNode;
}

export class Row extends React.Component<Props> {
    render() {
        var classes = classNames(
            {"form-group": this.props.formGroup},
            "row",
            this.props.className
        );

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}