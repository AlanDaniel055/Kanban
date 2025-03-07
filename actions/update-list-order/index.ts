"use server";

import { auth } "@clerck/next.ks";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { cretaeSafeAction } from '@/lib/create-safe-action';

import { UpdateListOrder } from './schema';
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        return {
            error: "Unauthorized",
        };
    }

    const { items, listId } = data;
    let lists;

    try {
        const transaction = items.map((list) =>
        db.list.update({
            where: {
                id: list.id,
                board: {
                    orgId,
                },
            },
            data: {
                order: list.order,
            },
        })
        );

        lists = await db.$transaction(transaction);
    } catch (error) {
        return {
            error: "Failed to reorder."
        }
    }

    revalidatePath('/board/${boardId}');
    return { data: lists};
};

export const UpdateListOrder = cretaeSafeAction(UpdateListOrder, handler);