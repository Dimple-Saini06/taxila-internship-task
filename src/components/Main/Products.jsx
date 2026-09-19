import {useState, useEffect} from 'react';
import ProductCard from './ProductCard';

export default function Products(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:8080/api/products")
        .then((res)=>{
            if (!res.ok) {
                throw new Error("Failed to fetch products");
            }
            return res.json();
        }).then((data)=>{
            setProducts(data);
            setLoading(false);
        }).catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
                <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
                    <div className="mb-3 text-3xl">⚠️</div>

                    <h2 className="text-lg font-semibold text-red-700">
                        Something went wrong
                    </h2>

                    <p className="mt-2 text-sm text-red-600">
                        {error}
                    </p>

                    <button
                        className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return(
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5">
            <section className="rounded-3xl border-2 border-amber-100 bg-linear-to-tr from-amber-100 via-white to-purple-100 p-5 md:p-7">
                <h2 className="text-2xl font-bold mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 cursor-pointer">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    )
}