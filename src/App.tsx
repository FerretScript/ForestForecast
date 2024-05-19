import AboutUs from "./Pages/AboutUs";
import Landing from "./Pages/Landing";
import Simulator from "./Pages/Simulator";
import "./stlyes/index.css";
import { Route } from "wouter";

function App() {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/simulator" component={Simulator} />
      <Route path="/about-us" component={AboutUs} />
    </>
  );
}

export default App;
