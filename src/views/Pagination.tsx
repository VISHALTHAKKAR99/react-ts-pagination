import React, { useCallback } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number, newRecordsPerPage?: number) => void;
    recordsPerPage?: number;
    onPageDrpSelect?: (recordsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, recordsPerPage, onPageDrpSelect }) => {
    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const maxDisplayedPages = 3;
        const pageNumbers = [];

        let leftPageBoundary;
        let rightPageBoundary;

        if (totalPages <= maxDisplayedPages) {
            leftPageBoundary = 1;
            rightPageBoundary = totalPages;
        } else {
            leftPageBoundary = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
            rightPageBoundary = Math.min(totalPages, leftPageBoundary + maxDisplayedPages - 1);

            if (rightPageBoundary - leftPageBoundary < maxDisplayedPages - 1) {
                leftPageBoundary = Math.max(1, rightPageBoundary - maxDisplayedPages + 1);
            }
        }

        for (let i = leftPageBoundary; i <= rightPageBoundary; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                // className={`mr-2 mx-1 w-6 h-rise-2 rounded-sm text-xs ${pageNumber === currentPage ? 'font-bold bg-primary text-white w-5 text-center' : ''}`}
                style={{
                    marginRight: '0.5rem',
                    marginLeft: '0.25rem',
                    width: '1.5rem',
                    height: '2rem', // Assuming h-rise-2 was meant to be h-2
                    borderRadius: '0.125rem', // Equivalent to rounded-sm
                    fontSize: '0.75rem', // Equivalent to text-xs
                    fontWeight: pageNumber === currentPage ? 'bold' : 'normal',
                    backgroundColor: pageNumber === currentPage ? 'red' : 'transparent', // Equivalent to bg-primary
                    color: pageNumber === currentPage ? '#fff' : '#000', // Equivalent to text-white or default text color
                    textAlign: 'center',
                }}

            >
                {pageNumber}
            </button>
        ));
    };

    const handleFirstPageClick = () => {
        handlePageClick(1);
    };

    const handlePrevPageClick = useCallback(() => {
        if (currentPage > 1) {
            handlePageClick(currentPage - 1);
        }
    }, [currentPage, handlePageClick]);

    const handleNextPageClick = useCallback(() => {
        if (currentPage < totalPages) {
            handlePageClick(currentPage + 1);
        }
    }, [currentPage, totalPages]);

    const handleLastPageClick = () => {
        handlePageClick(totalPages);
    };

    return (

        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={handleFirstPageClick} disabled={currentPage <= 0 || currentPage === 1} style={{ cursor: currentPage === 1 ? 'white' : 'pointer' }}>
                    <svg fill="#000000" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M6.945,12.832l12,8A1,1,0,0,0,20.5,20V4a1,1,0,0,0-1.555-.832l-12,8a1,1,0,0,0,0,1.664ZM18.5,5.869V18.131L9.3,12ZM3.5,18V6a1,1,0,0,1,2,0V18a1,1,0,0,1-2,0Z"></path></g></svg>
                </button>
                <button onClick={handlePrevPageClick} disabled={currentPage <= 0} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
                    <div style={{ padding: '0.375rem', margin: '0.25rem' }}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </div>
                </button>
                <div style={{ display: 'flex', alignItems: 'center', margin: '0.25rem' }}>{renderPageNumbers()}</div>
                <button onClick={handleNextPageClick} disabled={currentPage === totalPages} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                    <div style={{ padding: '0.375rem', margin: '0.25rem' }}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </button>
                <button onClick={handleLastPageClick} disabled={currentPage === totalPages} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                    <div style={{ padding: '0.375rem', margin: '0.25rem' }}>

                        <svg fill="#000000" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.028,20.882a1,1,0,0,0,1.027-.05l12-8a1,1,0,0,0,0-1.664l-12-8A1,1,0,0,0,3.5,4V20A1,1,0,0,0,4.028,20.882ZM5.5,5.869,14.7,12,5.5,18.131ZM18.5,18V6a1,1,0,0,1,2,0V18a1,1,0,0,1-2,0Z"></path></g></svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export { Pagination };
