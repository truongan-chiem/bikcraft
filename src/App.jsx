import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  useEffect(() => {
    document.title = "Bikcraft"
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
