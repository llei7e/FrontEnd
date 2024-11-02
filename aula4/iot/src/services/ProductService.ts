import axios from 'axios';

// Define o tipo dos dados que você espera receber
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    sku: string;
    image_url: string;
    rating?: { // Torne a propriedade rating opcional
        rate: number;
        count: number;
    };
}

const api_link = "https://api.mockae.com/fakeapi/products/"

// Defina o tipo de retorno da Promise
export const fetchProductData = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(api_link);
        return response.data; // Retorna diretamente os dados recebidos
    } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error; // Lança o erro para que o chamador possa tratá-lo
    }
};
