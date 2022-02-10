import { useState } from 'react';
import './Application.scss';
import DayList from "./DayList";


export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
  });

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
    </main>
  );
};
