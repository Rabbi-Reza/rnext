import Product from "./product";

export default function Products({ products }) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
                <Product key={p.id} product={p} />
            ))}
        </div>
    );
}
