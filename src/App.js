import React from 'react';
import { Login } from './components/Login';
import { Container, Row } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <div className="bg-primary mb-5" style={{height:'10px'}}></div>
      <Container>
        <Row>
          <Login md={{size: 4, offset: 8}} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
