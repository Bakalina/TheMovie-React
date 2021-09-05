import React from 'react'
import { Card, Row } from 'react-bootstrap';
import Rating from './Rating/Rating';
import {Link} from "react-router-dom";


export default function Movies ({ data }) {
    const moviesList = data.map(movie => (
        <Card key={movie.id} style={{ width: '13.6rem', margin: '5px' }} border="light">
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}></Card.Img>
            <Rating rate={movie.vote_average * 10} />
            <Card.Body>
                <Card.Title><Link to={`/films/${movie.id}`}>{movie.title}</Link></Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <Row>{moviesList}</Row>
    )
}
