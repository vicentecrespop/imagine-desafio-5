import Product from './Product'

import produtoOculos from '../assets/produto-oculos.png'
import produtoTeclado from '../assets/produto-teclado.png'
import produtoSom from '../assets/produto-som.png'
import produtoMonitor from '../assets/produto-monitor.png'
import produtoGabinete from '../assets/produto-gabinete.png'

import './Product.css'

function ProductsContainer() {
    return (
        <div className="products-container w-min-fit mt-9 mb-40 auto-cols-max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8">
            <Product img={produtoOculos} name="Oculos Virtual" description="VR Glasses" price="10,50"/>
            <Product img={produtoTeclado} name="Teclado Mecânico" description="VR Glasses" price="200" />
            <Product img={produtoSom} name="Caixa de som JBL" description="VR Glasses" price="400" />
            <Product img={produtoMonitor} name="Monitor 25 polegadas" description="VR Glasses" price="900" />
            <Product img={produtoGabinete} name="Monitor 25 polegadas" description="VR Glasses" price="900" />
            <Product img={produtoOculos} name="Oculos Virtual" description="VR Glasses" price="10,50"/>
            <Product img={produtoTeclado} name="Teclado Mecânico" description="VR Glasses" price="200" />
            <Product img={produtoSom} name="Caixa de som JBL" description="VR Glasses" price="400" />
            <Product img={produtoMonitor} name="Monitor 25 polegadas" description="VR Glasses" price="900" />
            <Product img={produtoGabinete} name="Monitor 25 polegadas" description="VR Glasses" price="900" />
        </div>       
    )
}

export default ProductsContainer