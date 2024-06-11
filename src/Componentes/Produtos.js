import styled from "styled-components";
import { param } from "../routes";
import products from "../controllers/products";

/* Elementos de blocos personalizados CSS */

const SDiv = styled.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;

    img {
        width: 100%;
        height: 140px;
        border-radius:  5px;
    }
`;

/* Elemento de Bloco de informação personalizada com CSS */

const SDivInfo = styled.div`
    padding: 15px;

    p{
        font-size: 15px;
    }
    span {
        font-size: 20px;
        font-weight: bold;
    }
`;
/**
 * @param {Object} Product 
 * @param {Function} onClick
 */

function Product({ product, onClick}) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <img src={product.image} alt={product.name} />
        <SDivInfo>
            <p>{product.name}</p>
            <span>R${product.price}</span>
        </SDivInfo>
    </SDiv>
    );
}
const SSection = styled.section`
    overflow: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows:  230px;
    gap: 20px
`;
/**
 * @param {Object[]} product produto na listagem
 * @param {function} onClick função seleção
 */

function Products({ Products, onClick, isLoading = false}) {
    return (
        <SSection>
            {isLoading //Verifica se esta Loading
            ? "Carregando.."
            : product.length> 0 // Verifica no sistema se existem o produtos
            ? products.map((product) => (
                <product key={product.id} product={product} onClick={onClick} />
            ))
            : "Nenhum produto encontrado!"}
        </SSection>
    );
}
 
export default Products;
