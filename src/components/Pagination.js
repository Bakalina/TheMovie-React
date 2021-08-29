import React from "react";
import ReactPaginate from "react-paginate";


export default function Pagination({pages, getMovies}) {

    function pageMovie({selected}) {
        getMovies(selected + 1)
    }

    return (
            <ReactPaginate
                pageCount={pages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={pageMovie}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                nextLabel="›"
                previousLabel="‹"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                activeClassName="active"
                initialPage={0}
            />
    )
}