import './Resume.css';
import { ResumeData } from './ResumeData';
import { ResumeDataEng } from './ResumeDataEng';
import ResumeCard from './ResumeCard';

import { useLanguageContext } from '../../hooks/useLanguageContext';

const Resume = () => {
  const {language} = useLanguageContext();

  if(language === "Port"){
    var experience = ResumeData;
  } else if(language === "Eng") {
    var experience = ResumeDataEng;
  }

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">
        {(language === "Port") && <>Experiência</> }
        {(language === "Eng") && <>Experience</> }
      </h2>

      <div className="resume__container grid">

        <div className="timeline grid">
          {experience.map((data, id) => {
            if(data.category === 'education'){
              return (
                <ResumeCard key={id} icon={data.icon} title={data.title} year={data.year} desc={data.desc} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {experience.map((data, index) => {
            if(data.category === 'experience'){
              return (
                <ResumeCard key={index} icon={data.icon} title={data.title} year={data.year} desc={data.desc}  />
              )
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Resume