import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import LeadForm from './LeadForm/LeadForm';
import CaseForm from './CaseForm/CaseForm';
import logo from './mercedes.svg';
import logo_text from './mercedes_text.svg';

function App() {
  return (
    <Container className="App">
      <Row className="p-2">
        <Col md={{ span: 8, offset: 4 }}>
          <h2>
            <img src={logo} className="mercedes-logo px-4" alt="logo" />
            <img src={logo_text} className="mercedes-logo w-25" alt="logo_text" />
          </h2>
        </Col>
      </Row>
      <Row>
      <Tabs defaultActiveKey="lead" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="lead" title="Lead Form">
          <h3>Lead Form</h3>
          <LeadForm />
        </Tab>
        <Tab eventKey="case" title="Case Form">
          <h3>Case Form</h3>
          <CaseForm />
        </Tab>
      </Tabs>
        
      </Row>
    </Container>
  );
}

export default App;
