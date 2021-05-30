import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';
import Rating from './Rating/Rating';

export const Movies = ({ data }) => {
    const moviesList = data.map(movie => (
        <Card key={movie.id}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}></Card.Img>
            <Rating rate={movie.vote_average * 10} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <CardColumns>{moviesList}</CardColumns>
    )
}
