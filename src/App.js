import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import LandingPage from "./components/landingPage/landingPage";
import AboutPage from "./components/aboutPage/aboutPage";
import ContactPage from "./components/contactPage/contactPage";
import ContactForm from "./components/contactPage/contactForm/contactForm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/contactForm">
            <ContactForm />
          </Route>
          <Route component={LandingPage} />
            
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
