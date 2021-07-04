import React, { Component } from 'react'
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Movies } from '../components/Movies';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            activePage: 0,
            totalPages: 0
        };
    }


    getAllMovies(page) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${page}`)
            .then(res => res.json())
            .then(({ results, page, total_pages }) => this.setState({
                movies: results,
                activePage: page,
                totalPages: total_pages
            }));
    }

    componentDidMount() {
        this.getAllMovies(1);
    }

    handlePageChange(page) {
        this.getAllMovies(page);
    }


    render() {
        const { activePage, totalPages } = this.state;
        return (
            <Container>
                <Pagination className="justify-content-center">
                    <Pagination.First onClick={() => this.handlePageChange(1)} />
                    <Pagination.Prev onClick={() => this.handlePageChange(activePage - 1)} disabled={activePage === 1} />
                    {Array(9).fill(0).map((item, index) => {
                        if (activePage && (activePage > totalPages - 8)) {
                            return (
                                <Pagination.Item
                                    onClick={() => this.handlePageChange(totalPages - 8 + index)}
                                    active={activePage === totalPages - 8 + index}
                                >
                                    {totalPages - 8 + index}
                                </Pagination.Item>
                            );
                        }
                        return (
                            <Pagination.Item onClick={() => this.handlePageChange(activePage + index)} active={activePage === activePage + index}>
                                {activePage + index}
                            </Pagination.Item>
                        );
                    })}
                    <Pagination.Next onClick={() => this.handlePageChange(activePage + 1)} disabled={activePage === totalPages} />
                    <Pagination.Last onClick={() => this.handlePageChange(totalPages)} />
                </Pagination>
                <Row>
                    <Col>
                        <Movies data={this.state.movies} />
                    </Col>
                </Row>
            </Container>
        )
    }
}