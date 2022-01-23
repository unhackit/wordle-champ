import type { LoaderFunction } from "remix";
import { logout } from "~/utils/session.server";

// export const action: ActionFunction = async ({ request }) => {
//     console.log("action function");

// };

export const loader: LoaderFunction = async ({ request }) => {
    return logout(request);
};
