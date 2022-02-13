import react from "react";
import "../Task/styles.scss"


export default function Task() {

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