import { useState } from 'react';
import { nanoid } from "nanoid";
import './Application.scss';
import Form from "./Form.jsx";
import DayList from "./DayList";
import ToDo from './ToDo';


export default function Application(props) {

  //micro service frontend where I'm using an [object] to initalize state 
  const [ tasks, setTasks ] = useState(props.tasks);

  function toggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <ToDo 
      id={task.id} 
      title={task.title} 
      completed={task.completed} 
      key={task.id}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask} 
    />
  ));

  //function that will anticipate data from <Form/> as input, then pass it back to <Form/> as a prop. i.e. callback prop function
  function addTask(title) {
    const newTask = { id: "todo-" + nanoid(), title: title, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <main className="layout">
      <section className="sidebar">
        <div className="sidebar__header">
          <img
              className="sidebar--logo"
              src="images/logo.png"
              alt="To Do List"
            />Quick-To-Do
        </div>
        <hr className="sidebar__separator sidebar--centered"/>
        <nav className="sidebar__menu">
          <DayList />
        </nav>
      </section>
      <section className="tasks">
        <Form addTask={addTask} />
        <h2 className="task-count">{headingText}</h2>
        {taskList}
      </section>
    </main>
  );
};
