// import { useState } from 'react';
import './Application.scss';
import Form from "./Form.jsx";
import DayList from "./DayList";
import ToDo from './ToDo';


export default function Application(props) {

  //micro service frontend where I'm using an [object] to initalize state 
  
  // console.log("TASKS", props.tasks)

  const taskList = props.tasks.map(task => (
    <ToDo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
    />
  ));
  
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
          <DayList/>
        </nav>
      </section>
      <section className="tasks">
        <Form/>
        {taskList}
      </section>
    </main>
  );
};
