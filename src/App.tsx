import {
  Header,
  AboutUs,
  Menu,
  Chef,
  Video,
  FindUs,
  Footer,
} from "./landing_page";
import { Navbar } from "./landing_page";
import { LanguageProvider } from "./language_context";
import "./App.css";

const App = () => (
  <div>
    <LanguageProvider>
      <Navbar />
      <Header />
      <Video />
      <Menu />
      <Chef />
      <AboutUs />
      <FindUs />
      <Footer />
    </LanguageProvider>
  </div>
);

export default App;
