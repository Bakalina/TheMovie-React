import React from 'react'
import {Pagination} from 'react-bootstrap';




 const PaginationPage = () => {
     const active = 1;
     const items = [];
     for (let number = 1; number <= 10; number++) {
         items.push(
             <Pagination.Item  key={number} active={number === active && active}>
                 {number}
             </Pagination.Item>,
         );
     }
        return (
            <Pagination>{items}</Pagination>
        )


}


export default PaginationPage;