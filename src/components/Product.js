import iconePlus from '../assets/icone-plus.png'

function Product({ img, name, description, price}) {
    return (
        <div className="product bg-[#28282A] w-58 box-border h-64 lg:h-80 xl:h-64 pb-6 px-6 text-center relative flex flex-col items-center my-2">
            <img src={img} alt={name} className="relative -top-10 h-32"/>
            <h3 className='font-bold text-sm -mt-2'>{name}</h3>
            <p className='font-thin text-xs mt-2 mb-4'>{description}</p>
            <span className='text-[#5B1691] text-sm font-bold'>R${price}</span>
            <div className='absolute bottom-4 flex items-center'>
                <img src={iconePlus} alt="Add" className='text-[#5B1691] w-4 mr-2'/>
                <span className='font-bold uppercase text-[8px]'>Adicionar ao cartão</span>
            </div>
        </div>
    )
}

export default Product