import { Routes, Route } from "react-router-dom";
import { InvestigationProvider } from "./context/InvestigationContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";
import SuspectsPage from "./pages/SuspectsPage";
import EvidencePage from "./pages/EvidencePage";
import InvestigationPage from "./pages/InvestigationPage";

export default function App() {
  return (
    <InvestigationProvider>
      <div className="app-shell flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-1">
          <div className="mx-auto max-w-[1600px] p-4 lg:p-6">
            <div className="page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case" element={<CasePage />} />
                <Route path="/suspects" element={<SuspectsPage />} />
                <Route path="/evidence" element={<EvidencePage />} />
                <Route path="/investigation" element={<InvestigationPage />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </InvestigationProvider>
  );
}
