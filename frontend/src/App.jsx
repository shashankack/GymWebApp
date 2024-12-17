import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Trial from "./components/Trial/Trial";
import NewPage from "./components/NewPage/NewPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Trial />
      <NewPage />
      <Footer />
    </>
  );
}

export default App;
