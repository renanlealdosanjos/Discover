import styles from './Menu.css'
import horizontalLogo from './imgs/Horizontal Logo.png'
import account from './imgs/account.png'

function Menu() {
    return(
        <div className='menuHeader'>
            <img src={horizontalLogo} alt="Motim Educação" className='logoMenu'/>
            <div>
                <ul className='linksMenu' type='none'>
                    <li><a href="#" className='itemsMenu'>Home</a></li>
                    <li><a href="#" className='itemsMenu'>Programa Master</a></li>
                    <li><a href="#" className='itemsMenu'>Blog</a></li>
                    <li><a href="#" className='itemsMenu'>Sobre a Motim</a></li>
                </ul>
            </div>
            <div className='accessMenu'>
                <a className="login" href="#">
                    <img src={account} alt="" className='profileMenu'/>
                    ENTRAR
                </a>
                <a className = "createMenu" href="#">CRIAR CONTA</a>
            </div>
        </div>
    )
}

export default Menu