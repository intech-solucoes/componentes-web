import React from "react";

import { Col, Row } from ".";

interface Props {
    titulo?: string;
    label?: string;
    renderRow: boolean;
    children: React.ReactNode;
}

export class Box extends React.Component<Props> {
    static defaultProps = {
        renderRow: true
    }

    renderBox = () : any => {
        return (
            <div className="box">
                {this.props.titulo &&
                    <div className="box-title">
                        {this.props.titulo}

                        {this.props.label &&
                            <span className={"badge badge-secondary"}>{this.props.label}</span>
                        }
                    </div>
                }

                <div className="box-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    render() {
        if(this.props.renderRow) {
            return (
                <Row>
                    <Col>
                        {this.renderBox()}
                    </Col>
                </Row>
            );
        } else {
            return this.renderBox();
        }
    }

}