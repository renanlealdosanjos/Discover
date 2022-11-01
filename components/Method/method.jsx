import styles from './method.css'
import connectImg from './imgs/connect.webp'
import fundamentalsImg from './imgs/fundamentals.webp'
import especializeImg from './imgs/especialize.webp'

function Method() {
    return(
        <section className='sectionMethod'>
            <h2 className='methodTitle'>Comece sua carreira em programação do jeito certo</h2>
            <span>Entenda todas as possibilidades e avance na direção certa</span>
            <div  className='stepOne'>
                <div className='stepOneContent'>
                    <h3 className='stepOneH3'>1. Conectar</h3>
                    <p className='stepOneP'>Compreenda as bases e possibilidades do universo da programação e tenha clareza sobre o caminho para chegar ao seu objetivo.</p>
                    <div className='stepOneList'>
                        <ul>
                            <li>Fundamentos da programação</li>
                            <li>Internet, roteadores e servidores</li>
                            <li>Computador, software e hardware</li>
                            <li>Ambiente de desenvolvimento</li>
                        </ul>
                        <ul>
                            <li>Sistemas operacionais</li>
                            <li>Tipos de aplicações WEB</li>
                            <li>Linguagens de programação</li>
                        </ul>
                    </div>
                </div>
                <img src={connectImg}/>
            </div>
            <div className='stepTwo'>
                <img src={fundamentalsImg} className="fundamentalsImg"/>
                <div className='stepTwoContent'>
                    <h3 className='stepOneH3'>2. Fundamentar</h3>
                    <p className='stepOneP'>Escreva suas primeiras linhas de código para começar a resolver desafios do dia a dia do desenvolvimento web.</p>
                    <div className='stepTwoList'>
                        <ul className="rightList">
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Terminal</li>
                            <li>SQL</li>
                        </ul>
                        <ul className="rightList">
                            <li>CSS</li>
                            <li>DOM</li>
                            <li>NodeJS + EJS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='stepThree'>
                <div className='stepTwoContent'>
                    <h3 className='stepOneH3'>3. Especializar</h3>
                    <p className='stepOneP'>Trilha de conhecimento para expandir seu contato com soluções da programação web.</p>
                    <div className='stepThreeList'>
                        <ul className='leftList'>
                            <li className='leftItem'>JavaScript Assíncrono: Callbacks, Promises e Async/Await</li>
                            <li className='leftItem'>Front-end com transition e animation no CSS e os fundamentos de ReactJS</li>
                            <li className='leftItem'>Trabalhar relacionamentos e manipulação de tabelas no SQL</li>
                        </ul>
                        <ul className='leftList'>
                            <li className='leftItem'>Como funcionam e como construir e consumir APIs</li>
                            <li className='leftItem'>Introdução ao Typescript na programação web</li>
                            <li className='leftItem'>Ferramentas e técnicas no GitHub para trabalhar em times</li>
                        </ul>
                    </div>
                </div>
                <img src={especializeImg} className="especializeImg"/>
            </div>
        </section>
    )
}

export default Method