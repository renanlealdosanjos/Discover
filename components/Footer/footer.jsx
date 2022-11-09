import boostingImg from './imgs/boosting.png'
import githubIconImg from './imgs/githubIcon.png'
import linkedinIconImg from './imgs/linkedinIcon.png'
import styles from './footer.css'

function Footer() {
    return(
        <section className="sectionFooter">
            <div className='companyBox'>
                <img src={boostingImg} alt="Motim Educação" className='boostingImg'/>
                <span>Motim Educação 2022</span>
                <span>Todos os direitos reservados</span>
            </div>
            <div className='contactsLink'>
                <h6 className='linksTitle'>Contatos</h6>
                <span className='contactsName'>Renan Leal</span>
                <a href='#' className='footerLink'>renan@motim.me</a>
                <span className='contactsName'>Felipe Rochefeller</span>
                <a href='#' className='footerLink'>felipe@motim.me</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Programas</h6>
                <a href="#" className='footerLink'>Master Excel</a>
                <a href="#" className='footerLink'>Master Power BI</a>
                <a href="#" className='footerLink'>Master VBA</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Sobre</h6>
                <a href="#" className='footerLink'>Sobre a Motim</a>
                <a href="#" className='footerLink'>Direitos autorais</a>
                <a href="#" className='footerLink'>Termos de uso</a>
                <a href="#" className='footerLink'>Política de privacidade</a>
            </div>
            <div className='boxLinks'>
                <h6 className='linksTitle'>Dúvidas</h6>
                <a href="#" className='footerLink'>Comunidade</a>
                <a href="#" className='footerLink'>Central de ajuda</a>
            </div>
            <div className='otherContacts'>
                <a href="https://github.com/renanlealdosanjos" className='buttonLink'>
                    <img src={githubIconImg} alt="Página do GitHub" className='iconLink'/>
                </a>
                <a href="https://linkedin.com/in/renanlealdosanjos" className='buttonLink'>
                    <img src={linkedinIconImg} alt="" className='iconLink'/>
                </a>
                <span className='signature'>made by @renanlealdosanjos</span>
            </div>
        </section>
    )
}

export default Footer