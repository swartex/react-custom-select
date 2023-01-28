import React, { useState } from 'react';
import { Input, Select } from './Components/index';

function App() {
  const elements = [
    { title: 'title1', value: 'value1' },
    { title: 'title2', value: 'value2' },
    { title: 'title3', value: 'value3' },
    { title: 'title4', value: 'value4' },
    { title: 'title5', value: 'value5' },
    { title: 'title6', value: 'value6' },
    { title: 'title7', value: 'value7' },
  ];

  const onSelect = (item) => {
    console.log(item);
  };

  return (
    <div className="App">
      <Select
        label={'Label of select'}
        items={elements}
        onSelected={onSelect}
      />
      <hr />
      <Input placeholder="Placeholder" icon="warning" />
    </div>
  );
}

export default App;
