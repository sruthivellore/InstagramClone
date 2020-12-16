import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
    </Router>
      
    </div>
      
  );
}

export default App;
