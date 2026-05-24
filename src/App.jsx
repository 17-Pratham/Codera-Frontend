import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Playground from "./pages/Playground";
import PlaygroundHome from "./pages/PlaygroundHome";
import LanguageDetails from "./pages/LanguageDetails";
import Challenges from "./pages/Challenges";
import ChallengeDetails from "./pages/ChallengeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/playground" element={<PlaygroundHome />} />

      <Route path="/playground/:language" element={<Playground />} />
      <Route path="/learn/:language" element={<LanguageDetails />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/challenge/:id" element={<ChallengeDetails />} />
    </Routes>
  );
}

export default App;
