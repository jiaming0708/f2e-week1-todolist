export interface Task {
    id: number;
    title: string;
    isFavorite: boolean;
    deadline: string;
    files: any[];
    comment: string;
    isCompleted: boolean;
}
