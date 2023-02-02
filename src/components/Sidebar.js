import { useState } from 'react'

import iconeCapacete from '../assets/icone-capacete.png'
import iconeCarteira from '../assets/icone-carteira-de-cartao.png'
import iconeCopas from '../assets/icone-copas.png'
import iconePesquisar from '../assets/icone-pesquisar.png'
import iconeUsuario from '../assets/icone-usuario.png'
import iconeMouse from '..//assets/icone-mouse.png'
import iconeFones from '..//assets/icone-fones.png'
import iconeMousePad from '..//assets/icone-mouse-pad.png'
import iconeOculos from '..//assets/icone-oculos.png'
import iconeTeclado from '..//assets/icone-teclado.png'
import iconeComputador from '..//assets/icone-computador.png'
import iconeTwitter from '..//assets/icone-twitter.png'
import iconeFacebook from '..//assets/icone-facebook.png'
import iconeYoutube from '..//assets/icone-youtube.png'
import iconeTiktok from '..//assets/icone-tiktok.png'
import iconeWhatsapp from '..//assets/icone-whatsapp.png'
import iconeAjuda from '../assets/icone-ajuda.png'
import iconeCondicoes from '../assets/icone-condicoes.png'
import iconeInformacoes from '../assets/icone-informacoes.png'

function Sidebar() {

    const [sidebarStart, setSidebarStart] = useState('72')

    const openSidebar = () => {
        setSidebarStart('0')
    }

    const closeSidebar = () => {
        setSidebarStart('72')
    }

    return (
        <>
            <button onClick={openSidebar} className='sidebar-button--open lg:hidden absolute top-8 left-2 md:left-6 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div className={`sidebar bg-[#191919] text-white absolute lg:static top-0 -left-${sidebarStart} z-10 xl:flex flex-col items-center px-12 h-min-screen text-xs`}>
                <div className="sidebar-top--icons flex justify-center mt-8 mb-2 relative">
                    <img src={iconeCapacete} alt="Capacete" className='mr-2 h-10'/>
                    <div className='uppercase flex flex-col w-[37px] text-[10px]'>
                        <span className='text-[#0300AB]'>Good</span>
                        Games
                    </div>
                    <button onClick={closeSidebar} className='sidebar-button--close lg:hidden absolute -top-4 -right-8 xl:-right-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>

                <button className="sidebar-button w-[182px] py-4 bg-[#0300AB] rounded-3xl uppercase font-bold my-12">
                    Catalago
                </button>

                <div className="sidebar-middle w-[182px]">
                    <div className="sidebar-middle--item flex justify-start items-center mb-6">
                        <img src={iconeUsuario} alt="Usuario" className=' mr-4'/>
                        <span>Perfil</span>
                    </div>

                    <div className="sidebar-middle--item flex items-center mb-6">
                        <img src={iconePesquisar} alt="Pesquisar" className=' mr-5'/>
                        <span>Procurar</span>
                    </div>

                    <div className="sidebar-middle--item flex items-center mb-6">
                        <img src={iconeCopas} alt="Copas" className=' mr-4'/>
                        <span>Favoritos</span>
                    </div>

                    <div className="sidebar-middle--item flex items-center mb-6">
                        <img src={iconeCarteira} alt="Carteira" className=' mr-4'/>
                        <span>Saldo</span>
                    </div>
                </div>

                <div className='sidebar-categories w-[182px]'>
                    <h2 className=' mb-14 mt-10 text-2xl font-bold uppercase'>Categoria</h2>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeMouse} alt="Mouse" className='mr-4'/>
                        <span>Mouse</span>
                    </div>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeFones} alt="Fones" className='mr-4'/>
                        <span>Fones</span>
                    </div>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeMousePad} alt="MousePad" className='mr-4'/>
                        <span>Mouse Pad</span>
                    </div>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeOculos} alt="Oculos" className='mr-4'/>
                        <span>Oculos Virtual</span>
                    </div>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeTeclado} alt="Teclado" className='mr-4'/>
                        <span>Teclado</span>
                    </div>
                    <div className='sidebar-categories--item flex items-center mb-6'>
                        <img src={iconeComputador} alt="Computador" className='mr-4'/>
                        <span>Computador</span>
                    </div>
                </div>

                <div className='sidebar-socials w-[182px] flex mb-14 mt-10'>
                    <img src={iconeTwitter} alt="Twitter" className='ml-3'/>
                    <img src={iconeFacebook} alt="Facebook" className='ml-3'/>
                    <img src={iconeYoutube} alt="Youtube" className='ml-3'/>
                    <img src={iconeTiktok} alt="Tiktok" className='ml-3'/>
                    <img src={iconeWhatsapp} alt="Whatsapp" className='ml-3'/>
                </div>

                <div className='sidebar-bottom w-[182px]'>
                    <div className='sidebar-bottom--item flex items-center mb-6'>
                        <img src={iconeAjuda} alt="Ajuda" className='mr-4'/>
                        <span>Ajuda</span>
                    </div>
                    <div className='sidebar-bottom--item flex items-center mb-6'>
                        <img src={iconeCondicoes} alt="Condicoes" className='mr-4'/>
                        <span>Condições</span>
                    </div>
                    <div className='sidebar-bottom--item flex items-center mb-6'>
                        <img src={iconeInformacoes} alt="Informacoes" className='mr-4'/>
                        <span>Informaçõess</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar