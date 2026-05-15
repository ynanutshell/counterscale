import React from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationButtonsProps {
    page: number;
    hasMore: boolean;
    handlePagination: (page: number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
    page,
    hasMore,
    handlePagination,
}) => {
    return (
        <div className="p-2 pr-0 grid grid-cols-[auto,1.5rem,1.5rem] text-right">
            <div></div>
            <button
                onClick={() => {
                    if (page > 1) handlePagination(page - 1);
                }}
                className={
                    page > 1
                        ? `text-primary hover:cursor-pointer`
                        : `text-primary`
                }
            >
                <ArrowLeft size={16} />
            </button>
            <button
                onClick={() => {
                    if (hasMore) handlePagination(page + 1);
                }}
                className={
                    hasMore
                        ? "text-primary hover:cursor-pointer"
                        : "text-primary"
                }
            >
                <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default PaginationButtons;
