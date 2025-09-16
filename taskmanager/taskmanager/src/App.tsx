import './App.css';
import TaskFooter from './components/TaskFooter';

/*import TaskCard from './components/TaskCard';*/
import TaskList from './components/TaskList';


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
      <TaskList tasks={tasks}>
        <TaskFooter />
      </TaskList>
    </div>
  );
}

export default App;
