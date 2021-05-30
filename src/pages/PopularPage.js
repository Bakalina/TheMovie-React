import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Movies } from '../components/Movies';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b3eddc3e1c353736590c8f4251c8afca')
            .then(res => res.json())
            .then(response => this.setState({
                movies: response.results
            }));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Movies data={this.state.movies} />
                    </Col>
                </Row>
            </Container>
        )
    }
}