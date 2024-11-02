'use client'; // Adicione esta linha

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/products/ProductCard";

export default function Climate() {
    return (
        <div className="flex text-black">
            <Sidebar />
            <div className="flex-1">
                <Header title="Produtos" username="Lucas Leite" />
                <main className="bg-white ">
                    <ProductCard/>
                </main>
            </div>
        </div>
    );
}
