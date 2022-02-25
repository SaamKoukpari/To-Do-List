import { useState } from "react";
import "./Form.scss";


export default function Form(props) {

  const [ title, setTitle ] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  } 

  const handleSubmit = (e) => {
    if (e.target.value === " ") {
      alert("cannot leave blank!")
    }
    e.preventDefault();
    props.addTask(title);
    setTitle("");
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="task_input_field"
          type="text"
          autoComplete="off"
          placeholder="Enter New Task"
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
        Add
        </button>
      </form>      
    </div>
  )
}