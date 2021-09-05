import React from "react";
import {Col, Container, Nav, NavDropdown, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css'
import Logo from "../Img/logo.svg";


export default function NavBar() {
    return (
        <header className={styles.nav}>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/home" ><img alt='Logo' src={Logo} className={styles.logo}/></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col sm={10}>
                        <Nav>
                            <NavDropdown title="Фильмы" id="basic-nav-dropdown" >
                                <NavDropdown.Item as={NavLink} activeClassName="active" to="/home">Лучшие</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} activeClassName="active" to="/popular">Популярные</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} activeClassName="active" to="/expected">Ожидаемые</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} activeClassName="active" to="/now_playing">Смотрят сейчас</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/people">Люди</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

