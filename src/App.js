import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./home/Contact";
import Media from "./home/Media";
import Home from "./home/Home";
import Projects from "./home/Projects";
import Resume from "./home/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
