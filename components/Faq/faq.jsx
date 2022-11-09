import styles from './faq.css'
import arrowImg from './imgs/arrow.png'

function Faq() {
    return(
        <section className="sectionFaq">
            <h2 className='faqTitle'>Perguntas e respostas mais frequentes</h2>
            <div className='faqSupport'>
                <h6 className='faqSubtitle'>Dificuldade em se cadastrar na Motim Academy?</h6>
                <span className='faqHelp'>Entre em contato com nosso time</span>
                <a href="mailto:" className='faqChat'>Abrir chat</a>
            </div>

            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>1</span>
                    <span className='questionText'>O que é a Motim Academy?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>
            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>2</span>
                    <span className='questionText'>Quanto custa?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>
            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>3</span>
                    <span className='questionText'>Preciso ter conhecimentos prévios para participar?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>
            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>4</span>
                    <span className='questionText'>Vocês oferecem certificado?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>
            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>5</span>
                    <span className='questionText'>Qual a diferença pros cursos de nível Master?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>
            <a href="#" className='faqQuestion'>
                <div className='faqQuestion'>
                    <span className='questionNumber'>6</span>
                    <span className='questionText'>Serve para quem está buscando estágio?</span>
                    <img src={arrowImg} alt="Arrow Down" className='arrowImg'/>
                </div>
            </a>

        </section>
    )
}

export default Faq