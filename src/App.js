import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import LeadForm from './LeadForm/LeadForm';
import CaseForm from './CaseForm/CaseForm';
import logo from './mercedes.svg';

function App() {
  return (
    <Container className="App">
      <Row className="p-2">
        <Col md={{ span: 8, offset: 4 }}>
          <h2>
            <img src={logo} className="mercedes-logo" alt="logo" />
            Mercedes-Benz <br /> The best or nothing
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <h3>Lead Form</h3>
          <LeadForm />
        </Col>
        <Col xs={12} sm={6}>
          <h3>Case Form</h3>
          <CaseForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
