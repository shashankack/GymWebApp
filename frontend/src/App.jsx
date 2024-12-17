import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Trial from "./components/Trial/Trial";
import NewPage from "./components/NewPage/NewPage";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Trial />
      <NewPage />
    </>
  );
}

export default App;
