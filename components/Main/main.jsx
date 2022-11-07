import style from './main.css'
import addAccountImg from './imgs/addAccount.png'
import communityImg from './imgs/community.png'
import academyIcon from './imgs/academyIcon.png'

function Main() {
    return(
        <section>
            <h3>
                <img src={academyIcon} className="academyIcon"/>
                Motim Academy
            </h3>
            <h1>Plataforma de Capacitação</h1>
            <p>Programa prático e gratuito para você entrar no universo de tecnologia, entender todas as possibilidades da profissão e iniciar sua jornada no mundo dev.</p>
            <div className='create'>
                <a href="#" className='linkCreate'>
                    <div className='buttonCreate'>
                        <img src={addAccountImg} className="addAccountImg"/>
                        <span className='textButton'>CRIAR MINHA CONTA</span>
                    </div>
                </a>
                <div className='textCreate'>
                    <img src={communityImg} className="communityImg"/>
                    <span className="textCommunity">Junte-se gratuitamente a mais de <strong>168 mil</strong> devs</span>
                </div>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Bt9kcge8u2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='trailer'></iframe>
        </section>
    )
}

export default Main