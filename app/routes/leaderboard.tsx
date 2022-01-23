import { Link, LoaderFunction, useLoaderData, useSubmit } from "remix";
import Pagination from "~/components/Pagination";
import { User } from "~/types/types";
import { getUsers } from "~/utils/queries.server";

export let loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const page: any = url.searchParams.get("page") || 1;
    let perPage = 10;
    let skip = perPage * page - perPage;
    const { users, totalUsers } = await getUsers(skip, perPage);
    let lastPage = Math.ceil(totalUsers / perPage);
    return { users, totalUsers, page, lastPage, perPage };
};

const Leaderboard = () => {
    const submit = useSubmit();
    const { users, totalUsers, page, lastPage, perPage } = useLoaderData();

    const paginate = (goTo: number) => {
        if (goTo < 1 || goTo > +lastPage) {
            return;
        }
        submit({ page: String(goTo) }, { method: "get" });
    };

    return (
        <>
            <div className="bg-blackbg h-screen w-screen">
                <div className="flex justify-center items-center h-full w-full">
                    <div className="bg-white rounded-lg w-11/12 md:w-2/4 p-6 min-h-min">
                        <h3 className="text-center text-2xl mb-6 font-bold">Leaderboard</h3>
                        <table className="border-collapse w-full">
                            <thead>
                                <tr className="shadow-md">
                                    <th className="text-center py-6" onClick={() => paginate(1)}>
                                        Rank
                                    </th>
                                    <th className="text-center py-6">Username</th>
                                    <th className="text-center py-6">Country</th>
                                    <th className="text-center py-6">Points</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {users.map((user: User, i: number) => (
                                    <tr className="border-b-2 border-solid" key={i}>
                                        <td className={`text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`}>
                                            #{i + 1 + perPage * page - perPage}
                                        </td>
                                        <td className={`text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`}>
                                            {user.username}
                                        </td>
                                        <td className={`text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`}>
                                            {user.country + " " + user.countryEmoji}
                                        </td>
                                        <td className={`text-center py-4 ${i === 0 ? "text-blue-600 font-bold" : null}`}>{user.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination users={users} paginate={paginate} totalUsers={totalUsers} page={page} lastPage={lastPage} />
                    </div>
                </div>
            </div>
        </>
    );
};

export function ErrorBoundary() {
    return (
        <div className="w-screen h-screen bg-blackbg flex items-center justify-center">
            <div className="text-center">
                <p className="text-white font-bold text-4xl">An error ?! I knew software engineering was not my thing! </p>
                <Link className="text-blue-600 text-2xl underline mt-4 block" to="/leaderboard">
                    Go Back
                </Link>
            </div>
        </div>
    );
}

export default Leaderboard;
