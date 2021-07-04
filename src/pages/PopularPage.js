import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Movies} from '../components/Movies';
import PaginationPage from "../Pagination/Pagination";


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




    render() {
        return (
            <Container>
                <PaginationPage activePage={this.state.activePage} totalPages={this.state.totalPages}/>
                <Row>
                    <Col>
                        <Movies data={this.state.movies}/>
                    </Col>
                </Row>
            </Container>
        )
    }


}
