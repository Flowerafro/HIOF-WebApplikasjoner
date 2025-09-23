"use client"

import { useState } from "react"
import type { Task } from "../types"

export function useTask(initialTask: Partial<Task> = {}) {

    const [task, setTask] = useState<Task>({
        id: crypto.randomUUID(), // Setter en unik ID ved opprettelse
        title: "",
        description: "",
        dueDate: new Date(),
        ...initialTask // Overstyrer med eventuelle initiale verdier
    })

    // helt enkel validere, har du ikke tittel eller beskrivelse så er det feil
    // kortere versjon const validateTask = (task: Task) => !task.title || !task.description ? false : true

    const validateTask = (task: Task) => {
        if(!task.title || !task.description) return false
        return true
    }
       
    

    const updateTask = (data:Partial<Task>) => {
        setTask((prev) => ({ ...prev, ...data }))
        // ...prev er gammel state og ...data er nye verdier
    }

    return {task, actions:{ updateTask, validateTask }}
}