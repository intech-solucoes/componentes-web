import React, { Component } from 'react'
import If from '../If'

interface Props{
    // visivel: boolean,
    // selecionada: boolean,
    id: string,
}

export default class TabConteudo extends Component<Props> {
    render() {
        return (
            <If test={this.props.children}>
                <div id={this.props.id}
                    className={`tab-pane ${this.props.children ? 'active' : ''}`}> 
                    {this.props.children}
                </div> 
            </If>
        )
    }
}
