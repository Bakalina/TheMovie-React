import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import {Movies} from '../components/Movies';
import Pagination from "../components/Pagination";


export default function PopularPage() {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    console.log(totalPages)

    function getMovies(page = '') {
        console.log(page)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${page}`)
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


// export default class PopularPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [],
//             totalPages: 0,
//             isModalOpened: false
//         };
//     }
//
//
//     getMovies(page='') {
//
//         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${page}`)
//             .then(res => res.json())
//             .then(({ results, page, total_pages }) => this.setState({
//                 movies: results,
//                 activePage: page,
//                 totalPages: total_pages
//             }));
//     }
//
//     handlePageChange = ({ selected }) => {
//         this.getMovies(selected + 1);
//     }
//
//
//     render() {
//         return (
//             <Container>
//                 <Row>
//                     <Col>
//                         <Movies data={this.state.movies}/>
//                     </Col>
//                 </Row>
//                 <ReactPaginate
//                     pageCount={this.state.totalPages}
//                     pageRangeDisplayed={5}
//                     marginPagesDisplayed={2}
//                     onPageChange={this.handlePageChange}
//                     containerClassName="pagination justify-content-center"
//                     pageClassName="page-item"
//                     pageLinkClassName="page-link"
//                     breakClassName="page-item"
//                     breakLinkClassName="page-link"
//                     nextLabel="›"
//                     previousLabel="‹"
//                     nextClassName="page-item"
//                     nextLinkClassName="page-link"
//                     previousClassName="page-item"
//                     previousLinkClassName="page-link"
//                     activeClassName="active"
//                     initialPage={0}
//                 />
//             </Container>
//         )
//     }
//
//
// }
