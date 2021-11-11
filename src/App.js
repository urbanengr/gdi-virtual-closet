import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import "./login/Login.css";
import Login from "./login/Login.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/' element={<Login/>} />
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
