import React, { useState, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    background-color: black;
    color: white;
    border-radius: 10px;
    align: center;
  }
  table, tr, th, td {
    border: 1px solid black;
  }
`;

const counter = (props) => {
  const [state, setState] = useState(0);
  const increament = () => {
    setState(state + 1);
  };
  const personDetails = () => {
    const personArrays = props?.persons.map((item) => {
      return (
        <tr>
          <td>{item?.name}</td>
          <td>{item?.age}</td>
          <td>{item?.qualification}</td>
        </tr>
      );
    });
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Qualification</th>
        </tr>
        {personArrays}
      </table>
    );
  };

  return (
    <Wrapper>
      <p>Increamenting the state values {state}</p>
      <button onClick={() => increament()}>Count</button>
      {personDetails()}
      {/* <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfileTimeline />
        </Suspense> */}
    </Wrapper>
  );
};

export default counter;
