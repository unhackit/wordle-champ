import { db } from "./db.server";

export async function updateScore(userId: string, score: number) {
    let updatedUser = await db.user.update({
        where: { id: userId },
        data: {
            score: {
                increment: score,
            },
        },
    });

    return updatedUser;
}

export async function getUsers(skip: number, total: number) {
    let users = await db.user.findMany({
        skip: skip,
        take: total,
        orderBy: {
            score: "desc",
        },
    });
    let totalUsers = await db.user.count();

    return {
        users,
        totalUsers,
    };
}
