import React from "react";
import "../../style/Laptop/Laptop.css";
import Sidebar from "../Sidebar.js";
import Home from "./Home.js";
import Notes from "./Notes.js";
import UseContext from "../useContext.js";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div className="laptop">
      <Sidebar />
      {selected.length > 0 ? <Notes /> : <Home />}
    </div>
  );
}

export default Laptop;
