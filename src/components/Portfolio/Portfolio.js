import { useState } from 'react';
import './Portfolio.css';
import Projects from './Projects'
import ProjectsEng from './ProjectsEng.js';
import { useLanguageContext } from '../../hooks/useLanguageContext';

const Portfolio = () => {
  const {language} = useLanguageContext();

  if(language === "Port"){
    var projectList = Projects;
  } else if (language === "Eng"){
    var projectList = ProjectsEng;
  }

  const [items, setItems] = useState(projectList);

  const filterItem = (category) => {
    const updatedItems = projectList.filter((item) => {
      return item.category === category;
    });
    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">
        {(language === "Port") && <>Projetos</> }
        {(language === "Eng") && <>Projects</> }
      </h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(projectList)}>
          {(language === "Port") && <>Todos</> }
          {(language === "Eng") && <>All</> }
        </span>
        <span className="work__item" onClick={() => filterItem("Front-End")}>Front-End</span>
        <span className="work__item" onClick={() => filterItem("Back-End")}>Back-End</span>
      </div>

      <div className="work__container grid">
        
        {items.map((item) => {
          const { id, img, title, desc, demo, code, category } = item;
          return (
            <div key={id}>
              <div className="work__card" >
              
                <div className="work__thumbnail">
                  <img src={img} className="work__image" />
                  <div className="work__mask"></div>
                </div>

                <span className="work__category">{category}</span>
                <h3 className='work__title'>{title}</h3>
                
                <div className="work__buttons">
                  <a href={demo} target='_blank' className='work__button'>
                    <i className="icon-link work__button-icon"></i> Demo
                  </a>

                  <a href={code} target='_blank' className='work__button'>
                    <i className="icon-link work__button-icon"></i>
                    {(language === "Port") && <> Código</> }
                    {(language === "Eng") && <> Code</> }
                  </a>
                </div>

              </div>

              <p className='work__desc'>{desc}</p>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio