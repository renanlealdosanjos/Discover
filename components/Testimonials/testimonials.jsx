import styles from './testimonials.css'
import user1Img from './imgs/user1.webp'
import user2Img from './imgs/user2.webp'
import user3Img from './imgs/user3.webp'

function Testimonials() {
    return(
        <div className="sectionTestimonials">
            <h2 className='testimonialsTitle'>O que dizem devs que decolaram com o Discover</h2>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“O conteúdo do Discover é além do básico e totalmente gratuito. Quando alguém me pergunta o que aprender ou onde, a resposta é automática: https://app.rocketseat.com.br/discover”</span>
                <img src={user1Img} alt="" className='imgBox'/>
                <div className='userContacts'>
                    <span className='nameBox'>Luis Fernando</span>
                    <span>@luisfernandomgrs</span>
                </div>
            </div>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“A plataforma é incrível, a didática é excelente! Sem palavras para descrever o trabalho de vcs! Thank u @rocketseat_oficial vocês são fenomenais e tem me ajudado muito a crescer como dev!”</span>
                <img src={user2Img} alt="" className='imgBox' />
                <div className='userContacts'>
                    <span className='nameBox'>Juan Pablo</span>
                    <span>@_ojuanpablo</span>
                </div>
            </div>
            <div className='boxTestimonial'>
                <span className='testimonialBox'>“O Discover em união com a maratona Discover são simplesmente incríveis, muito conteúdo, além de te guiar a como ter disciplina nos estudos, te mostrando que só você pode mudar e evoluir como dev.”</span>
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