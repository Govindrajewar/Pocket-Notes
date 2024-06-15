import { useEffect, useState } from "react";
import "./App.css";
import Laptop from "./components/Laptop/Laptop.js";
import Phone from "./components/Phone/Phone.js";
import Notes from "./components/Phone/Notes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider} from "./components/useContext.js";
import UseContext from "./components/useContext.js";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <Laptop />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Phone />} />
              <Route path="/notes" element={<Notes />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </Provider>
  );
}

export default App;
