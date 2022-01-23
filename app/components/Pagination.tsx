import { PaginationProps } from "~/types/types";

const Pagination = ({ users, paginate, totalUsers, page, lastPage }: PaginationProps) => {
    return (
        <div className="w-full shadow-slate-400 shadow-lg p-2 mt-4">
            <div>
                <ul className="flex justify-center items-center">
                    <li
                        onClick={() => paginate(1)}
                        className={`${page === 1 ? "disabled" : ""} mr-2 text-blue-600 font-bold cursor-pointer`}
                    >
                        <span>First</span>
                    </li>
                    <li
                        onClick={() => paginate(+page - 1)}
                        className={`${page === 1 ? "disabled" : ""}  mr-2 text-blue-600 font-bold cursor-pointer`}
                    >
                        <span>Previous</span>
                    </li>
                    {new Array(lastPage).fill("x").map((c, index) => {
                        let item = index + 1;
                        return (
                            <li
                                key={index}
                                className={`${
                                    page === item ? "active" : ""
                                } mx-2 border-2 rounded-full border-blue-600 w-8 cursor-pointer text-lg text-center text-blue-600`}
                                onClick={() => paginate(item)}
                            >
                                <span>{item}</span>
                            </li>
                        );
                    })}
                    <li
                        onClick={() => paginate(+page + 1)}
                        className={`${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 font-bold cursor-pointer`}
                    >
                        <span>Next</span>
                    </li>
                    <li
                        onClick={() => paginate(lastPage)}
                        className={`${page === lastPage ? "disabled" : ""} ml-2 text-blue-600 font-bold cursor-pointer`}
                    >
                        <span>Last</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;
