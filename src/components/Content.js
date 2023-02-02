import ContentTop from "./ContentTop"
import ContentDisplay from "./ContentDisplay"
import ProductsDisplay from "./ProductsDisplay"

function Content() {
    return (
        <div className="content w-full h-min-screen bg-[#1E1E1E] py-8 px-6 sm:px-12 md:px-20">
            <ContentTop />
            <ContentDisplay />
            <ProductsDisplay />
        </div>
    )
}

export default Content