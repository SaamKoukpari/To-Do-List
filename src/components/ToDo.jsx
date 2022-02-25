import react from "react";
import "./ToDo.scss"


export default function ToDo(props) {
  
  
  return (
    <li className="todo">
      <div className="checkbox">
        <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden"></span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden"></span>
        </button>
      </div>
    </li>
  )
}