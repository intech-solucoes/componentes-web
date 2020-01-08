import React from "react";
import MasterPage from "../../MasterPage";
import { Card, Row, Col, Box } from "../../..";

interface Props { }

interface State { }

export class CardPage extends React.Component<Props, State> {
    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Card"}>

                            <p>Os Cards são utilizado para apresentar um conteúdo/informação em sua própria "caixa" separada.</p>
                            <p>As badges de tipo <b>primary</b> e <b>secondary</b> sempre irão buscar a cor primária e secundária definidas nos estilos.</p>
                            <code>{"<Card titulo={\"Seu Título\"} tipoBadge={Card.TipoBadge.primary} >{...children}</Card>"}</code>

                            <p>Tipos disponíveis:</p>

                            <ul>
                                <li>Card.TipoBadge.primary <b>(padrão)</b></li>
                                <li>Card.TipoBadge.secondary</li>
                                <li>Card.TipoBadge.success</li>
                                <li>Card.TipoBadge.danger</li>
                                <li>Card.TipoBadge.warning</li>
                                <li>Card.TipoBadge.info</li>
                                <li>Card.TipoBadge.light</li>
                                <li>Card.TipoBadge.dark</li>
                                <li>Card.TipoBadge.link</li>
                            </ul>

                            </Box>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.primary} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.secondary} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.success} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.danger} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.warning} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.info} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.light} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.dark} textoBadge={"Badge"}>{"Conteúdo"}</Card>
                            <Card titulo={"Seu Título"} tipoBadge={Card.TipoBadge.link} textoBadge={"Badge"}>{"Conteúdo"}</Card>

                    </Col>
                </Row>
            </MasterPage>
        );
    }
}