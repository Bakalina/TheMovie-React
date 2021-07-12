import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Movies } from '../components/Movies';
import ReactPaginate from "react-paginate";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            totalPages: 0,
            isModalOpened: false
        };
    }


    getMovies(page='') {

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${page}`)
            .then(res => res.json())
            .then(({ results, page, total_pages }) => this.setState({
                movies: results,
                activePage: page,
                totalPages: total_pages
            }));
    }

    handlePageChange = ({ selected }) => {
        this.getMovies(selected + 1);
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Movies data={this.state.movies}/>
                    </Col>
                </Row>
                <ReactPaginate
                    pageCount={this.state.totalPages}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={this.handlePageChange}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    nextLabel="›"
                    previousLabel="‹"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    activeClassName="active"
                    initialPage={0}
                />
            </Container>
        )
    }
}