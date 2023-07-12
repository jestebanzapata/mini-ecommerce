import styled, { css } from "styled-components";

export const StyledCard = styled.div(() => css`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 250px;
  box-shadow: 0px 8px 24px #86a3c140;

  .info{
    margin: 0 5px 5px 5px;
    display: flex;
    flex-direction: column;
    font-size: 16px;

    h2 {
      color: #868686;
    }

    span {
          font-size: 16px;
    }

    .bold {
      font-weight: bold;
    }
  }

  &:hover {
    box-shadow: 0px 8px 24px #86a3c181;
  }

`);