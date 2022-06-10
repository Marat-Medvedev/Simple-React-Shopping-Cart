import React from 'react';
import Product from "./Product";

function Main(props) {
    const {products} = props;
    return (
        <main className="bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Accessorise</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Main;