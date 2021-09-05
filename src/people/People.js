import React, {useState} from "react";
import Pagination from "../components/Pagination";
import {Card, Container, Row} from "react-bootstrap";


export default function People() {
    const [people, setPeople] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    function getPeople(page=''){
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=b3eddc3e1c353736590c8f4251c8afca&language=ru-RU&page=${page}`)
            .then(res=>res.json())
            .then(({results, total_pages}) => {
                setPeople(results);
                setTotalPages(total_pages);
            });
    }

    const peopleList = people.map(person => (
        <Card key={person.id} style={{ width: '11rem', margin: '5px' }} border="light">
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${person.profile_path}`}></Card.Img>
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.known_for.map(el => `"${(el.name)!==undefined?el.name:el.title}" `)}</Card.Text>
            </Card.Body>
        </Card>
    ));

     return (
         <Container>
             <Row>{peopleList}</Row>
             <Pagination pages={totalPages} getMovies={getPeople}/>
         </Container>
     )
}