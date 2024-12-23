import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import React, { useState } from 'react';

function Pagination({ total, currentPage, onPageChange }) {
    const [activePage, setActivePage] = useState(currentPage || 1);

    const handlePageChange = (page) => {
        if (page < 1 || page > total) return;
        setActivePage(page);
        onPageChange && onPageChange(page);
    };

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                className={`px-2 py-2 border rounded ${activePage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
                    }`}
                disabled={activePage === 1}
                onClick={() => handlePageChange(activePage - 1)}
            >
                <IconChevronsLeft />
            </button>

            {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    className={`px-3 py-2 border rounded text-xs ${activePage === page ? 'bg-[#31539A] text-white' : 'hover:bg-gray-200'
                        }`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className={`px-2 py-2 border rounded ${activePage === total ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
                    }`}
                disabled={activePage === total}
                onClick={() => handlePageChange(activePage + 1)}
            >
                <IconChevronsRight />
            </button>
        </div>
    );
}

export default Pagination;
