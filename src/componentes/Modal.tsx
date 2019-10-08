import React from "react";
//import { Botao } from "..";

interface Props{
    conteudo: any;
    nome?: string;
    onClick: any;
    status: boolean;
    titulo: string;
}

// allow name giving
// edit label name

export class Modal extends React.Component<Props>{
    static defaultProps = {
        nome: "somemodal"
    }
  
    renderHeader(){
        return(
            <div className={"modal-header"}>
                <h5 className={"modal-title"} id={"exampleModalLabel"}>{this.props.titulo}</h5>
                <button onClick={this.props.onClick} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden={"true"}>&times;</span>
                </button>
            </div>
        );
    }
    
    renderBody(){
        return(
            <div className={"modal-body"}>
                {this.props.conteudo}
            </div>
        );
    }
    
    renderFooter(){
        return(
            <div className={"modal-footer"}>
                {/*<Botao onClick={this.props.onClick} className={"btn btn-secondary"} titulo={"Close"}/>*/}
                <button onClick={this.props.onClick} type={"button"} className={"btn btn-secondary"} data-dismiss={"modal"}>Close</button>
            </div>
        );
    }
    
    render(){
        return(
            <div onClick={this.props.onClick} style={(this.props.status ? {display: "block"} : {display: "none"})} className={`modal fade ${(this.props.status ? "show" : "low-z-index")}`}  id={this.props.nome} role={"dialog"} aria-labelledby={"exampleModalLabel"}>
                <div className={"modal-dialog"} role={"document"}>
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
