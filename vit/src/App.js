import Intro from "./pages/Intro";
import PickStamp from "./pages/PickStamp";
import DetailPage from "./pages/DetailPage";
import WalletPage from "./pages/WalletPage";
import OwnStampPage from "./pages/OwnStampPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/pickStamp" element={<PickStamp />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/walletPage" element={<WalletPage />} />
        <Route path="/ownStampPage" element={<OwnStampPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
