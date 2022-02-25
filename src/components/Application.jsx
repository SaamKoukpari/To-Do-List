// import { useState } from 'react';
import './Application.scss';
import Form from "./Form.jsx";
import DayList from "./DayList";
import ToDo from './ToDo';


export default function Application() {

  //micro service frontend where I'm using an [object] to initalize state 
  
  
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
        <ToDo/>
      </section>
    </main>
  );
};
