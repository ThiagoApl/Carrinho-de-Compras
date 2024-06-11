import { useEffect, useState} from "react";
import styled from "styled-components";
import Cart from "./Componentes/Cart";
import products from "./controllers/products";

const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;

import { useEffect, useState } from "react";

/**
 * Função para Chamar API
 * @param {string} url caminho da função
 * @param {string} method método da função
 * @returns Objeto de Resposta
 */

async function api (url, method, body = undefined) {
    return await fetch(`http://localhost;4000${url}`, {
        body: body !== undefined ? JSON.stringify(body) : body,
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    }).then((res) => res.json());
}

/**
 * Busca todos produtos API
 * @returns lista produtos
 */

async function apiGetProducts() {
    const data = await api("/products", "GET");
    return data.products;
}

/**
 * Salva o Carrinho de Compras
 * @param {Object[]} product lista de produtos
  */

async function apiSubmitCart(products) {
    await api("/purchases", "POST", { products });
}

function App() {
    const [productsLoading, setProductsLoading] = useState(false); //Status do Loadingo do produtos
    const [products, setProducts] = useState([]); // Lista de produtos
    const [ cart, setCart] = useState([]); //Lista de Produtos no carrinho
    const [cartloading, setCartLoading] = useState(false); //Status de loading

/**
 * Busca de Produtos
  */
 async function getProducts() {
    setProductsLoading(true); // Ativa loading dos produtos
    setProducts(await apiGetProducts()); // Salva a lista de produtos na viravale global
    setProductsLoading(false) // Desativa loading de produtos
 }

    /**
     *  Salvar o Carrinho
     */

async function submitCart() {
    setCartLoading(true); // Ativa o Loadingdo carrinho
    await apiSubmitCart(cart); // salva o carrinho
    setCart([]) // limpa o carrinho
    setCartLoading(false); //Desativa do loadingdo carrinho//

    getProducts(); // busca os produtos novamente
    }
}

function setProducts (product, change) {
    const products = cart.filter(({ id }) => {
        return id !== product.id;
    });

product.units += change;
if (product.units > 0) {
    setCart(() =>[...products, product]);
} else {
    setCart(() => [...products]);
    setProducts((LastProducts) => [...LastProducts, product]);
}

function AddProduct (product) {
    product.units = 1;
    setCart(() => [...cart, product]);

    setProducts(() =>
        products.filter(({ id }) => {
            return id !== product.id;
        })
    );
}
useEffect(() => {
    getProducts();
}, []);

return

const Smain = styled.main`
    width: 100%
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr
`;

return (
    <Smain>
        <Cart 
            products={cart}
            onChange={setProducts}
            onClick={submitCart}
            isLoading={cartloading}
        />

        <products
            products={products}
            onClick={AddProduct}
            isLoading={productsLoading}
        />
       </Smain>
    );
}

export default App;