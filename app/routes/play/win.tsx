import { LoaderFunction, useLoaderData } from "remix";
import Modal from "~/components/Modal";

export let loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    let score = url.searchParams.get("score");
    return score;
};

const Win = () => {
    const score = useLoaderData();

    return (
        <Modal
            icon={"✓"}
            title={"YIPEE!!"}
            message={`Congratulations! You have WON this round ${score && `and gained ${score} points`}!`}
            iconStyle={"text-green-600 text-8xl m-0 p-0"}
        />
    );
};

export default Win;
