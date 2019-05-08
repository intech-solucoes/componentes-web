import React from "react";
import classNames from "classnames";
import { TipoBotao } from "./Button";

interface Props {
    checked?: boolean;
    tipo?: TipoBotao;
}

export class ToggleButton extends React.Component<Props> {
    static defaultProps = {
        tipo: TipoBotao.primary,
        checked: false
    }

    render() {
        var classesLabel = classNames(
            "btn",
            [`btn-${this.props.tipo}`],
            {"active": this.props.checked}
        );

        return (
            <div className={"btn-group-toggle"}>
                <label className={classesLabel}>
                    <input type="checkbox" checked={this.props.checked} /> {this.props.checked ? "Checked" : "Unchecked"}
                </label>
            </div>
        );
    }
}