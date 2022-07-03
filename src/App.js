import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import LogoPortalKarir from "./component/LogoPortalKarir/index.js";
import HeaderSection from "./section/header/index.js";
import BodySection from "./section/body/index.js";
import FooterSection from "./section/footer/index.js";
import LandingPage from "./Pages/LandingPage/index.js";
import ProfilePage from "./Pages/ProfilePage/index.js";
import KursusPage from "./Pages/KursusPage/index.js";

function App() {
  return (
    <div className="flex flex-col justify-center bg-grey-50">
      <Link
        to="/"
        className="relative sticky top-4 ml-4 w-min h-8 z-50 border-0 -mt-8 md:hidden border-0"
      >
        <LogoPortalKarir />
      </Link>
      <HeaderSection />
      <Routes>
        <Route
          path="/"
          element={<BodySection pageComponent={<LandingPage />} />}
        />
        <Route
          path="/kursus"
          element={<BodySection pageComponent={<KursusPage />} />}
        />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
