import Intro from "./pages/Intro";
import PickStamp from "./pages/PickStamp";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/pickStamp" element={<PickStamp />} />
        <Route path="/detailPage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
