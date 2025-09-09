import './App.css';

import TaskCard from './components/TaskCard';

const task = {
  id: '123',
  title: 'My Title Works',
  description: 'My description',
  dueDate: new Date(),
};

function App() {
  return (
    <div>
      <h1>Task manager</h1>
      <TaskCard task={task} />
    </div>
  );
}

export default App;
