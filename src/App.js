import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Show } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
