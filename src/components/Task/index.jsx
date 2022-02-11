import react from "react";
import "../Task/styles.scss"


export default function Task() {
  return(
    <div>
      <form>
      <input 
        className="task_input_field"
        type="text"
        placeholder="Enter New Task"
      />
      </form>
        
    </div>
  )
}