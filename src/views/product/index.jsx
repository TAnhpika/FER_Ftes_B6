import ProductList from "@/components/shadcn-studio/blocks/product-list-01/product-list-01";
import { useProductsQuery } from "@/hooks/query/product";

const ProductScreen = () => {
    const { data, isLoading, error } = useProductsQuery(1);

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="flex items-center justify-center h-screen">
                    <p>Error loading products: {error.message}</p>
                </div>
            ) : data?.products ? (
                <ProductList products={data.products} />
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default ProductScreen;
