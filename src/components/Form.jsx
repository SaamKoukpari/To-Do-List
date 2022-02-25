import { useState } from "react";
import "./Form.scss";


export default function Form(props) {

  const { task, setTask } = useState([
    {
      id: "",
      title: "",
      category: "",
    }
  ]);

  const handleSubmit = (e) => {
    console.log(e.target.value)
    
  }


  return(
    <div>
      <form>
      <input 
        className="task_input_field"
        type="text"
        placeholder="Enter New Task"
        onChange={(e) => handleSubmit(e)}
      />
      </form>
        
    </div>
  )
}