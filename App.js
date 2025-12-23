import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alldetails from "./CatFact/Alldetails.jsx";
import FactList from "./CatFact/factList.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Alldetails />} />
        <Route path="/list" element={<FactList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
