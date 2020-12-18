import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword';
import TestImage from './components/test/testImage';
import FeedsMain from './components/Feeds/FeedsMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FeedsMain />
      <Router>
        <Switch>
        <Route path="/resetpass">
            <ForgotPassword />
          </Route>
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
