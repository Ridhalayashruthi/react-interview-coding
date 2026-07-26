
import React from 'react';
import './TodoApp.css';

export default function App() {
    const [task, setTask] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [dueDate, setDueDate] = React.useState('');
    const [list, setList] = React.useState([]);
  
    const handleAdd = () => {
      if (!task.trim() || !desc.trim() || !dueDate.trim()) {
        return;
      }
      const listItem = {
        id: Date.now(),
        task,
        desc,
        dueDate
      };
      setList((prev) => [...prev, listItem]);
      setTask('');
      setDesc('');
      setDueDate('');
    };
  
    const handleDelete = (id) => {
      setList(prev => prev.filter(item => item.id !== id));
    }
  
    return (
      <div className='container'>
        <h3>TODO</h3>
        <input
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
       &nbsp;
       &nbsp;
       &nbsp;
        <input
          placeholder="Task Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
       &nbsp;
       &nbsp;
       &nbsp;
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
       &nbsp;
       &nbsp;
       &nbsp;
        <button onClick={handleAdd}>Add</button>
       &nbsp;
       &nbsp;
       &nbsp;
        <ul>
          {list.map((item) => (
              <li key={item.id}>
                {item.task} - {item.desc} - {item.dueDate} &nbsp; <button onClick={()=> handleDelete(item.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }