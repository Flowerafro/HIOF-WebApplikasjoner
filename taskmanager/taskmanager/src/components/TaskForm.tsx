'use client'

import { useState } from 'react'
import type { Task } from '../types/index.ts'

export default function TaskForm() {

    // dekontrsukter ut task-objektet og lagrer det i state. dette er de initiale verdiene.
    const [taskItem, setTaskItem] = useState<Task>({
        id: '',
        title: '',
        description: '',
        dueDate: new Date(),
    })

    //updateTask oppdaterer staten taskItem
    // partial<Task> vil si at man bare sender inn noen av feltene i Task-typen
    const updateTask = (value: Partial<Task>) => {
        const id = crypto.randomUUID() // genererer en unik id eller string
        const description = '' // setter description til en tom string
        setTaskItem((prev) => ({ ...prev, ...value, id, description })) // beholder de gamle verdiene i taskItem og oppdaterer med nye verdier fra value-objektet, samt setter en ny id
    }

    console.log(taskItem);
    

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={taskItem.title} onChange={e => updateTask({title: e.target.value})} />

                <label htmlFor="description">Description:</label>
                <input type="text" id='description' name='description' value={taskItem.description} onChange={e => updateTask({description: e.target.value})} />

                <label htmlFor="dueDate">Due Date:</label>
                <input   type="date" id="dueDate" name="dueDate" value={taskItem.dueDate.toString().split("T")[0]}onChange={(e) => updateTask({ dueDate: new Date(e.target.value) })}/>
            </div>
            <button type='submit'>Add Task</button>
        
        </form>
    )
}