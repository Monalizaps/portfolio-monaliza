import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { useLanguageContext } from '../../hooks/useLanguageContext';

const Contact = () => {
  const {language} = useLanguageContext();

  const [state, handleSubmit] = useForm("mvoyepoy");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(state.succeeded === true){
      setShowModal(true);
    }
  }, [state.succeeded]);

  return (
    <section className="contact section container" id="contact">
      <h2 className="section__title">
        {(language === "Port") && <>Fale Comigo</> }
        {(language === "Eng") && <>Contact me</> }
      </h2>

      <div className="contact__container grid">
        <div className="contact__info">

          <h3 className="contact__title">
            {(language === "Port") && <>Vamos conversar!</> }
            {(language === "Eng") && <>Let's talk!</> }
          </h3>

          <p className='contact__details'>
            {(language === "Port") && <>Não gosta de formulários?</> }
            {(language === "Eng") && <>Don't like forms?</> }
          </p>

          <p className='contact__details'>
            {(language === "Port") && <>Me mande um e-mail:</> }
            {(language === "Eng") && <>Send me an email:</> }
          </p>

          <span className='contact__email'>monalizapsilva@live.com</span>

          {showModal && (
            <div className="contact__modal">
              <button onClick={() => setShowModal(false)} className="icon-close close-modal"></button>

              <h3 className="contact__modal-title">
                {(language === "Port") && <>Mensagem enviada!</> }
                {(language === "Eng") && <>Message sent!</> }
              </h3>

              <p className='contact__modal-message'>
                {(language === "Port") && <>Obrigada por entrar em contato, responderei o mais breve possível.</> }
                {(language === "Eng") && <>Thank you for reaching out, I'll reply as soon as possible.</> }
              </p>

            </div>
          )}
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" id='name' name='name' className="contact__form-input" placeholder={(language === "Port") ? "Digite o seu nome" : "Insert your name" } />
            </div>

            <div className="contact__form-div">
              <input type="email" id='email' name='email' className="contact__form-input" placeholder={(language === "Port") ? "Digite o seu e-mail" : "Insert your email" } />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" id='subject' name='subject' className="contact__form-input" placeholder={(language === "Port") ? "Digite o assunto da mensagem" : "Insert the subject" } />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea id='message' name='message' className='contact__form-input' placeholder={(language === "Port") ? "Digite a sua mensagem" : "Write your message" }></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className='btn'>
            {(language === "Port") && <>Enviar</> }
            {(language === "Eng") && <>Send</> }
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact