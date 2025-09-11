import './App.css';

/*import TaskCard from './components/TaskCard';*/
import TaskList from './components/TaskList';

// prop med key-task
/* const task = {
  id: '123',
  title: 'My Title Works',
  description: 'My description',
  dueDate: new Date(),
}; */

// denne listen må være en liste og hvert element må ha signaturen til Task-type
const tasks = [
  {id: '123',
  title: 'Task 1',
  description: 'Buy groceries',
  dueDate: new Date(),
},
{
  id: '124',
  title: 'Task 2',
  description: 'Do laundry',
  dueDate: new Date(),
}
]
// new Date() lager et nyy dato-objkt for hver oppgave. dueDate-feltet for hver task får verdien av tidspunktet da arrayen ble opprettet

function App() {
  return (
    <div>
      <h1>Task manager</h1>
      {/* <TaskCard task={task} /> */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
