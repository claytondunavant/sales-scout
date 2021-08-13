import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ThankYou from './pages/ThankYou';
import './App.css';

function App() {
  
  return (
    <HashRouter>
        
        <NavLink to="/">
          <h1>Sales Scout</h1>
        </NavLink>
    
        <div className="contentBox">
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/about" component={About}/>
            <Route path="/thank-you" component={ThankYou}/>
          </div>
        </div>

    </HashRouter>
  );
}

export default App;

