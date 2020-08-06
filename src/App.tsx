import React from 'react';
import './App.scss';

import Card from './components/card/Card';
import Chart from './components/chart/Chart';

function App() {
  return (
    <div className="app">
      <header className="app-header">

        <section className="overview">
          <h4 className="overview-title">Overview</h4>
          <section className="overview-blocks">
            <Card
              title="Hello World"
            >
              <p>Hi there!</p>
            </Card>
            <Chart />

          </section>
        </section>



        <section className="financials">
          <h4 className="financials-title">Financials</h4>

          <Card
            title="Hello World"
          >
            <p>Hi there!</p>
          </Card>
        </section>

        <section className="ratios">
          <h4 className="ratios-title">Ratios</h4>

          <Card
            title="Hello World"
          >
            <p>Hi there!</p>
          </Card>
        </section>
      </header>
    </div>
  );
}

export default App;
