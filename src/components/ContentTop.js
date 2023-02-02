import iconeSearch from '../assets/icone-search.png'
import iconePerfil from '../assets/icone-perfil.png'
import iconeSino from '../assets/icone-sino.png'
import iconeSacola from '../assets/icone-sacola.png'

function ContentTop() {
    return (
        <div className="content-top w-full flex flex-col-reverse sm:flex-row sm:justify-between items-center">
            <div className='searchbar rounded-md relative overflow-hidden mt-6 sm:mt-0'>
                <img src={iconeSearch} alt="Lupa" className='absolute bottom-1 left-4'/>
                <input type="text" placeholder='Procurar' className='bg-[#363638] rounded-md text-white h-full py-2 px-14 text-[10px] w-[308px]'/>
            </div>

            <div className='account-items flex items-center text-white'>
                <span>Will Smith</span>
                <img src={iconePerfil} alt="Perfil" className='ml-4 w-[34px] h-[34px]' />
                <img src={iconeSino} alt="Sino" className='ml-4 w-[20px] h-[20px]' />
                <img src={iconeSacola} alt="Sacola" className='ml-4 w-[20px] h-[20px]' />
            </div>
        </div>
    )
}

export default ContentTop