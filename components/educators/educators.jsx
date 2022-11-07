import styles from './educators.css'
import educator1 from './imgs/educator1.webp'
import educator2 from './imgs/educator2.webp'

function Educators() {
    return(
        <section className='sectionEducators'>
            <h2 className='titleEducators'>Educators com anos de experiência para te ajudar</h2>
            <span className='textEducators'>Ao entrar no Discover, você terá acesso a trilhas ordenadas e sequencias para avançar na direção certa, te conectando ao universo de tecnologia e te ajudando a preparar seu ambiente para escrever suas primeiras linhas de código. Tudo de forma clara e simples.</span>
            <div className='boxEducator'>
                <div className='educator1Image'></div>
                <h4 className='educatorName'>Jakeliny Gracielly</h4>
                <h5 className='educatorRole'>Educadora</h5>
                <h6 className='educatorTitle'>Programadora há mais de 10 anos</h6>
                <span className='educatorExperience'>Desenvolvedora web há mais de 10 anos reconhecida pela Microsoft como Microsoft Most Valuable Professional.
                Desenvolvedora NodeJS e React, Developer Relations Engineer na Rocketseat.</span>
                <span className='educatorExperience'>Apaixonada por compartilhar conhecimento e impulsionar pessoas em suas trajetórias profissionais.</span>
            </div>
            <div className='boxEducator'>
                <div className='educator2Image'></div>
                <h4 className='educatorName'>Mayk Brito</h4>
                <h5 className='educatorRole'>Educador</h5>
                <h6 className='educatorTitle'>Programador há mais de 12 anos</h6>
                <span className='educatorExperience'>Apaixonado por ajudar quem está dando os primeiros passos nesse universo. Vem transformando milhares de devs através dos seus conteúdos e cursos.</span>
                <span className='educatorExperience'>Com uma linguagem fácil de assimilar e simpatia que é marca registrada do educador, ele vai te guiar pela jornada do Discover e te ajudar a avançar para o próximo nível.</span>
            </div>
        </section>
    )
}

export default Educators