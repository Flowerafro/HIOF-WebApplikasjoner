import { useState } from "react"
import type { Task } from "../types"
import TaskForm from "./TaskForm"


//tar imot prop initialTasks utenifra og setter den som initial verdi i useState
export default function TaskManager({
    initialTasks
}: {
    initialTasks: Task[]
}) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)

    const onTaskCreate = (task: Task) => {
        setTasks(prev => ([...prev, task]))
    }

    return <section>
        <TaskForm onTaskCreate={onTaskCreate}/>
        <p>{tasks.length}</p>
    </section>
}