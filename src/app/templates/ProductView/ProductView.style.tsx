import styled, { css } from "styled-components";

export const ProductContainer = styled.section(() => css`
  display: flex;
  width:100%;
  justify-content: center;
  margin-top: 50px;
  
  .infoProduct {
    width:800px;
    display: flex;
    flex-direction: row;
  }

  .productDetail{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  .productDescription {
    font-weight: normal;
    text-align: justify;
    margin-bottom: 10px;
  }

  .cartButton {
    background-color: #937cd4;
    color: white;
    border-radius: 5px;
    border: none;
    height: 40px;
    width: 100%;
    margin-top: 10px;
  }
`);