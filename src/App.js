import './App.css';

// components
import About from './components/About/About';
import Contact from './components/Contact/Contact'; 
import Credits from './components/Credits/Credits';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';

// hooks
import { useLanguageContext } from './hooks/useLanguageContext';

function App() {
  const {language, setLanguage} = useLanguageContext();

  return (
    <>
      {language === "" && (
        <div className="select-language__container">
          <button className='select-language__option btn' onClick={() => setLanguage("Port")}>Português</button>
          <button className='select-language__option btn' onClick={() => setLanguage("Eng")}>English</button>
        </div>
      )}

      {language !== "" && (
        <>
          <Sidebar />
          <main className="main">
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
