import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Movies} from '../components/Movies';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            valBtn: 1
        };
    }


    apiFetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${this.state.valBtn}`)
            .then(res => res.json())
            .then(response => this.setState({
                movies: response.results
            }));
    }


    componentDidMount() {
        this.apiFetchMovies()
    }


    componentDidUpdate() {
        this.apiFetchMovies()
    }

    clickPage = (e) => {
        this.setState({valBtn: e.target.value})
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <button value='1' onClick={e => this.clickPage(e)}>1</button>
                        <button value='2' onClick={e => this.clickPage(e)}>2</button>
                        <button value='3' onClick={e => this.clickPage(e)}>3</button>
                        <button value='4' onClick={e => this.clickPage(e)}>4</button>
                        <button value='5' onClick={e => this.clickPage(e)}>5</button>
                        <Movies data={this.state.movies}/>
                    </Col>
                </Row>
            </Container>
        )
    }


}
