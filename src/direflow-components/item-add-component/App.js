import React, { useContext, useState } from "react";
import { EventContext } from "direflow-component";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    if (!input) {
      return;
    }

    const event = new CustomEvent("add-item", { detail: input });
    dispatch(event);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleClick} style={{"margin-left": "10px"}}>Add Task</button>
    </div>
  );
};

export default App;
