import { prisma } from "../../lib/prisma";
// =====================
// CURRENT USER
// =====================
export const getMeFromDB = async (userId) => {
    return prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
            isBanned: true,
            createdAt: true,
        },
    });
};
export const updateMeInDB = async (userId, data) => {
    return prisma.user.update({
        where: { id: userId },
        data: {
            name: data.name,
            image: data.image,
        },
    });
};
// =====================
// ADMIN
// =====================
export const getAllUsersFromDB = async () => {
    return prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });
};
export const banUserInDB = async (id, isBanned) => {
    return prisma.user.update({
        where: { id },
        data: { isBanned },
    });
};
export const changeUserRoleInDB = async (id, role) => {
    return prisma.user.update({
        where: { id },
        data: { role },
    });
};
export const UserService = {
    getMeFromDB,
    updateMeInDB,
    getAllUsersFromDB,
    banUserInDB,
    changeUserRoleInDB,
};
