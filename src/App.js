import "./App.css";
import HeaderSection from "./section/header/index.js";
import BodySection from "./section/body/index.js";
import FooterSection from "./section/footer/index.js";

function App() {
  return (
    <div className="flex flex-col justify-center bg-grey-50">
      <HeaderSection />
      <BodySection />
      <FooterSection />
    </div>
  );
}

export default App;
