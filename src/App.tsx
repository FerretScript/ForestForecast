import Landing from "./Pages/Landing";
import "./stlyes/index.css";
import { Route } from "wouter";

function App() {
  return (
    <>
      <Route path="/" component={Landing} />
    </>
  );
}

export default App;
