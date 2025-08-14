import getProducts from "../../utils/getProducts";
import Products from "../components/products";
import Search from "../components/search";

export default async function SearchResult({ searchParams }) {
    const { name } = await searchParams;
    const products = await getProducts(name);

    return (
        <div className="w-full flex flex-col gap-8 p-2">
            <h1 className="text-2xl font-bold text-center">Product Search</h1>

            <Search />

            {products?.length > 0 ? (
                <Products products={products} />
            ) : (
                <h1>No products found!</h1>
            )}
        </div>
    );
}
