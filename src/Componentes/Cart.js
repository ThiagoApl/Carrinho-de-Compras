import styled from "styled-components";
import Button from "./Button";
import products from "../controllers/products";

/* Elemento do iten da lista personalizado  com Css */

const SLi = styled.li`
    margim-bottom: 0px;
    padding: 16px;
    border-radius:  8px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/* Elemento de bloco informativo personalizado com CSS*/

const SDivInfo = styled.div`
    p {
        font-size: 16px;
        margin-bottom: 2px;
      }
  span {
        font-size: 16px;
        font-weight: bold;
  }
`;

/* Elemento de bloco de unidades personalizado CSS */

const SDivUnits = styled.div`
    width: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    buttom {
        padding: 5px 10px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

/**
 * Componentes para listagem de produtos no carrinho
 * @param {object} product Produto para listagem
 */
function CartProduct({ product, onChange, isLoading}) {
    return (
        <SLi>
            <SDivInfo>
                <p>{product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
        <SDivUnits>
            <button disabled={isLoading} onClick={() => onChange(product, -1)}>
                -
            </button>
            <p>{products.units}</p>
            <button disabled={isLoading} onClick={() => onChange(product, + 1)}>
                +
            </button>
        </SDivUnits>
        </SLi>
    );
}

/*Elemento de Seção Personalizado com CSS*/

const SSection = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px;
`;

/*Elemento de lista  personalizada com CSS*/

const SUl = styled.ul`
    list-style-type: none;
`;

/**
 * Componentes para listagem de Produtos  no carrinho
 * @param  {Object[]} products Produtos para listagem
 * @param {function} onClick Função de Finalização
 * @param {boolean} isLoading Status Loading
 */
    
 function Cart ({ products, onChange, onClick, isLoading = false}) {
    return (
        <SSection>
            <SUl>
                {products.map((product) => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        onChange={onchange}
                        isLoading={isLoading}
                />
            ))}    
                    </SUl>  
        </SSection>
    );
 }

 export default Cart;