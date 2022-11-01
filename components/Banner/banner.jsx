import style from './banner.css'
import checkboxImg from './imgs/checkbox.png'
import accountImg from '../Main/imgs/addAccount.png'
import laptopImg from './imgs/laptop.png'

function Banner() {
    return(
        <section className='bannerSection'>
            <div className='bannerInfo'>
                <h3 className='infoTitle'>Comece a programar do zero gratuitamente</h3>               
                <span className='infoText'><img src={checkboxImg} className="checkbox"/>Formação completa com mais de 600 aulas</span>
                <span className='infoText'><img src={checkboxImg} className="checkbox"/>Desafios práticos com aplicações reais</span>
                <span className='infoText'><img src={checkboxImg} className="checkbox"/>Conteúdo sempre atualizado</span>
                <a href="#" className='bttCreate'>
                    <div className='buttonDetails'>
                        <img src={accountImg} alt="Criar minha conta" className='accountImg'/>
                        CRIAR MINHA CONTA
                    </div>
                </a>
            </div>
            <img src={laptopImg} className='laptopImg'/>
        </section>
    )
}

export default Banner