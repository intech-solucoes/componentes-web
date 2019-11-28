import React from "react";
import MasterPage from "../../MasterPage";
import { Alerta, TipoAlerta, Row, Col, Box } from "../../..";

interface Props { }

interface State { }

export class AlertaPage extends React.Component<Props, State> {
    render() {
        return (
            <MasterPage {...this.props}>
                <Row>
                    <Col>
                        <Box titulo={"Alerta"}>

                            <p>Os alertas de tipo <b>primary</b> e <b>secondary</b> sempre irão buscar a cor primária e secundária definidas nos estilos.</p>
                            <code>{"<Botao tipo={TipoAlerta.primary} />"}</code>

                            <p>Tipos disponíveis:</p>

                            <ul>
                                <li>TipoAlerta.primary <b>(padrão)</b></li>
                                <li>TipoAlerta.secondary</li>
                                <li>TipoAlerta.success</li>
                                <li>TipoAlerta.danger</li>
                                <li>TipoAlerta.warning</li>
                                <li>TipoAlerta.info</li>
                                <li>TipoAlerta.light</li>
                                <li>TipoAlerta.dark</li>
                                <li>TipoAlerta.link</li>
                            </ul>

                            <Alerta tipo={TipoAlerta.primary} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.secondary} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.success} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.danger} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.warning} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.info} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.light} mensagem={"Alerta"} />
                            <Alerta tipo={TipoAlerta.dark} mensagem={"Alerta"} />

                        </Box>
                    </Col>
                </Row>
            </MasterPage>
        );
    }
}