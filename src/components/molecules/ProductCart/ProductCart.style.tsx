import styled, { css } from "styled-components";

export const StyledProductCart = styled.section(() => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  .product {
    display: flex;
    

    .productInfo {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      h2 {
        font-size: 16px;
        margin: 0;
      }

      span {
        font-size: 12px;
      }
    }

  }
  .separator {
      border: 1px solid #e0e0e0;
      width: 90%;
      height: 1px;
      margin-top: 5px;
      margin-bottom: 30px;
    }
`);