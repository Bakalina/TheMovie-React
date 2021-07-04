import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap';


export default class PaginationPage extends Component {
    constructor(props) {
        super(props);
    }

    handlePageChange(page) {
        this.getAllMovies(page);
    }

    render() {
        const {activePage, totalPages} = this.state;
        return (
            <Pagination className="justify-content-center">
                <Pagination.First onClick={() => this.handlePageChange(1)}/>
                <Pagination.Prev onClick={() => this.handlePageChange(activePage - 1)} disabled={activePage === 1}/>
                {Array(9).fill(0).map((item, index) => {
                    if (activePage && (activePage > totalPages - 8)) {
                        return (
                            <Pagination.Item
                                onClick={() => this.handlePageChange(totalPages - 8 + index)}
                                active={activePage === totalPages - 8 + index}
                            >
                                {totalPages - 8 + index}
                            </Pagination.Item>
                        );
                    }
                    return (
                        <Pagination.Item onClick={() => this.handlePageChange(activePage + index)}
                                         active={activePage === activePage + index}>
                            {activePage + index}
                        </Pagination.Item>
                    );
                })}
                <Pagination.Next onClick={() => this.handlePageChange(activePage + 1)}
                                 disabled={activePage === totalPages}/>
                <Pagination.Last onClick={() => this.handlePageChange(totalPages)}/>
            </Pagination>
        )
    }
}

