import React from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
       <Container>
           <Row>
               <Col>
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
               </Col>
           </Row>
       </Container>
    )
}

export default NavBar;