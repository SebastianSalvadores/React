import "./App.css";

import Main from "./components/public/Main";
import { Navbar } from './components/public/Navbar';
import { Footer } from './components/public/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
