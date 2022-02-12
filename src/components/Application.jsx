import { useState } from 'react';
import './Application.scss';
import Task from "./Task/index.jsx"
import DayList from "./DayList";


export default function Application() {
 
  // const data = {
  //   days : [
  //     {
  //       id: "1",
  //       day: "Monday"
  //     },
  //     {
  //       id: "2",
  //       day: "Tuesday"
  //     },
  //     {
  //       id: "3",
  //       day: "Wednesday"
  //     },
  //     {
  //       id: "4",
  //       day: "Thursday"
  //     },
  //     {
  //       id: "5",
  //       day: "Friday"
  //     }
  //   ]
  // }

  const { state } = useState()
  

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
