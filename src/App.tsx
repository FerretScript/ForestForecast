import Landing from "./Pages/Landing";
import Simulator from "./Pages/Simulator";
import "./stlyes/index.css";
import { Route } from "wouter";

function App() {
  return (
    <>
      <Route path="/" component={Landing} />
      <Route path="/simulator" component={Simulator} />
    </>
  );
}

export default App;
