import React from "react";
import "./App.scss";

import CompanySummary from "./components/pages/CompanySummary";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <CompanySummary />
      </header>
    </div>
  );
}

export default App;
