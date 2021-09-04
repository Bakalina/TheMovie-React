import React from "react";
import {Container, Nav, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css'


export default function NavBar() {
    return (
        <header className={styles.nav}>
            <Container>
                <Nav>
                    <NavDropdown title="Фильмы" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} activeClassName="active" to="/home">Лучшие</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} activeClassName="active" to="/popular">Популярные</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} activeClassName="active" to="/expected">Ожидаемые</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} activeClassName="active" to="/now_playing">Смотрят сейчас</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/people">Люди</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header>
    )
}

