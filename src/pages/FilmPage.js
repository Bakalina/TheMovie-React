import {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";


export default function FilmPage (props) {
    const [movie, setMovie] = useState([])
    console.log(movie)
    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=b3eddc3e1c353736590c8f4251c8afca&language=ru-RU`)
                .then(res => res.json())
                .then(response => setMovie(response))
        },[])
    const {poster_path, title, overview, release_date, tagline, backdrop_path} = movie

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img alt='image' style={{maxWidth: '100%'}}
                         src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}/>
                </Col>
                <Col sm={8}>
                    <h2>{title}</h2>
                    <p>{release_date}</p>
                    <p>{tagline}</p>
                    <p><b>Обзор: </b>{overview}</p>
                </Col>
            </Row>
        </Container>
    )
}
