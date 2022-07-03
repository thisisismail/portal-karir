import "./App.css";
import LogoPortalKarir from "./component/LogoPortalKarir/index.js";
import HeaderSection from "./section/header/index.js";
import BodySection from "./section/body/index.js";
import FooterSection from "./section/footer/index.js";
import LandingPage from "./Pages/LandingPage/index.js";
import ProfilePage from "./Pages/ProfilePage/index.js";
import KursusPage from "./Pages/KursusPage/index.js";

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <LandingPage />;
      break;
    case "/kursus":
      component = <KursusPage />;
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col justify-center bg-grey-50">
      <a
        href="/"
        className="relative top-12 ml-4 w-min h-8 z-50 border-0 -mt-8 md:hidden"
      >
        <LogoPortalKarir/>
      </a>
      <HeaderSection />
      <BodySection pageComponent={component} />
      <FooterSection />
    </div>
  );
}

export default App;
