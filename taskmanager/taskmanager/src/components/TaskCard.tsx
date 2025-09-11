import TaskTitle from './TaskTitle';

import TaskItem from './TaskItem';
import type { Task } from '../types';

// <TaskCard task={dataKommerHer} />

// her dekonstruktes task og kan brukes videre. Etter : er typen til task. 
export default function TaskCard({ task }: { task: Task }) {

  // her hentes title ut av task
  const { title } = task;

  // funksjon som tar inn task og et tall, logger id og tallet. sendes som prop til TaskItem
  const onActionInTaskItem = (task: Task, time: number) => {
    console.log(task.id, time);
  };

  return (
    <section className='task-card'>
      {/* Her sendes tittel til TaskTitle */}
      <TaskTitle title={title} />
      {/* Her sendes item og en action til TaskItem */}
      <TaskItem task={task} onAction={onActionInTaskItem} />
    </section>
  );
}
