import boostingImg from './imgs/boosting.png'
import styles from './footer.css'

function Footer() {
    return(
        <section className="sectionFooter">
            <div className='companyBox'>
                <img src={boostingImg} alt="Motim Educação" className='boostingImg'/>
                <span>Rocketseat 2022</span>
                <span>Todos os direitos reservados</span>
            </div>
            <div className='contactsLink'>
                <h6 className='linksTitle'>Assessoria de imprensa</h6>
                <span className='contactsName'>Du Paulino</span>
                <a href='#' className='footerLink'>du.paulino@midiaria.com</a>
                <span className='contactsName'>Jéssica Flausino</span>
                <a href='#' className='footerLink'>jessica.flausino@midiaria.com</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Programas</h6>
                <a href="#" className='footerLink'>Discover</a>
                <a href="#" className='footerLink'>Ignite</a>
                <a href="#" className='footerLink'>Explorer</a>
                <a href="#" className='footerLink'>Blog</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Sobre</h6>
                <a href="#" className='footerLink'>A Rocketseat</a>
                <a href="#" className='footerLink'>Direitos autorais</a>
                <a href="#" className='footerLink'>Termos de uso</a>
                <a href="#" className='footerLink'>Política de privacidade</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Dúvidas</h6>
                <a href="#" className='footerLink'>Comunidade</a>
                <a href="#" className='footerLink'>Central de ajuda</a>
            </div>
        </section>
    )
}

export default Footer