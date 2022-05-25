import React, { useState } from "react";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  const [currentCategory, setCurrentCategory] = useState('About');

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
            <Portfolio currentCategory={currentCategory}></Portfolio>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
// App.js = is responsible for how the React components currently render