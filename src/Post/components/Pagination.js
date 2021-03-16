import React from 'react';
import {PaginationRoot} from './styled.components'


const Pagination = ({ page = 1, limit, onPageChange, count}) => {
    const onNextClick = ()=>{onPageChange(page + 1)};
    const onPrevClick = ()=>{onPageChange(page - 1)};

   return ( <PaginationRoot>

       <button disabled={ page === 1 } onClick={onPrevClick}>{'<'}</button>
       <div className='page'>{page}</div>
       <button disabled={ page * limit >= count } onClick={onNextClick}>{'>'}</button>
   </PaginationRoot>
    );
};

export default Pagination;