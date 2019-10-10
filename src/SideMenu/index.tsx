import React from "react";
import classNames from "classnames";
import { History } from 'history';
import { Link } from "react-router-dom";

import { Row, Col } from "../";

import { Rota } from "../Rotas";

export {
    Rota
}

interface Props {
    logo: string;
    rotas: Array<Rota>;
    admin: boolean;
    nomeUsuario: string;

    history?: History;
}

interface State {
    menuAberto: boolean;
    loading: boolean;
}

export class SideMenuPage extends React.Component<Props, State> {

    state = {
        menuAberto: false,
        loading: false
    }

    logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("token-admin");
        this.props.history.push("login");
    }

    render() {
        const classesNavbar = classNames([
            "navbar-default",
            {"nav-open": this.state.menuAberto}
        ]);

        const classesMenuButton = classNames([
            "btn",
            "btn-primary",
            "btn-menu-close",
            {"nav-open": this.state.menuAberto}
        ]);

        const classesPageWrapper = classNames([
            "page-wrapper",
            {"nav-open": this.state.menuAberto }
        ]);

        const Title = () => {
            var rota = this.props.history.location.pathname;

            var titulo;

            for (var i = 0; i < this.props.rotas.length; i++) {
                if (rota === this.props.rotas[i].caminho || rota === this.props.rotas[i].caminhoLink || rota.includes(this.props.rotas[i].caminhoLink)) {
                    titulo = <h2 id="titulo">{this.props.rotas[i].titulo}</h2>;
                }
            }

            return titulo;
        };

        return (
            <div className="wrapper">
                <nav className={classesNavbar}>
                    <ul>
                        <li className="navbar-header">
                            <img src={this.props.logo} alt="logo" />
                        </li>

                        {
                            this.props.rotas.map((rota, index) => {
                                if (rota.mostrarMenu) {
                                    return (
                                        <li key={index}>
                                            <Link to={rota.caminho}>
                                                <i className={rota.icone}></i>
                                                {rota.titulo}
                                            </Link>
                                        </li>
                                    );
                                }
                                else return "";
                            })
                        }

                        <li>
                            <a href="." onClick={this.logout}>
                                <i className="fas fa-sign-out-alt"></i>
                                Sair
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className={classesMenuButton} onClick={() => this.setState({ menuAberto: false })}>
                    <i className="fas fa-times fa-3x"></i>
                </button>

                <div className={classesPageWrapper}>
                    <Row className="page-heading">
                        <Col tamanho={"1"} className={"btn-menu"}>
                            <button className="btn btn-primary" onClick={() => this.setState({ menuAberto: !this.state.menuAberto })}>
                                <i className="fa fa-bars"></i>
                            </button>
                        </Col>

                        <Col>
                            <Title />
                        </Col>
                        
                        <Col tamanho={"4"} className={"col-lg-4 col-6 text-right user-icon"}>
                            <Row>
                                <Col className={"nome-usuario"}>
                                    {this.props.nomeUsuario}

                                    {this.props.admin &&
                                        <span>
                                            <Link to={"/listarParticipantes"} className={"icon"} style={{ marginLeft: 10, marginRight: 10 }}>
                                                <i className={"fas fa-user-friends"}></i>
                                            </Link>
                                            <Link to={"/admin"} className={"icon"}>
                                                <i className={"fas fa-lock"}></i>
                                            </Link>
                                        </span>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="wrapper-content">
                        {!this.state.loading && this.props.children}
                        
                        {this.state.loading && 
                            <div className="loader">
                                <img src="./imagens/loading.gif" alt="loading" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}