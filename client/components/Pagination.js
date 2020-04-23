import React from 'react';
import '../../public/styles/index.scss';

const Pagination = ({
  totalPages,
  currentPage,
  incrementPage,
  decrementPage,
  jumpToPage
}) => {
  return (
    <div className="paginationContainer">
      <img
        src={'https://badgrey-other.s3.us-east-2.amazonaws.com/firstPage.png'}
        className={currentPage === 1 ? 'hidden' : 'paginationFirstPage'}
        onClick={() => jumpToPage(1)}
      />
      <img
        src={'https://badgrey-other.s3.us-east-2.amazonaws.com/backArrow.png'}
        className={currentPage === 1 ? 'hidden' : 'paginationBackArrow'}
        onClick={() => decrementPage()}
      />
      <div className="paginationPagesContainer">
        {totalPages.map((page, index) => {
          let current = index + 1;
          let selectedPage = currentPage === index + 1;
          let outOfView;
          if (currentPage >= totalPages.length - 6)
            outOfView = current < totalPages.length - 9;
          else if (currentPage >= 6)
            outOfView = current < currentPage - 4 || current > currentPage + 5;
          else outOfView = current > 10;

          return (
            <div
              key={current}
              onClick={() => jumpToPage(current)}
              className={
                outOfView
                  ? 'hidden'
                  : selectedPage
                  ? 'paginationSelectedPage'
                  : 'paginationPage'
              }
            >
              {current}
            </div>
          );
        })}
      </div>
      <img
        src={
          'https://badgrey-other.s3.us-east-2.amazonaws.com/forwardArrow.png'
        }
        className={
          currentPage === totalPages.length
            ? 'hidden'
            : 'paginationForwardArrow'
        }
        onClick={() => incrementPage()}
      />
      <img
        src={'https://badgrey-other.s3.us-east-2.amazonaws.com/lastPage.png'}
        className={
          currentPage === totalPages.length ? 'hidden' : 'paginationLastPage'
        }
        onClick={() => jumpToPage(totalPages.length)}
      />
    </div>
  );
};

export default Pagination;
