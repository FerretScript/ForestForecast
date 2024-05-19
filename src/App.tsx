import Landing from "./Pages/Landing";
import AboutUs from "./Pages/AboutUs";
import "./stlyes/index.css";
import { Route } from "wouter";

function App() {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/about" component={AboutUs} />
    </>
  );
}

export default App;
