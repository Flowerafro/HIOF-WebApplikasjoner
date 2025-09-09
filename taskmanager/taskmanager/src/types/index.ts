// definere data typer

export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date | string;
}
