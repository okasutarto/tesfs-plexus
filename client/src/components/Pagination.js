import { Pagination } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

const App = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={50} />;
};

export default App;