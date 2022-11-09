import styles from './educators.css'
import educator1 from './imgs/educator1.png'
import educator2 from './imgs/educator2.png'

function Educators() {
    return(
        <section className='sectionEducators'>
            <h2 className='titleEducators'>Educators com anos de experiência para te ajudar</h2>
            <span className='textEducators'>Ao entrar no Motim Academy, você terá acesso a trilhas ordenadas e sequencias para avançar na direção certa, te conectando ao universo de tecnologia e te ajudando a preparar seu ambiente para escrever suas primeiras linhas de código. Tudo de forma clara e simples.</span>
            <div className='boxEducator'>
                <div className='educator1Image'></div>
                <h4 className='educatorName'>Lucas Antonioli</h4>
                <h5 className='educatorRole'>Especialista</h5>
                <h6 className='educatorTitle'>+7 anos de experiência</h6>
                <span className='educatorExperience'>Professor há mais de 10 anos, reconhecido pela Microsoft como Microsoft Most Valuable Professional.
                Especialista em Excel, VBA, Power BI, Python e SQL na Motim Educação.</span>
                <span className='educatorExperience'>Apaixonada por compartilhar conhecimento e impulsionar pessoas em suas trajetórias profissionais.</span>
            </div>
            <div className='boxEducator'>
                <div className='educator2Image'></div>
                <h4 className='educatorName'>Laura Campos</h4>
                <h5 className='educatorRole'>Mentora</h5>
                <h6 className='educatorTitle'>+4 anos de experiência</h6>
                <span className='educatorExperience'>Apaixonada por ajudar quem está dando os primeiros passos nesse universo. Vem transformando a carreira de milhares de profissionais através dos seus conteúdos e cursos.</span>
                <span className='educatorExperience'>Com uma linguagem fácil de assimilar e simpatia que é marca registrada da educadora, ela vai te guiar pela jornada do Motim Academy e te ajudar a avançar para o próximo nível.</span>
            </div>
        </section>
    )
}

export default Educators