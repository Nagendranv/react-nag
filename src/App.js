import React from 'react';
import './style.css';
import Counter from './counter';

export default function App(props) {
  return (
    <div>
      <h1>Hello Nagendran!!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Counter {...props} />
    </div>
  );
}
