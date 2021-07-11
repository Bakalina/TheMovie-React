import React, {Component} from 'react'
import {Container, Row, Col, Pagination} from 'react-bootstrap';
import {Movies} from '../components/Movies';
import PaginationPage from "../Pagination/Pagination";
import ReactPaginate from 'react-paginate';




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
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${page}`)
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
                <ReactPaginate
                    pageCount={totalPages}
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
                <Row>
                    <Col>
                        <Movies data={this.state.movies}/>
                    </Col>
                </Row>
            </Container>
        )
    }


}
