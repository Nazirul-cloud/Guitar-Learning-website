import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Crouses from './Components/Crouses/Crouses';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Crouse from './Components/Crouse/Crouse';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';




function App() {
  return (
    <div className="">
     
     <Router>
        <Header></Header>

       <Switch>
            <Route exact path="/crouses">
              <Crouses></Crouses>
            </Route>
            <Route path="/course">
               <CourseDetails></CourseDetails>
            </Route>
            <Route path="/about">
               <About></About>
            </Route>
            <Route path="/contract">
               <Contact></Contact>
            </Route>
            <Route path="/*">
               <PageNotFound></PageNotFound>
            </Route>

       </Switch>
       <Footer></Footer>
     </Router>
     
     
    </div>
  );
}

export default App;
