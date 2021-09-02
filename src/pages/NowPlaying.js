import {useState} from 'react'
import {Container} from 'react-bootstrap';
import Movies from '../components/Movies';
import Pagination from "../components/Pagination";


export default function NowPlaying() {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    function getMovies(page = '') {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b3eddc3e1c353736590c8f4251c8afca&language=ru-RU&page=${page}`)
            .then(res => res.json())
            .then(({results, total_pages}) => {
                setMovies(results);
                setTotalPages(total_pages);
            });
    }

    return (
        <Container>
            <Movies data={movies}/>
            <Pagination pages={totalPages} getMovies={getMovies}/>
        </Container>
    )
}
