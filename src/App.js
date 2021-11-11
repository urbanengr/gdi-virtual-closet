import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import ClosetCategories from './containers/closet-category-buttons/category-buttons.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClosetCategories/>
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
      </header>
        <ClosetCategories/>
    </div>
  );
}

export default App;
