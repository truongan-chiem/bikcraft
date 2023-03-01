import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    document.title = "Bikcraft"
    AOS.init();

  }, [])
  
  return (
    <div>
        <Header />
        <Home />
        <Footer />
    </div>  
  );
}

export default App;
