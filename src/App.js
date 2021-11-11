import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
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
        <Routes>
          <Route path='/' element={<Login/>} />
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
