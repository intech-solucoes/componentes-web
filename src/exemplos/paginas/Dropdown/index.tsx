import React from "react";
import MasterPage from "../../MasterPage";
import { Row, Col, Box, Dropdown } from "../../..";

interface Props { }

interface State { }

export class DropdownPage extends React.Component<Props, State> {


    render() {
        return (
            <MasterPage {...this.props}>
                
                <Row>
                    <Col tamanho={"12"} className={"col-lg-4"}>
                        <Box titulo={"Padrão"} renderRow={false}>
                            <Dropdown />
                        </Box>
                    </Col>
                </Row>
                
            </MasterPage>
        );
    }
}