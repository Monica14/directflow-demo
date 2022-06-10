import React, { useContext } from "react";
import { EventContext } from "direflow-component";
import PropTypes from "prop-types";
import "./App.css";

const App = props => {
  console.log('props:', props.sampleList);
  const dispatch = useContext(EventContext);

  const handleRemoveItem = sample => {
    const event = new CustomEvent("remove-item", { detail: sample });
    dispatch(event);
  };

  const renderSampleList = props.sampleList.map(sample => (
    <div style={{
      "display": "flex",
      "flex-direction": "column"
    }}>
      <div style={{
        "display": "flex",
        "flex-direction": "row",
        "padding-top": "15px"
      }}>
        <div
          key={sample}
        >
          → {sample}
        </div>
        <div>
          <button onClick={() => handleRemoveItem(sample)} style={{"margin-left": "10px"}}>Delete Task</button>
        </div>
      </div>

    </div>

  ));

  return (
    <div>
      <div>{props.componentTitle}</div>
      <div>{renderSampleList}</div>
    </div>
  );
};

App.defaultProps = {
  componentTitle: "List of Task",
  sampleList: []
};

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array
};

export default App;
