import React from "react";
import { Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css'


export default function NavBar() {
    return (
        <header className={styles.nav}>
            <Container>
                <Nav variant="pills" as='ul'>
                    <Nav.Item as='li'>
                        <Nav.Link as={NavLink} activeClassName="active" to="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link as={NavLink} activeClassName="active" to="/popular">Popular</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link as={NavLink} activeClassName="active" to="/expected">Expected</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link as={NavLink} activeClassName="active" to="/now_playing">NowPlaying</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header>
    )
}

