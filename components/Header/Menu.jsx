import styles from './Menu.css'

function Menu() {
    return(
        <div className='menuHeader'>
            <img src="./imgs/Logo com texto.png" alt="Motim Educação" className='logoMenu'/>
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
                    <img src="./imgs/logo.png" alt="" className='profileMenu'/>
                    ENTRAR
                </a>
                <a className = "createMenu" href="#">CRIAR CONTA</a>
            </div>
        </div>
    )
}

export default Menu