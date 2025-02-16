import { Priority } from "./Priority";

export interface TodoItem {
    title: string,
    description: string,
    priority: Priority,
    dueDate: Date,
    categoryId: string,
    finishDate: Date | undefined,
    isTempDeleted: boolean
}