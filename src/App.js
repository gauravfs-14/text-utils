import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#535C66";
      document.body.style.color = "#fff";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact>
              <TextForm mode={mode} />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
