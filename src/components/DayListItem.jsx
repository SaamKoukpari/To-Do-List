import React from "react";
import "./DayListItem.scss";


export default function DayListItem(props) {


  return (
    <ul>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Chores</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Exercise</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Appointments</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Homework</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Groceries</h2>
      </li>
    </ul>
    
  );
};