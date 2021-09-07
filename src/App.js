import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./src/components/navigation";
import { Footer } from "./src/components/footer";
import { Home } from "./src/components/home";
import { About } from "./src/components/about";
import { Buy } from "./src/components/buy";
import { Contact } from "./src/components/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/buy" exact component={() => <Buy />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
