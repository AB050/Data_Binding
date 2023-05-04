import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Parameter");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Data Binding in React</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <p>Entered name: {name}</p>
    </div>
  );
}

export default App;
