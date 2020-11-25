import { DataProvider } from "./DataProvider"
import Courses from './components/Courses'
import Home from "./components/Home";
import CourseDetail from "./components/pages/CourseDetail";
import NewsDetail from "./components/pages/NewsDetail";
import EventDetail from "./components/pages/EventDetail";
import News from "./components/News";
import Jobs from "./components/Jobs";
import Register from "./components/Register";
import Contact from "./components/Contact";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";


const App = () => {
  return (
    <DataProvider>
      <div className="container-fluid">
        <Router>
          <Header/>
          <Switch>
            <Route path="/opleidingen">
              <Courses />
            </Route>
            <Route path="/opleiding/:id">
              <CourseDetail />
            </Route>
            <Route path="/nieuws">
              <News />
            </Route>
            <Route path="/news/:id">
              <NewsDetail />
            </Route>
            <Route path="/event/:id">
              <EventDetail />
            </Route>
            <Route path="/inschrijven">
              <Register />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/over-ons">
              <About />
            </Route>
            <Route path="/vacature">
              <Jobs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*" component={Notfound}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </DataProvider>
  );
}

function Notfound(){
  return (
    <h1>Not Found</h1>
  )
}

export default App;
