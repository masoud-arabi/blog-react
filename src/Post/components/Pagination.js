import React from 'react';
import {PaginationRoot} from './styled.components'


const Pagination = ({ _page = 1, _limit, onPageChange, count}) => {
    const onNextClick = ()=>{onPageChange(_page + 1)};
    const onPrevClick = ()=>{onPageChange(_page - 1)};

   return ( <PaginationRoot>

       <button disabled={ _page === 1 } onClick={onPrevClick}>{'<'}</button>
       <div className='page'>{_page}</div>
       <button disabled={ _page * _limit >= count } onClick={onNextClick}>{'>'}</button>
   </PaginationRoot>
    );
};

export default Pagination;