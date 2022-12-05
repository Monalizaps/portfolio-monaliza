import './About.css';
import Avatar from '../../assets/avatar-2.png'

import { useLanguageContext } from '../../hooks/useLanguageContext';

const About = () => {
  const {language} = useLanguageContext();

  return (
    <section className="section about container" id="about">
      <h2 className="section__title">

        {(language === "Port") && <>Sobre Mim</> }
        {(language === "Eng") && <>About Me</> }

      </h2>
      
      <div className="about__container grid">
        <img src={Avatar} alt="Avatar" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">

            {(language === "Port") && (
              <>
              Me chamo Monaliza Pereira, sou uma Desenvolvedora FullStack e estudante de Análise e Desenvolvimento de Sistemas na Uniasselvi - RJ.
              Sou apaixonada por Front-End e amo desenvolver. Tenho habilidade com CSS3, JavaScript e React. Também tenho familiaridade com Back-End no NodeJs e Linguagem Java. 
              <br></br><br></br>Estudo diariamente.
              Criativa e ativa em tudo que faço.
              Durante a minha trajetória, sempre procuro alcançar meus objetivos e ultrapassar minhas expectativas. Nas horas livres gosto de me exercitar e ver filmes. O cinema também é uma das minhas grandes paixões.</>
            )}
            {(language === "Eng") && (
              <>
              My name is Monaliza Pereira, I'm a FullStack Developer and a student of Systems Analysis and Development at Uniasselvi - RJ.
              I'm passionate about Front-End and I love to develop. I have skills with CSS3, JavaScript and React. I am also familiar with Back-End in NodeJs and Java Language. 
              <br></br><br></br>I study daily.
              Creative and active in everything I do.
              During my trajectory, I always try to achieve my goals and exceed my expectations. In my free time I like to exercise and watch movies. Cinema is also one of my passions.
              </>
            )}

            </p>

            <a href={(language === "Port") ? "./curriculo-monaliza.pdf" : "./resume-monaliza.pdf"} download="monaliza_pereira_cv" className='btn'>
              {(language === "Port") && <>Baixar currículo</> }
              {(language === "Eng") && <>Download CV</> }
            </a>
  
          </div>
        
          <div className="about__skills">
            <ul className='skills__list'>
            <li className="skills__item">HTML5</li>
              <li className="skills__item">Javascript</li>
              <li className="skills__item">CSS3</li>
              <li className="skills__item">ReactJs</li>
              <li className="skills__item">Sass</li>
              <li className="skills__item">Git</li>
              <li className="skills__item">Java Web</li>
              <li className="skills__item">Java</li>
              <li className="skills__item">NodeJs</li>
              <li className="skills__item">MySql</li>
              <li className="skills__item">MongoDB</li>
              <li className="skills__item">
              {(language === "Port") && <>Metodologias Ágeis</> }
              {(language === "Eng") && <>Agile Methodologies</> }</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About