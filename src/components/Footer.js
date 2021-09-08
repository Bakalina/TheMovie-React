import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import footerStyles from './Footer.module.css';
import logoFooter from '../Img/logoFooter.svg';


export default function Footer() {
    return (
        <footer className={footerStyles.fot}>
            <Container>
                <Row>
                    <Col sm={2}>
                        <img alt='Logo' src={logoFooter} className={footerStyles.logo}/>
                    </Col>
                    <Col sm={2}>
                        <h6>ГЛАВНОЕ</h6>
                        <a href='#'>О TMDB</a>
                        <a href='#'>Связаться с нами</a>
                        <a href='#'>Форумы поддержки</a>
                        <a href='#'>API</a>
                        <a href='#'>Статус системы</a>
                    </Col>
                    <Col sm={2}>
                        <h6>УЧАСТВУЙТЕ</h6>
                        <a href='#'>Писание об участии</a>
                        <a href='#'>Сторонние приложения</a>
                        <a href='#'>Добавить новый фильм</a>
                        <a href='#'>Добавить новый сериал</a>
                    </Col>
                    <Col sm={2}>
                        <h6>СООБЩЕСТВО</h6>
                        <a href='#'>Руководства</a>
                        <a href='#'>Обсуждения</a>
                        <a href='#'>Доска почёта</a>
                        <a href='#'>Twitter</a>
                    </Col>
                    <Col sm={3}>
                        <h6>О ПРАВЕ</h6>
                        <a href='#'>Условия использования</a>
                        <a href='#'>API Правила использования</a>
                        <a href='#'>Политика конфиденциальности</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}