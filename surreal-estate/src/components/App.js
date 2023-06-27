import "../styles/app.css";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add" element={<AddProperties />} />
      </Routes>
    </div>
  );
}

export default App;
