import products from "../data/products";

export default function getProducts(name) {
    return name
        ? products.filter((p) =>
              p?.title.toLowerCase().includes(name.toLowerCase())
          )
        : products;
}
