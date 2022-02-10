import './Application.scss';


export default function Application() {
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
      
      </section>
    </main>
  );
};
