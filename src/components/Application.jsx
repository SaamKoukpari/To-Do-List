import { useState } from 'react';
import './Application.scss';
import Task from "./Task/index.jsx"
import DayList from "./DayList";


export default function Application() {

  //micro service frontend where I'm using an [object] to initalize state 
  
  const { state } = useState([
    {
      id: "",
      title: "",
      category: "",
    }
  ]);
  

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
        <Task/>
      </section>
    </main>
  );
};
