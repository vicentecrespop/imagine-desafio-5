import iconeEstrelaCheia from '../assets/icone-estrela-cheia.png'
import iconeEstrela from '../assets/icone-estrela.png'
import iconeHeadset from '../assets/icone-headset.png'
import iconeSoma from '../assets/icone-soma.png'
import iconePoligono from '../assets/icone-poligono.png'

import './ContentDisplay.css'

function ContentDisplay() {
    return (
        <div className="content-display h-auto lg:h-80 flex flex-col-reverse md:flex-row w-full text-white pl-8 lg:pl-32 pr-8 sm:pr-2 py-10 mt-12 mb-6">
            <div className='content-display-info mt-72 sm:mt-44 md:mt-0 flex flex-col items-center sm:items-start text-white w-full sm:w-2/3'>
                <div className='content-display-rating flex'>
                    <img src={iconeEstrelaCheia} alt="Estrela" className='mr-1 w-4' />
                    <img src={iconeEstrelaCheia} alt="Estrela" className='mr-1 w-4' />
                    <img src={iconeEstrelaCheia} alt="Estrela" className='mr-1 w-4' />
                    <img src={iconeEstrelaCheia} alt="Estrela" className='mr-1 w-4' />
                    <img src={iconeEstrela} alt="Estrela" className='mr-1 w-4' />
                </div>
                <span className='font-bold my-1 text-lg'>Headphones</span>
                <span className='text-[#838282] text-sm'>"W103 Sinta a Magica"</span>
                <span className='text-[#7F00E2] text-sm'>Headset</span>
                <hr className='w-28 my-4' />
                <span className='text-sm'>Suas emoções começam quando você coloca os headphones, então não perca essa oportunidade.</span>
                <div className='content-display-buttons mt-6'>
                    <button className='bg-[#7F00E2] py-2 px-12 text-[10px] rounded-3xl mr-6 mb-3'>Comprar</button>
                    <button className='py-2 px-4 text-[10px] border rounded-3xl'>Adicionar ao carrinho</button>
                </div>
            </div>

            <div className='content-display-item w-[281px] sm:w-full h-full absolute sm:relative top-40 sm:top-0 -right-2 sm:left-0'>
                <div className='absolute right-36 mr-3 top-14 border rounded-full p-1'>
                    <div className='border rounded-full p-1'>
                        <div className='border-2 border-[#4B0781] rounded-full'>
                            <img src={iconeSoma} alt="Soma" className='bg-white p-1 rounded-full border-2 border-[#5B1691]'/>
                        </div>
                    </div>
                </div>
                <img src={iconeHeadset} alt="Headset" className='absolute right-10 -top-16'/>
                <div className='text-left bg-[#5B1691] flex p-4 w-fit text-center rounded-md absolute top-4 right-56'>
                    <img src={iconePoligono} alt="Poligono" className='absolute right-1 -bottom-5'/>
                    <span className='w-32 font-thin text-[10px]'>2.4 GHZ <span className='font-bold'>20HZ-20KHZ</span> RADIUS OF ACTION 9M.</span>
                </div>
                <div className='text-right  bg-[#5B1691] flex py-4 px-2 w-fit text-center rounded-md absolute top-52 right-4'>
                    <img src={iconePoligono} alt="Poligono" className='absolute -top-5 left-1 rotate-180'/>
                    <span className='w-32 font-thin text-[10px]'>AUDIO COMO VOCÊ NUNCA VIU.</span>
                </div>
            </div>
        </div>
    )
}

export default ContentDisplay