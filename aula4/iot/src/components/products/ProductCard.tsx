'use client'
import "@/styles/styles.css";
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '@/services/ProductService';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    sku: string;
    image_url: string;
    rating?: {
        rate: number;
        count: number;
    };
}

export default function ProductCard() {
    const [prodData, setProdData] = useState<Product[]>([]); // Estado como array de produtos

    useEffect(() => {
        const getProdData = async () => {
            try {
                const data = await fetchProductData();
                setProdData(data); // Armazena a lista de produtos
            } catch (error) {
                console.error('Erro ao requisitar os dados: ', error);
            }
        };
        getProdData();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-2 p-2 montserrat">
            {prodData.map(product => (
                <div key={product.id} className="ProductCards">
                    <img className="w-full h-2/3 rounded-lg" src={"https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/yjubjckd/tenis-nike-sb-dunk-low-pro-iso-court-purple-brancoroxo.jpg"} alt={product.name} />
                    <div>
                        <p>{product.name}</p>
                        <p className="text-gray-800 text-sm">{product.category}</p>
                        <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>$ {product.price.toFixed(2)}</p>
                        <p>{product.rating ? `${product.rating.rate} (${product.rating.count} reviews)` : "N/A"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
