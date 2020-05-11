import React, { useState } from "react";
import Select from "./Components/Select/Select";

function App() {
  const elements = [
    { title: "title1", value: "value1" },
    { title: "title2", value: "value2" },
    { title: "title3", value: "value3" },
    { title: "title4", value: "value4" },
    { title: "title5", value: "value5" },
    { title: "title6", value: "value6" },
    { title: "title7", value: "value7" },
  ];

  const [selectValue, setSelectValue] = useState({});

  return (
    <div className="App">
      <Select items={elements} getValue={setSelectValue} />
      <h2>
        <em>Custom select value is</em> {selectValue.value}
      </h2>
      <h2>
        <em>Custom select title is</em> {selectValue.title}
      </h2>
    </div>
  );
}

export default App;
