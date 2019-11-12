import React from "react";

interface Props {
    visivel: boolean;
    titulo: string;

    nome?: string;
    tituloBotaoFechar?: string;
    onClose?: any;
    onConfirm?: any;
}

export class Modal extends React.Component<Props> {
    static defaultProps = {
        tituloBotaoFechar: "Fechar"
    }
  
    renderHeader(){
        return(
            <div className={"modal-header"}>
                <h5 className={"modal-title"}>
                    {this.props.titulo}
                </h5>

                <button onClick={this.props.onClose} type="button" className="close">
                    <span aria-hidden={"true"}>&times;</span>
                </button>
            </div>
        );
    }
    
    renderBody(){
        return(
            <div className={"modal-body"}>
                {this.props.children}
            </div>
        );
    }
    
    renderFooter(){
        return(
            <div className={"modal-footer"}>
                <button onClick={this.props.onConfirm} type={"button"} className={"btn btn-primary"} data-dismiss={"modal"}>
                    {this.props.tituloBotaoFechar}
                </button>
            </div>
        );
    }
    
    render(){
        return(
            <div
                style={{
                    display: this.props.visivel ? "block" : "none"
                }}
                className={`modal`}
            >
                <div className={"modal-dialog"}>
                    <div className={"modal-content"}>
                        {this.renderHeader()}
                        {this.renderBody()}
                        {this.renderFooter()}
                    </div>
                </div>
            </div>
        );
    }
}
