import Intro from "./pages/Intro";
import PickStamp from "./pages/PickStamp";
import DetailPage from "./pages/DetailPage";
import WalletPage from "./pages/WalletPage";
import OwnStampPage from "./pages/OwnStampPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPlace from "./pages/AboutPlace";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/pickStamp" element={<PickStamp />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/walletPage" element={<WalletPage />} />
        <Route path="/ownStampPage" element={<OwnStampPage />} />
        <Route path="/aboutplace/:id" element={<AboutPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
