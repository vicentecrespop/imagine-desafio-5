import ProductsContainer from "./ProductsContainer"

function ProductsDisplay() {
    return (
        <div className="products-display w-full text-white">
            <div className="products-display--top font-bold text-[10px] flex justify-between items-center">
                <div className="products-display--top--filters flex flex-col text-center md:items-center md:flex-row">
                    <span className="mr-8 mb-2">Nossos produtos</span>
                    <button className="bg-[#0300AB] px-8 py-2 rounded-xl mr-8 mb-2">TOP</button>
                    <button className="px-8 py-2 border rounded-xl mr-8 mb-2">Popular</button>
                    <button className="px-8 py-2 border rounded-xl mr-8 mb-2">Mais vendidos</button>
                </div>
                <span className="font-normal">Categoria</span>
            </div>
            <ProductsContainer />
        </div>
    )
}

export default ProductsDisplay