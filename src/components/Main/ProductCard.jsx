export default function ProductCard({product}){
    return(
        <div className="rounded-2xl border border-gray-200 p-4 shadow-sm transition-transform duration-200 hover:scale-95">
            <div className="flex h-48 items-center justify-center rounded-xl bg-gray-50">
                <img src={product.images[0]} alt={product.title} className="w-40 h-40 object-contain" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-800">{product.title}</h3>
            <p className="mt-2 text-lg font-bold text-amber-600">₹{product.price}</p>
            <p className="mt-1 text-sm text-gray-500">Category: {product.category}</p>
            <p className="mt-2 text-sm text-gray-700">Rating: ⭐{product.rating}</p>
        </div>
    )
}