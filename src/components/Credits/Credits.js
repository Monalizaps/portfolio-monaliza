import './Credits.css'
import { useLanguageContext } from '../../hooks/useLanguageContext';

const Credits = () => {
  const {language} = useLanguageContext();

  return (
    <section className="credits container section">
        <h3 className="credits__title">
          {(language === "Port") && <>Créditos</> }
          {(language === "Eng") && <>Credits</> }
        </h3>
        <ul className='credits__list'>
           
            <li className="credits__item">
                {(language === "Port") && <>O plano de fundo da home é um SVG gratuito disponível em </> }
                {(language === "Eng") && <>The background SVG is available for free at </> } 
                <a target="_blank" rel="noreferrer" href="#">B</a>
            </li>
        </ul>
    </section>
  )
}

export default Credits