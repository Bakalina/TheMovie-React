import React from 'react'
import {Pagination} from 'react-bootstrap';


class PaginationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1
        }

    }


    paginationFetch = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b3eddc3e1c353736590c8f4251c8afca&page=${this.state.pageNumber}`)
            .then(res => res.json())
            .then(response => this.setState({
                movies: response.results
            }));
    }

    render() {
        const active = this.state.pageNumber;
        const items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active && active}>
                    {number}
                </Pagination.Item>,
            );

        }
        return (
            <Pagination>{items}</Pagination>
        )

    }
}


export default PaginationPage;