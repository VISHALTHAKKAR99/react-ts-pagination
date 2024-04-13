import React, { useCallback } from 'react';
import Button from '../component/Button';
import { BackwardIcon, AngleLeftIcon, AngleRightIcon, ForwordIcon } from '../icons/iscon';

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
                className={`mr-2 mx-1 w-6 h-rise-2 rounded-sm text-xs ${pageNumber === currentPage ? 'font-bold bg-primary text-white w-5 text-center' : ''}`}
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
        <div className='pagination flex items-center'>
           
            <div className='flex items-center'>
                <Button onClick={handleFirstPageClick} disabled={currentPage <= 0 || currentPage === 1} className={currentPage === 1 ? 'cursor-not-allowed' : ''}>
                    <div className='px-1.5 mx-1 my-1'>
                        <span className='w-2 h-2 text-gray-800 inline-block svg-icon '>
                            <BackwardIcon />
                        </span>
                    </div>
                </Button>
                <Button onClick={handlePrevPageClick} disabled={currentPage <= 0} className={currentPage === 1 ? 'cursor-not-allowed' : ''}>
                    <div className='px-1.5 mx-1 my-1'>
                        <span className='w-2 h-2 text-gray-800 inline-block svg-icon '>
                            <AngleLeftIcon />
                        </span>
                    </div>
                </Button>
                <div className='flex items-center my-1'>{renderPageNumbers()}</div>
                <Button onClick={handleNextPageClick} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'cursor-not-allowed' : ''}>
                    <div className='px-1.5 mx-1 my-1'>
                        <span className='w-2 h-2 text-gray-800 inline-block svg-icon '>
                            <AngleRightIcon />
                        </span>
                    </div>
                </Button>
                <Button onClick={handleLastPageClick} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'cursor-not-allowed' : ''}>
                    <div className='px-1.5 mx-1 my-1'>
                        <span className='w-2 h-2 text-gray-800 inline-block svg-icon'>
                            <ForwordIcon />
                        </span>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
