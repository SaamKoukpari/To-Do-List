import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  const dayListItem = props.days.map((day) => {

    return (
      
      <DayListItem 
        key={day.id}
        name={day.name}
      />

    );
  });
    
    return <ul>{dayListItem}</ul>

};