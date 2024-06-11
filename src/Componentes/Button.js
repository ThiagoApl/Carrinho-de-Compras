import styled from "styled-componnts";

const SButton = styled.button`
    cursor: pointer;
    padding: 18px 8px;
    width: 100%;
    color: #ffffff;
    background-color: 000000;
    font-size: 18px;
    border-radius: 8px;
`;

/**
 * @param {HTMLCollection} children Elementos Internos
 * @param {function} onClick Função ao Clicar
 * @param {Boolean} isLoading Status de Loading
 */
 function Button({ children, onClick, isLoading=false}) {
    return (
        <SButton onClick={onClick} disabled={isLoading}>
            {isLoading ? "Carregando..." : children}
        </SButton>
    );
 }
 export default Button;   
 