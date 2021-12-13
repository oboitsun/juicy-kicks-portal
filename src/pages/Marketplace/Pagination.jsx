import React from "react";

export default function Pagination({ total, perPage, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for (let j = 1; j <= Math.ceil(total / perPage); j++) {
    pageNumbers.push(j);
  }
  return (
    <div className="flex items-center gap-3 py-5 justify-center w-full">
      {pageNumbers.map((p, i) => (
        <div
          onClick={() => {
            setCurrentPage(p);
          }}
          key={i}
          className={`w-10 h-10  rounded-md text-white flex items-center justify-center border-2 ${
            p === currentPage ? "bg-yellow border-white" : "bg-gray-400 border-black"
          }`}
        >
          {p}
        </div>
      ))}
    </div>
  );
}
