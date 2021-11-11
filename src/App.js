import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Container>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="outline-primary">Tops</Button> 
                <Button variant="outline-primary">Dresses</Button> 
                <Button variant="outline-primary">Pants &amp; Leggings</Button> 
                <Button variant="outline-primary">Skirts</Button>
                <Button variant="outline-primary">Shorts</Button> 
                <Button variant="outline-primary">Activewear</Button> 
              </div>
            </Col>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="outline-primary">Bras &amp; Panties</Button> 
                <Button variant="outline-primary">Sweaters</Button> 
                <Button variant="outline-primary">Jackets & Coats</Button> 
                <Button variant="outline-primary">Jewelry</Button>
                <Button variant="outline-primary">Accessories</Button>
              </div>
            </Col>
          </Row>
        </Container>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
