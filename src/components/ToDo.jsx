import react from "react";
import "./ToDo.scss"


export default function ToDo(props) {
  
  
  return (
    <li className="todo">
      <div className="checkbox">
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={() => props.toggleComplete(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.title}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden"></span>
        </button>
        <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden"></span>
        </button>
      </div>
    </li>
  )
}