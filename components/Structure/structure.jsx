import styles from './structure.css'
import structureOneImg from './imgs/structureOne.png'
import structureTwoImg from './imgs/structureTwo.png'
import structureThreeImg from './imgs/structureThree.png'
import structureFourImg from './imgs/structureFour.png'
import structureFiveImg from './imgs/structureFive.png'
import arrowImg from './imgs/arrow.png'

function Structure() {
    return(
        <section className='sectionStructure'>
            <div className='textStructure'>
                <h2 className='infoStructure'>Estrutura completa para evoluir</h2>
                <h3 className="subTitle">Nosso propósito é impulsionar pessoas através da educação.</h3>
                <p className='infoStructure'>Queremos dar e elas o poder de acessar as melhores oportunidades de suas carreiras. Não medimos esforços para fazer isso acontecer.</p>
            </div>
            <div className='listStructure'>
                <div className='Structures'>
                    <div className='boxOne'>
                        <img src={structureOneImg} alt="Notebook" className='structureImg'/>
                        <img src={arrowImg} alt="Arrow Dow" className='arrowImg' />
                    </div>
                    <div className='boxTwo'>
                        <h4 className='titleBoxTwo'>Descubra o universo de tecnologia</h4>
                        <span className='textBoxTwo'>Ao entrar no Discover, você terá acesso a trilhas ordenadas e sequencias para avançar na direção certa, te conectando ao universo de tecnologia e te ajudando a preparar seu ambiente para escrever suas primeiras linhas de código. Tudo de forma clara e simples.</span>
                    </div>
                </div>
                <div className='Structures'>
                <div className='boxOne'>
                        <img src={structureTwoImg} alt="Notebook" className='structureImg'/>
                        <img src={arrowImg} alt="Arrow Dow" className='arrowImg' />
                    </div>
                    <div className='boxTwo'>
                        <h4 className='titleBoxTwo'>Método de aprendizado eficiente</h4>
                        <span className='textBoxTwo'>A metodologia do Discover é trabalhada e aperfeiçoada a partir de um conjunto de 12 métodos de aprendizagem ativa que garante o máximo de eficiência nos seus estudos. Foco, muita prática e conexão com devs são os pilares que sustentam a metodologia.</span>
                    </div>
                </div>
                <div className='Structures'>
                    <div className='boxOne'>
                        <img src={structureThreeImg} alt="Notebook" className='structureImg'/>
                        <img src={arrowImg} alt="Arrow Dow" className='arrowImg' />
                    </div>
                    <div className='boxTwo'>
                        <h4 className='titleBoxTwo'>Projetos práticos com aplicações reais</h4>
                        <span className='textBoxTwo'>Para entender de verdade como funciona o universo da programação web, suas primeiras linhas de código serão feitas diretamente programando páginas e aplicativos web, desde o contato básico à programação até o contato inicial com linguagens web mais complexas.</span>
                    </div>
                </div>
                <div className='Structures'>
                    <div className='boxOne'>
                        <img src={structureFourImg} alt="Notebook" className='structureImg'/>
                        <img src={arrowImg} alt="Arrow Dow" className='arrowImg' />
                    </div>
                    <div className='boxTwo'>
                        <h4 className='titleBoxTwo'>Plataforma que une todo ecossistema</h4>
                        <span className='textBoxTwo'>Todo o programa acontece dentro da nossa plataforma que garante apoio à educação continuada e networking. Além disso, ela une toda a jornada de aprendizado conectando estudantes, profissionais e empresas. Quanto mais você evolui, mais se destaca para o mercado.</span>
                    </div>
                </div>
                <div className='Structures'>
                    <div className='boxOne'>
                        <img src={structureFiveImg} alt="Notebook" className='structureImg'/>
                    </div>
                    <div className='boxTwo'>
                        <h4 className='titleBoxTwo'>Certificação da Rocketseat</h4>
                        <span className='textBoxTwo'>Ao concluir as aulas e projetos, a Rocketseat atesta sua participação no programa para que você emita um certificado reconhecido pela comunidade de devs e por grandes empresas nacionais e internacionais que você está começando no mundo de desenvolvimento web.</span>
                    </div>
                </div>                                                                                                
            </div>

        </section>

    )
}

export default Structure