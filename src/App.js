import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import LandingPage from "./components/landingPage/landingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route component={LandingPage} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
