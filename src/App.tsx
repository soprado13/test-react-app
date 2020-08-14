import React from 'react';
import {Header, Home, Footer, Sidebar} from './components/'
import './index.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main">
          <Sidebar />
          <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
