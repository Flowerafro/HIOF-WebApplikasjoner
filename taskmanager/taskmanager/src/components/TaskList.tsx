import type { Task } from '../types';
import TaskCard from './TaskCard';

export default function TaskList({tasks, children}: {tasks: Task[], children: React.ReactNode}) {
    return (
       <section>
        <p>TaskList {tasks.length}</p>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
        {children}
        </section>
    )
}

// <TaskList tasks={tasks} /> sånn ser komponentet ut i bruk
// {tasks}: tasks hentes inn {tasks: Task[] tasks har Task[] type}
// tasks.map går gjennom listen som ligger i App.tsx og lager et TaskCard for hver task i listen