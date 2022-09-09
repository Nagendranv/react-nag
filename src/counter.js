import React, { useState, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const counter = (props) => {
  const [state, setState] = useState(0);
  const increament = () => {
    setState(state + 1);
  };
  const personDetails = () => {
    const personArrays = props?.persons.map((item) => {
      return (
        <Row>
          <Col md={3} xs={3} style={{ float: 'left', paddingRight: '20px' }}>
            {item?.name}
          </Col>
          <Col md={3} xs={3} style={{ float: 'left', paddingRight: '20px' }}>
            {item?.age}
          </Col>
          <Col md={3} xs={3} style={{ float: 'left', paddingRight: '20px' }}>
            {item?.qualification}
          </Col>
        </Row>
      );
    });
    return <Container fluid="xs">{personArrays}</Container>;
  };

  return (
    <Wrapper>
      <p>Increamenting the state values {state}</p>
      <button onClick={() => increament()}>Count</button>
      <br />
      {personDetails()}
      {/* <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfileTimeline />
        </Suspense> */}
    </Wrapper>
  );
};

export default counter;
