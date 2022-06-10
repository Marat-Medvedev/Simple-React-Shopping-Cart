import React from 'react';

function Product(props) {
    const {product} = props;
    return (
        <div>
            <div className="group relative">
                <div
                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0"/>
                                {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </div>

            <div className="mt-3 sm:mt-5 sm:flex lg:justify-start">
                <div className="rounded-md shadow">
                    <a
                        href="#"
                        className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 py-3 px-12 hover:bg-indigo-700 lg:text-lg lg:py-2"
                    >
                        Add to bag
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Product;