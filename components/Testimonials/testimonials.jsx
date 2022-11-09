import styles from './testimonials.css'
import user1Img from './imgs/user1.webp'
import user2Img from './imgs/user2.webp'
import user3Img from './imgs/user3.webp'

function Testimonials() {
    return(
        <div className="sectionTestimonials">
            <h2 className='testimonialsTitle'>O que dizem sobre a Motim Academy</h2>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“O conteúdo do Motim Academy é além do básico e totalmente gratuito. Quando alguém me pergunta o que aprender ou onde, a resposta é automática: https://motim.me/plataforma”</span>
                <img src={user1Img} alt="" className='imgBox'/>
                <div className='userContacts'>
                    <span className='nameBox'>Luis Fernando</span>
                    <span>@luisfernandomgrs</span>
                </div>
            </div>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“A plataforma é incrível, a didática é excelente! Sem palavras para descrever o trabalho de vcs! Thank u @motimeducacao vocês são fenomenais e tem me ajudado muito a crescer como profissional!”</span>
                <img src={user2Img} alt="" className='imgBox' />
                <div className='userContacts'>
                    <span className='nameBox'>Juan Pablo</span>
                    <span>@_ojuanpablo</span>
                </div>
            </div>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“O Motim Academy em união com a Imersão em Power BI são simplesmente incríveis, muito conteúdo, além de te guiar a como ter disciplina nos estudos, te mostrando que só você pode mudar e evoluir profissionalmente.”</span>
                <img src={user3Img} alt="" className='imgBox'/>   
                <div className='userContacts'>
                    <span className='nameBox'>Ariadne Liranço</span>
                    <span>@aricandidolira</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials