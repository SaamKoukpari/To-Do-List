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
        <h2 className="text--regular">Monday</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Tuesday</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Wednesday</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Thursday</h2>
      </li>
      <li 
        className="day__item"
        // onClick={props.setDay}
        // selected={props.selected}
        >
        <h2 className="text--regular">Friday</h2>
      </li>
    </ul>
    
  );
};