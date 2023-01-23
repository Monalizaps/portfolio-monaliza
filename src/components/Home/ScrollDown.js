import { useLanguageContext } from '../../hooks/useLanguageContext';

const ScrollDown = () => {
  const {language} = useLanguageContext();

  return (
    <div className="scroll__down">
        <a href="#about" className="mouse__wrapper">

            <span className="home__scroll-name">
              {(language === "Port") && <>Role para baixo</> }
              {(language === "Eng") && <>scroll down</> }
            </span>

            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown