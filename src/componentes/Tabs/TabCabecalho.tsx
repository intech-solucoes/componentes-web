import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

// import If from '../If'

// import { TabSelecionada } from './TabActions'

interface Props{
    //TabSelecionada: Function,
    // tab: string,
    visivel: boolean,
    selecionada: boolean,
    label: string,
    icon: string,
    target: string
}

export default class TabCabecalho extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            visivel: true,
            selecionada: true,
        }
    }

    TabSelecionada(){

    }

    render() {
        // const selected = this.props.tab.selected === this.props.target
        // const visible = this.props.tab.visible[this.props.target]

        console.log("Cabecalho");
        
        return (
            // <If test={this.props.visivel}>
            //     <li className={this.props.selecionada ? 'active' : ''}> 
                <li> 
                    <a href='javascript:;' 
                        data-toggle='tab'
                        //onClick={() => this.props.TabSelecionada(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a> 
                </li> 
            // </If>
        )
    }
}

// const mapStateToProps = state => ({tab : state.tab})
// const mapDispatchToProps = dispatch => bindActionCreators({TabSelecionada}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(TabCabecalho)